import styles from "./Project.module.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import SkilTag from "./SkilTag";

const CardSlide = () => {
  return (
    <div className={styles.card_slider}>
      {/* <button className={styles.slide_btn}>
        <FaArrowLeft />
      </button> */}
      <ProjectCard
        img={"nhis.jpg"}
        title={"국민건강보험 클론코딩"}
        period={"25.02.18~02.19"}
        participation={"개인100%"}
        detail={
          "이 웹사이트는 국민건강보험공단(NHIS) 공식 홈페이지의 디자인을 HTML과 CSS를 활용하여 클론 코딩한 프로젝트입니다. 웹페이지의 주요 레이아웃과 구조를 구현하였으며, 기본적인 디자인을 참고하여 단일 페이지 형태로 재구성했습니다. 이를 통해 HTML과 CSS의 활용 능력을 강화하고, 실용적인 웹페이지 디자인을 실습할 수 있었습니다."
        }
        skil1={<SkilTag skil={"HTML"} bg={"rgb(255, 192, 193)"} />}
        skil2={<SkilTag skil={"CSS"} bg={"rgb(192, 214, 255)"} />}
        // skil3={<SkilTag skil={"Javascript"} bg={"rgb(195, 255, 192)"} />}
        // skil4={<SkilTag skil={"React"} bg={"rgb(255, 240, 192)"} />}
        link={"https://paili2.github.io/NHIS-Clone/"}
      ></ProjectCard>
      <ProjectCard
        img={"socar.png"}
        title={"쏘카 클론코딩"}
        period={"25.03.14~03.16"}
        participation={"개인100%"}
        detail={
          "이 프로젝트는 쏘카 공식 홈페이지의 메인 페이지 디자인을 HTML, CSS, JavaScript를 활용하여 클론 코딩한 것입니다. 웹페이지의 주요 레이아웃과 구조를 구현하고, 기본적인 디자인을 참고하여 단일 페이지 형태로 재구성했습니다. 이를 통해 HTML과 CSS를 활용한 레이아웃 구성과 JavaScript를 통한 동적 요소 구현 능력을 강화할 수 있었습니다."
        }
        skil1={<SkilTag skil={"HTML"} bg={"rgb(255, 192, 193)"} />}
        skil2={<SkilTag skil={"CSS"} bg={"rgb(192, 214, 255)"} />}
        skil3={<SkilTag skil={"Javascript"} bg={"rgb(195, 255, 192)"} />}
        link={""}
      ></ProjectCard>
      <ProjectCard
        img={"ticketlink.png"}
        title={"티켓링크 클론코딩"}
        period={"25.03.22~03.23"}
        participation={"개인100%"}
        detail={
          "이 프로젝트는 티켓링크의 스포츠-축구 예매 페이지를 리액트로 구현한 것입니다. 경기 일정 데이터는 객체 형태로 저장하고, 해당 데이터를 props로 전달하여 map 메서드를 사용해 경기 정보를 화면에 출력했습니다. 리액트를 이용한 컴포넌트 기반 개발과 props 및 map을 활용한 반복 렌더링 방식을 실습할 수 있었습니다"
        }
        skil1={<SkilTag skil={"HTML"} bg={"rgb(255, 192, 193)"} />}
        skil2={<SkilTag skil={"CSS"} bg={"rgb(192, 214, 255)"} />}
        skil3={<SkilTag skil={"Javascript"} bg={"rgb(195, 255, 192)"} />}
        skil4={<SkilTag skil={"React"} bg={"rgb(255, 240, 192)"} />}
        link={""}
      ></ProjectCard>
      <ProjectCard
        img={"musinsa.jpeg"}
        title={"무신사 클론코딩"}
        period={"25.03.29~03.30"}
        participation={"개인100%"}
        detail={
          "이 프로젝트는 무신사 웹사이트의 기본적인 구조를 리액트를 사용하여 구현한 것입니다. 간단한 레이아웃과 UI 구성 요소들을 React로 컴포넌트화하고, CSS를 활용해 기본적인 스타일링을 적용했습니다. 컴포넌트 기반 개발 방식을 실습할 수 있었습니다."
        }
        skil1={<SkilTag skil={"HTML"} bg={"rgb(255, 192, 193)"} />}
        skil2={<SkilTag skil={"CSS"} bg={"rgb(192, 214, 255)"} />}
        skil3={<SkilTag skil={"Javascript"} bg={"rgb(195, 255, 192)"} />}
        skil4={<SkilTag skil={"React"} bg={"rgb(255, 240, 192)"} />}
        link={""}
      ></ProjectCard>
      {/* <button className={styles.slide_btn}>
          <FaArrowRight />
        </button> */}
    </div>
  );
};

export default CardSlide;
