const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");

const Authenticate = async (req, res, next) => {
  try {
    const tok = req.cookies.sstoken;
    const verify = jwt.verify(tok, process.env.SECRET_KEY);
    const userget = User.findOne({ _id: verify.id, "tokens.token": tok });
    if (!userget) throw new Error("user not found");

    req.token = tok;
    req.userget = userget
    req.userID = userget._id
  } catch (error) {
    res.status(401).send("Unauthorized");
    console.log(err);
  }
};
