function YokaiCard({ yokai }) {
  return (
    <div className="yokai-card torn_container torn_left torn_right">
      <div></div>
      <div className="kanji">{yokai.japaneseName}</div>
      <div className="romaji">({yokai.romajiName})</div>
      <img src={yokai.img} />
      <div>Tipo: {yokai.type}</div>
      <div>Apariencia: {yokai.appearence}</div>
      <div>Habitat: {yokai.habitat}</div>
      <div className="yokai-card-description-container">
        <p className="yokai-card-description">{yokai.description}</p>
      </div>
    </div>
  );
}

export default YokaiCard;
