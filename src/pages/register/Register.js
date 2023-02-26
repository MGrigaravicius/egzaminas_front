import Navbar from "../../components/navbar/navbar";
import Register from "../../components/register/register";
import styles from "./register.module.css";

function App() {
  return (
    <div className={styles.main}>
      <Navbar />
      <Register />
    </div>
  );
}

export default App;
