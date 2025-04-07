import Overview from "./Overview";
import Thumbnail from "./Thumbnail";

const Project = () => {
  return (
    <div
      style={{ width: "100%", backgroundColor: "beige", padding: "100px 0" }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "50px",
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
          Project
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "100px",
          }}
        >
          <Thumbnail src={"nhis.jpg"}></Thumbnail>
          <Overview
            title={"국민건강보험 클론코딩"}
            link={"https://paili2.github.io/NHIS-Clone/"}
          ></Overview>
        </div>
      </div>
    </div>
  );
};

export default Project;
