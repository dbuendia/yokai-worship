import YokaiCard from "./yokaiCard";
import yokaiData from "../dataset/yokaiData";

function YokaiCardsContainer() {
  return (
    <div className="yokai-cards-container">
      {yokaiData.map((elem) => (
        <YokaiCard yokai={elem} />
      ))}
    </div>
  );
}

export default YokaiCardsContainer;
