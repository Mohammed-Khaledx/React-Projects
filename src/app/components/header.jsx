/* eslint-disable @next/next/no-img-element */
import styles from ".././CSS/page.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.navContainer}>
          <div>
            <img src="favicon.ico" alt="" width={50} />
            <h1>React With Next JS</h1>
          </div>

          <h3>React Course-Project one </h3>
        </nav>
      </div>
    </div>
  );
}

export default Header;
