import Hero from "./hero/Hero";
import LicenseEducation from "./license&education/LicenseEducation";
import Project from "./project/Project";
import Skils from "./skils/Skils";

const Main = () => {
  return (
    <div style={{ padding: "100px 0" }}>
      <Hero></Hero>
      <Skils></Skils>
      <LicenseEducation></LicenseEducation>
      <Project></Project>
    </div>
  );
};

export default Main;
