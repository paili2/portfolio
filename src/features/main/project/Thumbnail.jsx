const Thumbnail = (props) => {
  return (
    <div style={{ width: "500px", height: "300px" }}>
      <img
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        src={props.src}
        alt=""
      />
    </div>
  );
};

export default Thumbnail;
