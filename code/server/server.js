
const morgan = require("morgan");//npm install morgan - הצגה של פרטי בקשות api בקונסול
const express = require("express");//npm install express - הגדרת שרת קליל לתפעול
const mongoose = require("mongoose");//npm install mongose-יכולת לתקשר עם מונגו ויכולת ליצור סכמות ואובייקטים
const dotenv = require("dotenv");//npm install dotevn - secure access to env file 

const userRoute = require("./router/user");
const loginRoute = require("./router/login");

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


//app.use("/users", userRoute); טיפול בבעית רוטר
app.use("/login", loginRoute);


app.listen(5555, () => {
    console.log("good");
})



