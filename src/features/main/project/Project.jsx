import Overview from "./Overview";
import Thumbnail from "./Thumbnail";

const Project = () => {
  return (
    <div style={{ width: "100%", backgroundColor: "beige" }}>
      <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "50px", fontWeight: "bold" }}>Project</h1>
        <div>
          <Thumbnail></Thumbnail>
          <Overview link={"https://paili2.github.io/NHIS-Clone/"}></Overview>
        </div>
      </div>
    </div>
  );
};

export default Project;
