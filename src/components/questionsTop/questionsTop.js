import React from "react";
import styles from "./questionsTop.module.css";
import Title from "../title/title";
import Button from "../button/button";
import { useNavigate } from "react-router-dom";

const QuestionsTop = ({ title }) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(`/askQuestion`);
  };
  return (
    <div className={styles.main}>
      <Title title={title} />
      <Button text="Ask question" onClick={() => onClickHandler()} />
    </div>
  );
};

export default QuestionsTop;
