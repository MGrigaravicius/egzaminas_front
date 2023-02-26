import Navbar from "../../components/navbar/navbar";
import Login from "../../components/login/login";
import styles from "./login.module.css";

function App() {
  return (
    <div className={styles.main}>
      <Navbar />
      <Login />
    </div>
  );
}

export default App;
