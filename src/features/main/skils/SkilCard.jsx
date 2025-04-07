import "./skilcard.css";

const SkilCard = (props) => {
  return (
    <div style={{ justifySelf: props.justify }} className="skil-card">
      <strong className="skil-name">{props.skilName}</strong>
      <div className="album-explanation">
        <div className="skil-album">
          <img src={props.src} alt="" />
        </div>
        <span className="skil-explanation">{props.explanation}</span>
      </div>
    </div>
  );
};

export default SkilCard;
