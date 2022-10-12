function YokaiCard({ yokai }) {
  return (
    <div className="yokai-card torn_container torn_left torn_right">
      <div></div>
      <div className="kanji">{yokai.name}</div>
      <img src={yokai.img} />
      <div className="yokai-card-description-container">
        <p className="yokai-card-description">{yokai.description}</p>
      </div>
    </div>
  );
}

export default YokaiCard;
