import Title from "./Title";
import { FaRegFilePowerpoint } from "react-icons/fa";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { BiCertification } from "react-icons/bi";
import { GrAnalytics } from "react-icons/gr";
import { MdScreenSearchDesktop } from "react-icons/md";
import { SlSocialInstagram } from "react-icons/sl";
import { DiPhotoshop } from "react-icons/di";

const Education = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <h2
        style={{
          fontWeight: "bold",
          fontSize: "35px",
          backgroundColor: "rgb(0, 173, 180)",
          display: "inline",
          width: "fit-content",
        }}
      >
        Education
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <Title
          icon={<AiOutlineConsoleSql />}
          title={"SQL개발자(SQLD자격)"}
          subTitle={"한국데이터베이스진흥센터"}
          period={"2024.09"}
        ></Title>
        <Title
          icon={<BiCertification />}
          title={"정보처리기사(필기합격)"}
          subTitle={"한국산업인력공단"}
          period={"2024.08"}
        ></Title>
        <Title
          icon={<GrAnalytics />}
          title={"데이터분석준전문가(ADsP)"}
          subTitle={"한국데이터베이스진흥원"}
          period={"2024.06"}
        ></Title>
        <Title
          icon={<MdScreenSearchDesktop />}
          title={"검색광고마케터 1급"}
          subTitle={"한국정보통신진흥협회"}
          period={"2024.04"}
        ></Title>
        <Title
          icon={<SlSocialInstagram />}
          title={"SNS광고마케터 1급"}
          subTitle={"한국정보통신진흥협회"}
          period={"2024.03"}
        ></Title>
        <Title
          icon={<DiPhotoshop />}
          title={"그래픽기술자격(GTQ) 1급"}
          subTitle={"한국생산성본부(KPC)"}
          period={"2020.10"}
        ></Title>
        <Title
          icon={<FaRegFilePowerpoint />}
          title={"MOS PowerPoint "}
          subTitle={"Microsoft"}
          period={"2019.11"}
        ></Title>
      </div>
    </div>
  );
};

export default Education;
