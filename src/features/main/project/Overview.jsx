const Overview = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        width: "500px",
      }}
    >
      <h2 style={{ fontSize: "35px" }}>{props.title}</h2>
      <ul style={{ display: "flex", flexDirection: "column", gap: "35px" }}>
        <li>
          <span style={{ fontWeight: "bold" }}>제작기간</span>
          <span>{props.period}</span>
        </li>
        <li>
          <span style={{ fontWeight: "bold" }}>참여도</span>
          <span>{props.participation}</span>
        </li>
        <li>
          <span style={{ fontWeight: "bold" }}>내용</span>
          <span>{props.detail}</span>
        </li>
        <li>
          <span style={{ fontWeight: "bold" }}>기술스택</span>
          <span>{props.skils}</span>
        </li>
      </ul>
      <a
        style={{
          border: "none",
          borderRadius: "10px",
          padding: "15px 100px",
          width: "80%",
          fontWeight: "bold",
          textAlign: "center",
          backgroundColor: "rgb(96, 181, 255)",
          color: "white",
        }}
        href={props.link}
      >
        Link
      </a>
    </div>
  );
};

export default Overview;
