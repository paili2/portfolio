import { GiArtificialIntelligence } from "react-icons/gi";
import Card from "./Card";
import { FaReact } from "react-icons/fa";
import { BiCertification } from "react-icons/bi";
import { GiGraduateCap } from "react-icons/gi";

const Hero = () => {
    return (
        <div style={{ backgroundColor: "beige" }}>
            <div
                style={{
                    width: "100%",
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "100px 0",
                    display: "flex",
                    flexDirection: "column",
                    gap: "100px",
                }}
            >
                <h1
                    style={{
                        fontWeight: "bold",
                        fontSize: "50px",
                        borderBottom: "5px solid rgb(96, 181, 255)",
                        width: "fit-content",
                    }}
                >
                    Profile
                </h1>
                <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <Card
                        title={"About Me"}
                        text1={"Name: 정서령"}
                        text2={"Birth: 1996. 01. 06"}
                        text3={"Phone: 010. 2300. 0091"}
                        text4={"Email: zxcv7502@naver.com"}
                    ></Card>
                    <Card
                        title={"About Ny Education"}
                        icon1={<GiArtificialIntelligence />}
                        text1={
                            "AI(인공지능)활용 핀테크서비스 개발자 양성과정 수료"
                        }
                        icon2={<FaReact />}
                        text2={"React기반 프론트엔드 프로젝트 수료"}
                        icon3={<BiCertification />}
                        text3={"정보처리기사 필기 합격"}
                        icon4={<GiGraduateCap />}
                        text4={"을지대학교 스포츠아웃도어학과 졸업"}
                    ></Card>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "50px",
                        justifyContent: "center",
                    }}
                >
                    <h2
                        style={{
                            fontSize: "35px",
                            fontWeight: "bold",
                            textAlign: "center ",
                            color: "rgb(96, 181, 255)",
                            textShadow: "3px 3px 1px rgb(0, 136, 255)",
                        }}
                    >
                        "백엔드 개발자로서, 문제 해결과 성취감을 중요하게
                        생각합니다!"
                    </h2>
                    <p
                        style={{
                            fontSize: "20px",
                            fontWeight: "bold",
                            lineHeight: "1.5",
                            textAlign: "center",
                        }}
                    >
                        데이터 분석과 마케팅 자격증을 보유한 백엔드 개발자
                        지망생입니다. 다양한 경험을 통해 팀워크와 협업의
                        중요성을 배우며, 최신 기술을 활용해 효율적이고 확장
                        가능한 시스템을 개발하는 데 집중하고 있습니다. 쌓은
                        이론적 지식과 기술적 호기심을 바탕으로, 백엔드
                        개발자로서 지속적으로 성장하며 안정적인 시스템 구축에
                        기여하고자 합니다. 기술적 성장을 이루며, 안정적인 서비스
                        제공을 위해 끊임없이 노력하겠습니다.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
