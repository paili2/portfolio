const Title = (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        fontWeight: "bold",
        fontSize: "20px",
      }}
    >
      <span style={{ fontSize: "30px" }}>{props.icon}</span>
      <span>{props.title}</span>
      <span>{props.subTitle}</span>
      <span>{props.period}</span>
    </div>
  );
};

export default Title;
