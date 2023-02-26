import React, { useState } from "react";
import styles from "./register.module.css";
import Input from "../input/input";
import Button from "../button/button";

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onClickHandler = async () => {
    const userInfo = {
      name: name,
      email: email,
      password: password,
    };

    await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    }).then((res) => {
      return res.json();
    });
  };
  return (
    <div className={styles.main}>
      <Input
        type="text"
        onChange={setName}
        value={name}
        placeholder="Name..."
      />
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
      <Button text="Register" onClick={() => onClickHandler()} />
    </div>
  );
};

export default Register;
