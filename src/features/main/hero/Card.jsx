const Card = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "70px",
        borderRadius: "20px",
        border: "2px solid #60B5FF",
        padding: "40px 30px",
        width: "550px",
        height: "400px",
      }}
    >
      <h2
        style={{
          fontSize: "35px",
          fontWeight: "bold",
          backgroundColor: "#60B5FF",
          display: "inline",
          width: "fit-content",
        }}
      >
        {props.title}
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        <span>{props.text1}</span>

        <span>{props.text2}</span>

        <span>{props.text3}</span>

        <span>{props.text4}</span>
      </div>
    </div>
  );
};

export default Card;
