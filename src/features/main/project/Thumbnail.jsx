const Thumbnail = (props) => {
    return (
        <div style={{ width: "300px", height: "400px", borderRadius: "10px" }}>
            <img
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                }}
                src={props.img}
                alt=""
            />
        </div>
    );
};

export default Thumbnail;
