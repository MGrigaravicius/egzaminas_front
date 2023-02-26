import React from "react";
import styles from "./mainBody.module.css";
import QuestionsList from "../questionsList/questionsList";
import QuestionsTop from "../questionsTop/questionsTop";

const MainBody = () => {
  return (
    <div className={styles.main}>
      <QuestionsTop />
      <QuestionsList />
    </div>
  );
};

export default MainBody;
