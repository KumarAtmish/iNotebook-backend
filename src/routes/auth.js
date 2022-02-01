const express = require('express')
const router = express.Router();
const User = require("../models/User")

//create a user using: Post "/api/auth/". Doesn't required auth
router.post("/", (req,res) => {
    console.log(req.body);
    // const user = new User(req.body);
    const user = new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    });
    user.save();
    res.send(user);
})

module.exports = router