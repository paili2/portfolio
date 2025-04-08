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
                width: "570px",
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
                    fontSize: "17px",
                    fontWeight: "bold",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                    }}
                >
                    <span style={{ fontSize: "25px" }}>{props.icon1}</span>
                    <span>{props.text1}</span>
                </div>
                <div
                    style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                    }}
                >
                    <span style={{ fontSize: "25px" }}>{props.icon2}</span>
                    <span>{props.text2}</span>
                </div>
                <div
                    style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                    }}
                >
                    <span style={{ fontSize: "25px" }}>{props.icon3}</span>
                    <span>{props.text3}</span>
                </div>
                <div
                    style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                    }}
                >
                    <span style={{ fontSize: "25px" }}>{props.icon4}</span>
                    <span>{props.text4}</span>
                </div>
            </div>
        </div>
    );
};

export default Card;
