import { useState, useEffect } from "react";
import { firestore } from "../firebase";
import yokaiData from "../dataset/yokaiData";
import Links from "./Links";

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
        <img src={yokai.img} alt="yokai1" />
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
        <hr class="solid"></hr>
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
    <>
      <Links></Links>
      <div className="voting-booth yokai-worship-cards-container">
        {votingStep > 7 ? (
          <div class="thanks">
            <div>¡Gracias por votar!</div>
          </div>
        ) : (
          <>
            <p className="vote-question">¿A quién otorgas {votingStep} ⛩️?</p>
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
                      votingStep === 7
                        ? "Circle, submit my ratings"
                        : "Siguiente"
                    }`}
                  />
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </>
  );
}
