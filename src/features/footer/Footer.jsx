import { ImGithub } from "react-icons/im";
import { SiNotion } from "react-icons/si";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
    return (
        <div
            style={{
                backgroundColor: "beige",
                padding: "100px 0",
                color: "rgb(96, 181, 255)",
            }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: "1200px",
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "30px",
                }}
            >
                <h1 style={{ fontSize: "50px" }}>Contact</h1>

                <div
                    style={{
                        display: "flex",
                        gap: "30px",
                        justifyContent: "flex-start",
                    }}
                >
                    <a href="https://github.com/paili2">
                        <ImGithub style={{ fontSize: "40px" }} />
                    </a>
                    <a href="https://www.notion.so/1-1a88c6e91be080d08cbcff54be7a8e2d">
                        <SiNotion style={{ fontSize: "40px" }} />
                    </a>
                </div>
                <div style={{ display: "flex", gap: "30px" }}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "7px",
                        }}
                    >
                        <IoCall />
                        <span>010-2300-0091</span>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "7px",
                        }}
                    >
                        <IoMdMail />
                        <span>zxcv7502@naver.com</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
