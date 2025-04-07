const Overview = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <ul>
        <li>
          <span>제작기간</span>
          <span>{props.period}</span>
        </li>
        <li>
          <span>참여도</span>
          <span>{props.participation}</span>
        </li>
        <li>
          <span>내용</span>
          <span>{props.detail}</span>
        </li>
        <li>
          <span>기술스택</span>
          <span>{props.skils}</span>
        </li>
      </ul>
      <a href={props.link}>Link</a>
    </div>
  );
};

export default Overview;
