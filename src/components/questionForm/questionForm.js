import React, { useState, useEffect } from "react";
import styles from "./questionForm.module.css";
import Button from "../button/button";

const QuestionForm = () => {
  const [title, setTitle] = useState();
  const onClickHandler = async () => {
    const token = window.localStorage.token;

    if (token) {
      const questionDetails = {
        title: title,
      };
      await fetch("http://localhost:3000/question", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(questionDetails),
      })
        .then((res) => {
          return res.json();
        })
        .then((result) => {
          console.log(result);
        });
    } else {
      alert("Please login or sign!");
    }
  };

  useEffect(() => {
    onClickHandler();
  }, []);

  return (
    <div className={styles.main}>
      <h1>Ask a question</h1>
      <textarea
        rows="6"
        cols="50"
        placeholder="Enter question...."
        onChange={(event) => setTitle(event.target.value)}
        value={title}
      ></textarea>
      <Button text="Submit" onClick={onClickHandler} />
    </div>
  );
};

export default QuestionForm;
