import Navbar from "../../components/navbar/navbar";
import AnswerMain from "../../components/answersMain/answersMain";
import styles from "./answers.module.css";

function Answers() {
  return (
    <div className={styles.main}>
      <Navbar />
      <AnswerMain />
    </div>
  );
}

export default Answers;
