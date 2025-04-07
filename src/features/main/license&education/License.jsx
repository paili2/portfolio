import { FaReact } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import Title from "./Title";

const License = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <h2
        style={{
          fontWeight: "bold",
          fontSize: "35px",
          backgroundColor: "rgb(96, 181, 255)",
          display: "inline",
          width: "fit-content",
        }}
      >
        License
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <Title
          icon={<GiArtificialIntelligence />}
          title={"AI(인공지능)활용 핀테크서비스 개발자 양성과정_육성"}
          subTitle={"860시간 수료"}
          period={"2024.09 ~ 2024. 02"}
        ></Title>
        <Title
          icon={<FaReact />}
          title={"React기반 프론트엔드 프로젝트"}
          subTitle={"198시간"}
          period={"2024.01 ~ 2025. 05"}
        ></Title>
      </div>
    </div>
  );
};

export default License;
