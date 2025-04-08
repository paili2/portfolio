import styles from "./Project.module.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import SkilTag from "./SkilTag";

const Project = () => {
    return (
        <div className={styles.project}>
            <div className={styles.project_content}>
                <h1 className={styles.title}>Project</h1>
                <div className={styles.card_slider}>
                    <button className={styles.slide_btn}>
                        <FaArrowLeft />
                    </button>
                    <ProjectCard
                        img={"nhis.jpg"}
                        title={"국민건강보험 클론코딩"}
                        period={"25.02.18~02.19"}
                        participation={"개인100%"}
                        detail={
                            "이 웹사이트는 국민건강보험공단(NHIS) 공식 홈페이지의 디자인을 HTML과 CSS를 활용하여 클론 코딩한 프로젝트입니다. 웹페이지의 주요 레이아웃과 구조를 구현하였으며, 기본적인 디자인을 참고하여 단일 페이지 형태로 재구성했습니다. 이를 통해 HTML과 CSS의 활용 능력을 강화하고, 실용적인 웹페이지 디자인을 실습할 수 있었습니다."
                        }
                        skil1={
                            <SkilTag skil={"HTML"} bg={"rgb(255, 192, 193)"} />
                        }
                        skil2={
                            <SkilTag skil={"CSS"} bg={"rgb(192, 214, 255)"} />
                        }
                        skil3={
                            <SkilTag
                                skil={"Javascript"}
                                bg={"rgb(195, 255, 192)"}
                            />
                        }
                        skil4={
                            <SkilTag skil={"React"} bg={"rgb(255, 240, 192)"} />
                        }
                        link={"https://paili2.github.io/NHIS-Clone/"}
                    ></ProjectCard>
                    <button className={styles.slide_btn}>
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Project;
