const router = require("express").Router();

// require("../db/connection");
const User = require("../model/userSchema");

router.post("/register", (req, res) => {
  const { name, email, phone, password, cpassword } = req.body;
  if (!name || !email || !phone || !password || !cpassword) {
    res.status(422).json({ message: "All fields need to be filled" });
  }
  
  User.findOne({ email: email })
  .then((user) => {
    if (user) res.status(421).json({ message: "user already exists" });
    else if (password != cpassword) {
      res.status(422).json({ message: "password are not matching" });
    } else {
      const user = new User({ name, email, phone, password, cpassword });
      user
          .save()
          .then(() => {
            res.status(201).json({ message: "success" });
          })
          .catch((err) => res.status(500).json({ message: err }));
      }
    })
    .catch((err) => console.log("error:", err));
});

module.exports = router;
