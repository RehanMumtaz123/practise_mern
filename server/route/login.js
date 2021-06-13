const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = require("express").Router();

// require("../db/connection");
const User = require("../model/userSchema");

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email && !password) {
      res.status(422).json({ message: "All fields need to be filled" });
    } else {
      const uuser = await User.findOne({ email: email });

      if (uuser) {
        console.log("passwd:", uuser.password);
        await bcrypt.compare(
          password,
          uuser.password,
          async (err, result) => {
            if (err) {
              res.status(400).json({ message: "invalid credentials" });
              console.log("user:", uuser);
            } if(result) {
              const token = await uuser.generateAuthToken();
              res.cookie("sstoken", token, {
                expires: new Date(Date.now + 5340327898079),
                httpOnly: true,
              });
              res.json({ message: "successfully signed in !" });
            }
          }
          // console.log("mof:",  ismof);
          // console.log("toeken:",token)
        );
      } else {
        res.status(400).json({ message: "invalid" });
      }
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

// router.post("/signin", (req, res) => {
//   const { email, password } = req.body;
//   if (!email && !password) {
//     res.status(422).json({ message: "All fields need to be filled" });
//   } else {
//     User.findOne({ email: email })
//       .then((uuser) => {
//         console.log("passwd:", uuser.password);
//         const ismof = bcrypt.compare(password, uuser.password);
//         const token = uuser.generateAuthToken();
//         console.log("mof:", ismof);
//         res.cookie("sstoken", token, {
//           expires: new Date(Date.now + 5340327898079),
//           httpOnly: true,
//         });
//         // console.log("toeken:",token)
//         if (ismof) {
//           res.json({ message: "successfully signed in !" });
//         } else {
//           res.status(400).json({ message: "invalid credentials" });
//           console.log("user:", uuser);
//         }
//       })
//       .catch((err) => {
//         res.status(400).json({ message: "invalid" });
//         console.log("error:", err);
//       });
//   }
// });
