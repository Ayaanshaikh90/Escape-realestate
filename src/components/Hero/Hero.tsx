import { ArrowRight } from "lucide-react";
import Navbar from "../Navbar/Navbar";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.heroBackground}>
      <Navbar />
      <h1 className={styles.heroHeading}>ESCAPE</h1>
      <img className={styles.heroPatternImage} src="/pattern.svg" alt="" />
      <div className={styles.heroContent}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
          quibusdam
        </p>
        <p>
          cum nisi doloremque fuga dicta vel unde, consequuntur tempora sit
          repellendus, excepturi dolores. Libero suscipit distinctio, eum velit
        </p>
        <button className={styles.heroButton}>
          our work <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
export default Hero;
