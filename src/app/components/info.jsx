/* eslint-disable @next/next/no-img-element */
import styles from "../CSS/page.module.css";
function Info() {
  return (
    <div className={styles.info}>
      <img src="../favicon.ico" alt="" />
      <div className={styles.container}>
        <h1>Mohammed Khaloo</h1>
        <h4>FrontEnd Developer</h4>
        <p>KHALOO.Website</p>
        <div className={styles.btns}>
          <button>
            <i></i>Email
          </button>
          <button>
            <i></i>Linkedin
          </button>
        </div>
      </div>
    </div>
  );
}

export default Info;
