import React from "react";
import styles from "./answersMain.module.css";
import AnswerTop from "../../components/answerTop/answerTop";
import AnswersList from "../answersList/answersList";
import Answer from "../answer/answer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AnswerMain() {
  const { id } = useParams();
  const [answers, setAnswers] = useState();
  const fetchAnswers = async () => {
    const result = await fetch("http://localhost:3000/answers/" + id);
    const answers = await result.json().then((res) => {
      return res.data;
    });

    setAnswers(answers);
  };
  useEffect(() => {
    fetchAnswers();
  }, []);
  return (
    <>
      {answers &&
        answers.map((answer) => {
          return (
            <div className={styles.main}>
              <AnswerTop question={answer} />
              <Answer question={answer} />
              <AnswersList allAnswers={answer}></AnswersList>
            </div>
          );
        })}
    </>
  );
}

export default AnswerMain;
