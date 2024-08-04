/* eslint-disable @next/next/no-img-element */
import styles from "./CSS/page.module.css"
import Info from "./components/info";
import About from "./components/about";
import Interests from "./components/interests";
import Footer from "./components/footer";




function Home() {
  return (
    <div className={styles.cardContainer}>
      <Info/>
      <About/>
      <Interests/>
      <Footer/>
    </div>
  );
}

export default Home;
