import { ArrowRight } from "lucide-react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <h2>Mission And Vission</h2>
      <h3>About Company</h3>
      <div className={styles.contentOne}>
        <strong>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          voluptas!
        </strong>
        <p>
          non, vitae eius similique. Libero quibusdam in consectetur cum facere
          consectetur cum facere pariatur id aliquam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
          repellendus? Hic deserunt voluptatum sapiente alias fuga accusamus
          non, vitae eius similique. Libero quibusdam in consectetur cum facere
        </p>
      </div>
      <p className={styles.contentTwo}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptate
        in ducimus natus, porro minus ad aspernatur, quidem eum voluptas
        suscipit delectus quod consequatur dolores sunt, eveniet dolorem
        perspiciatis assumenda.
      </p>
      <p className={styles.contentSix}>Explore more about escape <ArrowRight/></p>
      <div className={styles.contentThree}>
        <strong>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          voluptas!
        </strong>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
          repellendus? Hic deserunt voluptatum sapiente alias fuga accusamus
          non, vitae eius similique. Libero quibusdam in consectetur cum facere
          consectetur cum facere pariatur id aliquam.
        </p>
      </div>
      <div className={styles.contentFour}>
        <strong>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          voluptas!
        </strong>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
          repellendus? Hic deserunt voluptatum sapiente alias fuga accusamus
          non, vitae eius similique. Libero quibusdam in consectetur cum facere
          consectetur cum facere pariatur id aliquam.
        </p>
      </div>
      <div className={styles.contentFive}>
        <strong>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          voluptas!
        </strong>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
          repellendus? Hic deserunt voluptatum sapiente alias fuga accusamus
          non, vitae eius similique. Libero quibusdam in consectetur cum facere
          repellendus? Hic deserunt voluptatum sapiente alias fuga accusamus
          non, vitae eius similique. Libero quibusdam in consectetur cum facere
          consectetur cum facere pariatur id aliquam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
          repellendus? Hic deserunt voluptatum sapiente alias fuga accusamus
          non, vitae eius similique. Libero quibusdam in consectetur cum facere
          non, vitae eius similique. Libero quibusdam in consectetur cum facere
          consectetur cum facere pariatur id aliquam.
        </p>
      </div>
    </section>
  );
};

export default About;
