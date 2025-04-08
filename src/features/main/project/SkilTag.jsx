const SkilTag = (props) => {
    return (
        <span
            style={{
                width: "fit-content",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "15px",
                backgroundColor: props.bg,
                padding: "10px 20px ",
                fontWeight: "bold",
                fontSize: "12px",
            }}
        >
            {props.skil}
        </span>
    );
};

export default SkilTag;
