import License from "./License";
import Education from "./Education";

const InnerCard = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "70px",
        borderRadius: "20px",
        border: "3px solid rgb(0, 173, 180)",
        padding: "40px 30px",
      }}
    >
      <License></License>
      <Education></Education>
    </div>
  );
};

export default InnerCard;
