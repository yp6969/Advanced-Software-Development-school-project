const router = require("express").Router()
const User = require('../schemas/user')
const bcrypt = require('bcrypt')



//register |  api/register/register
router.post('/register', async (req, res) => {
    //generate new password
    // const salt = await bcrypt.genSalt(10);
    //const hashePass = await bcrypt.hash(req.body.password, salt)

    const user = await new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    //try and catch does not work here we need sand a function 
    try {
        await user.save();
        res.status(200).json(user)
    } catch (err) {
        console.log(err);
    }
})


//LOGIN
router.post("/login", async (req, res) => {
    try {
        //check user form the request 
        const user = await User.findOne({ email: req.body.email })
        if (!user) res.status(404).json("user not found")

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(400).json("wrong password")

        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
});



module.exports = router;