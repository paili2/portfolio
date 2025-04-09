import styles from "./Project.module.css";
import CardSlide from "./CardSlide";

const Project = () => {
  return (
    <div className={styles.project}>
      <div className={styles.project_content}>
        <h1 className={styles.title}>Project</h1>
        <CardSlide></CardSlide>
      </div>
    </div>
  );
};

export default Project;
