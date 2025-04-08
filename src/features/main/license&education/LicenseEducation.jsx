import InnerCard from "./InnerCard";

const LicenseEducation = () => {
    return (
        <div
            style={{
                width: "100%",
                backgroundColor: "beige",
                paddingBottom: "100px",
                padding: "100px 0",
            }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: "1200px",
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "100px",
                }}
            >
                <h1
                    style={{
                        fontSize: "50px",
                        fontWeight: "bold",
                        borderBottom: "5px solid rgb(96, 181, 255)",
                        width: "fit-content",
                    }}
                >
                    License & Education
                </h1>
                <InnerCard></InnerCard>
            </div>
        </div>
    );
};

export default LicenseEducation;
