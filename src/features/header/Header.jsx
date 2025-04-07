import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header_contents">
        <strong className="name">JEONG SEORYEONG</strong>
        <div className="header_menu">
          <span>Home</span>
          <span>Skills</span>
          <span>License&Education</span>
          <span>Project</span>
          {/* <span>Notion</span>
          <span>Github</span> */}
          {/* <span>이력서</span> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
