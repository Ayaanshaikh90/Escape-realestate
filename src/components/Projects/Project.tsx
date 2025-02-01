import styles from "./Project.module.css";

const Project = () => {
  return (
    <section className={styles.projectSection}>
      <div className={styles.projectContent}>
        <h2>Project 01</h2>
        <span>Exterior And Interior</span>
        <h3>Abstract Valley</h3>
        <div className={styles.projectTextContent}>
          <h3>Project Overview</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit, id exercitationem nobis dolor vero asperiores
            nesciunt atque nam autem ipsa pariatur, deserunt alias ipsam fugit
            quibusdam ratione officia? Illum, temporibus.
          </p>
        </div>
      </div>
      <img src="/image.png" alt="" />
    </section>
  );
};

export default Project;
