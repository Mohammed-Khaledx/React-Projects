import styles from ".././CSS/page.module.css";

function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>Fun facts about React</h1>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>

          <li>Has over 100K stars on GitHub</li>

          <li>Is maintained by Facebook</li>
          <li>Power thousands of enterprises apps, including mobile apps</li>
        </ul>
      </div>
    </main>
  );
}

export default Main;
