const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = require("express").Router();

// require("../db/connection");
const User = require("../model/userSchema");

router.post("/signin", (req, res) => {
  const { email, password } = req.body;
  if (!email && !password) {
    res.status(422).json({ message: "All fields need to be filled" });
  } else {
    User.findOne({ email: email })
      .then(async (uuser) => {
        const ismof = await bcrypt.compare(password, uuser.password);
        const token = await uuser.generateAuthToken();
        // console.log("toeken:",token)
        res.cookie("sstoken", token, {
          expires: new Date(Date.now + 5678587),
          httpOnly: true,
        });
        if (ismof) {
          res.json({ message: "successfully signed in !" });
        } else {
          res.status(400).json({ message: "invalid credentials" });
          console.log("user:", uuser);
        }
      })
      .catch((err) => {
        res.status(400).json({ message: "invalid" });
        console.log("error:", err);
      });
  }
});


module.exports = router;
