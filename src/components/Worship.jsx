import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { firestore } from "../firebase";
import yokaiData from "../dataset/yokaiData";

export default function Worship() {
  const [votingStep, setVotingStep] = useState(1);
  const [vote, setVote] = useState({ yokaiVotes: [] });
  const [selectedYokai, setSelectedYokai] = useState();
  const [yokaiList, setYokaiList] = useState(yokaiData);

  const handleInputChange = (e) => {
    setSelectedYokai({
      id: e.target.value,
      vote: votingStep,
      name: e.target.getAttribute("data-name"),
    });
  };

  const printYokai = (yokai) => {
    return (
      <label key={yokai.id} className="label-yokai">
        <img width="80%" src={yokai.img} alt="yokai1" />
        <div>
          <input
            onChange={handleInputChange}
            type="radio"
            name="yokai"
            value={yokai.id}
            data-name={yokai.romajiName}
          />
          {yokai.romajiName}
        </div>
      </label>
    );
  };

  const nextVote = (e) => {
    e.preventDefault();
    setVote((currentState) => {
      return {
        ...currentState,
        yokaiVotes: [...currentState.yokaiVotes, selectedYokai],
      };
    });

    const newYokaiList = yokaiList.filter(
      (yokai) => yokai.id !== selectedYokai.id
    );
    setYokaiList(newYokaiList);
    setVotingStep((currentState) => currentState + 2);
    setSelectedYokai(null);
  };

  useEffect(() => {
    if (vote.yokaiVotes.length === 4) {
      firestore.collection("votes").add(vote);
    }
  }, [vote]);

  return (
    <div>
      <h1>Worship</h1>
      <div>
        <Link to="/filters">Filters</Link>
      </div>
      <div className="voting-booth yokai-worship-cards-container">
        {votingStep > 7 ? (
          <div>gracias por votar!</div>
        ) : (
          <>
            <p className="vote-question">
              ¿A quien le darías {votingStep} punt
              {`${votingStep > 1 ? "os?" : "o?"}`}
            </p>
            <div className="vote">
              <form onSubmit={nextVote}>
                <fieldset className=" no-wrap">
                  {yokaiList.map((yokai) => printYokai(yokai))}
                </fieldset>
                <div className="rating-btn">
                  <input
                    disabled={!selectedYokai}
                    type="submit"
                    value={`${
                      votingStep === 7 ? "submit my ratings" : "Next vote"
                    }`}
                  />
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
