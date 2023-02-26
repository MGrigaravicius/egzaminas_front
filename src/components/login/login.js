import React, { useState, useEffect } from "react";
import styles from "./login.module.css";
import Input from "../input/input";
import Button from "../button/button";

const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onClickHandler = () => {
    const userInfo = {
      email: email,
      password: password,
    };

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        window.localStorage.setItem("token", data.jwt_token);
        return data.status;
      })
      .then((result) => {
        alert(result);
      });
  };
  useEffect(() => {
    onClickHandler();
  }, []);
  return (
    <div className={styles.main}>
      <Input
        type="text"
        onChange={setEmail}
        value={email}
        placeholder="Email..."
      />
      <Input
        type="password"
        onChange={setPassword}
        value={password}
        placeholder="Password..."
      />
      <Button text="Login" onClick={() => onClickHandler()} />
    </div>
  );
};

export default LoginForm;
