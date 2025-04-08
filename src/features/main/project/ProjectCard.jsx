import Overview from "./Overview";
import Thumbnail from "./Thumbnail";
import styles from "./Project.module.css";

const ProjectCard = (props) => {
    return (
        <article className={styles.card}>
            <Thumbnail img={props.img}></Thumbnail>
            <Overview
                title={props.title}
                period={props.period}
                participation={props.participation}
                detail={props.detail}
                skil1={props.skil1}
                skil2={props.skil2}
                skil3={props.skil3}
                skil4={props.skil4}
                skil5={props.skil5}
                link={props.link}
            ></Overview>
        </article>
    );
};

export default ProjectCard;
