import styles from "./Project.module.css";

const Overview = (props) => {
    return (
        <div className={styles.layout}>
            <h2 className={styles.project_name}>{props.title}</h2>
            <ul className={styles.inner}>
                <li className={styles.inner_text}>
                    <span className={styles.sub_title}>제작기간</span>
                    <span className={styles.sub_text}>{props.period}</span>
                </li>
                <li className={styles.inner_text}>
                    <span className={styles.sub_title}>참여도</span>
                    <span className={styles.sub_text}>
                        {props.participation}
                    </span>
                </li>
                <li className={styles.inner_text}>
                    <span className={styles.sub_title}>내용</span>
                    <span className={styles.sub_text}>{props.detail}</span>
                </li>
                <li className={styles.inner_text}>
                    <span className={styles.sub_title}>기술스택</span>
                    <div className={styles.skil_collection}>
                        <span className={styles.sub_text}>{props.skil1}</span>
                        <span className={styles.sub_text}>{props.skil2}</span>
                        <span className={styles.sub_text}>{props.skil3}</span>
                        <span className={styles.sub_text}>{props.skil4}</span>
                        <span className={styles.sub_text}>{props.skil5}</span>
                    </div>
                </li>
            </ul>

            <a className={styles.link} href={props.link}>
                Link
            </a>
        </div>
    );
};

export default Overview;
