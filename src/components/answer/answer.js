import React, { useState, useEffect } from "react";
import styles from "./answer.module.css";
import Button from "../button/button";

const AnswerForm = (question) => {
  const [content, setContent] = useState();
  const onClickHandler = async () => {
    const token = window.localStorage.token;
    const questionById = question.question._id;
    if (token) {
      const answerInfo = {
        content: content,
      };
      await fetch(`http://localhost:3000/answer/${questionById}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(answerInfo),
      }).then((res) => {
        return res.json();
      });
    } else {
      alert("Please login or sign up to ask a question!");
    }
  };

  useEffect(() => {
    onClickHandler();
  }, []);

  return (
    <div className={styles.main}>
      <input
        placeholder="Type answer here"
        onChange={(event) => setContent(event.target.value)}
        value={content}
      ></input>
      <Button text="Submit" onClick={onClickHandler} />
    </div>
  );
};

export default AnswerForm;
