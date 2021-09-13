const cors = require("cors");


const morgan = require("morgan");//npm install morgan - הצגה של פרטי בקשות api בקונסול
const express = require("express");//npm install express - הגדרת שרת קליל לתפעול
const mongoose = require("mongoose");//npm install mongose-יכולת לתקשר עם מונגו ויכולת ליצור סכמות ואובייקטים
const dotenv = require("dotenv");//npm install dotevn - secure access to env file 

const userRoute = require("./router/user");
const loginRoute = require("./router/login");
const coursesRoute = require("./router/cours");


const port = "5555";
dotenv.config();//גישה לקובץ env

mongoose.connect(
    process.env.MONGO,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("Connected to MongoDB!");
    }
);

const app = express()
app.use(morgan("common"));
app.use(express.json());
app.use(cors());


//app.use("/users", userRoute); טיפול בבעית רוטר
app.use("/login", loginRoute);
app.use("/course", coursesRoute);

app.get('/', (req, res) => {
    console.log("welcome!");
    res.send("welcome")
})

app.listen(port, () => {
    console.log("listen to : " + port);
})
