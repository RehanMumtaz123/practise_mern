import React, {useState} from "react";

const login = () => {
  // const [name, useName] = useState("");
  // const [email, useEmail] = useState("");
  // const [passwd, usePasswd] = useState("");

  return (
    <div className="login">
      <form className="login__form">
        <h1>Login here 💖</h1>
        <input
          type="name"
          placeholder="your name"
          // value={name}
// ?          onChange={(e) => useName(e.target.value)}
        ></input>
        <input
          type="email"
          placeholder="your email"
          // value={email}
          // onChange={(e) => useEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="your paswd"
          // value={passwd}
          // onChange={(e) => usePasswd(e.target.value)}
        ></input>
        <button type="submit" className="button_login">submit</button>
      </form>
    </div>
  );
};

export default login;
