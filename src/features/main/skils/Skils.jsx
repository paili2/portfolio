import SkilCard from "./SkilCard";

const Skils = () => {
    return (
        <div style={{ width: "100%", backgroundColor: "beige" }}>
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
                        fontSize: "50px",
                        fontWeight: "bold",
                        borderBottom: "5px solid rgb(96, 181, 255)",
                        width: "fit-content",
                    }}
                >
                    Skils
                </h1>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: "100px 0px",
                    }}
                >
                    <SkilCard
                        skilName={"HTML"}
                        src={"html.png"}
                        explanation={
                            "HTML을 사용하여 웹 페이지의 구조를 설계하고, 다양한 태그를 이용해 콘텐츠를 구성합니다. 세밀하게 설계된 마크업으로 웹 페이지의 뼈대를 탄탄하게 구축할 수 있습니다."
                        }
                    ></SkilCard>
                    <SkilCard
                        justify={"end"}
                        skilName={"CSS"}
                        src={"css.png"}
                        explanation={
                            "CSS를 활용하여 웹 사이트의 디자인과 레이아웃을 아름답게 꾸밉니다. 다양한 스타일링 기법을 통해 독창적인 컴포넌트를 만들고, 사용자 경험을 더욱 향상시킬 수 있습니다."
                        }
                    ></SkilCard>
                    <SkilCard
                        skilName={"JAVASCRIPT"}
                        src={"javascript.png"}
                        explanation={
                            "JavaScript를 통해 웹 페이지에 동적인 기능을 추가하며, 클라이언트 측에서 효율적인 프로그래밍 로직을 구현합니다. DOM을 조작하여 인터랙티브한 요소들을 자유자재로 다룰 수 있습니다."
                        }
                    ></SkilCard>
                    <SkilCard
                        justify={"end"}
                        skilName={"REACT"}
                        src={"react.png"}
                        explanation={
                            "React를 이용해 UI를 컴포넌트화하고, 효율적인 상태 관리로 빠르고 유연한 SPA(Single Page Application)를 구현할 수 있습니다. 사용자 경험을 극대화하는 데 강력한 도구입니다."
                        }
                    ></SkilCard>
                    <SkilCard
                        skilName={"Java"}
                        src={"java.png"}
                        explanation={""}
                    ></SkilCard>
                    <SkilCard
                        justify={"end"}
                        skilName={"Spring Boot"}
                        src={"springboot.png"}
                        explanation={""}
                    ></SkilCard>

                    <SkilCard
                        skilName={"GIT"}
                        src={"git.png"}
                        explanation={
                            "Git을 활용한 버전 관리로 코드의 변경 사항을 체계적으로 관리하고, 효율적인 협업 환경을 구축할 수 있습니다. 프로젝트의 안정성을 높이고, 다양한 브랜치를 통해 실험적인 개발도 가능합니다."
                        }
                    ></SkilCard>
                    <SkilCard
                        justify={"end"}
                        skilName={"GITHUB"}
                        src={"github.png"}
                        explanation={
                            "GitHub는 코드 호스팅과 버전 관리뿐만 아니라, 팀 프로젝트와 오픈 소스 프로젝트에서의 협업을 지원합니다. 원활한 코드 공유와 협업을 통해 더 나은 결과물을 창출할 수 있습니다."
                        }
                    ></SkilCard>
                    <SkilCard
                        skilName={"NOTION"}
                        src={"notion.png"}
                        explanation={
                            "Notion은 효율적인 작업 관리와 노트 작성 도구로, 팀과 개인 작업을 한 곳에서 체계적으로 관리할 수 있습니다. 프로젝트의 흐름을 잘 파악하고, 다양한 자료를 쉽게 정리할 수 있습니다."
                        }
                    ></SkilCard>
                    <SkilCard
                        justify={"end"}
                        skilName={"PHOTOSHOP"}
                        src={"photoshop.png"}
                        explanation={
                            "Photoshop을 통해 전문적인 이미지 편집 및 그래픽 디자인 작업을 진행할 수 있습니다. 시각적인 콘텐츠를 완성도 있게 다듬어, 웹 디자인에서부터 마케팅 자료까지 다양한 작업을 지원합니다."
                        }
                    ></SkilCard>
                </div>
            </div>
        </div>
    );
};

export default Skils;
