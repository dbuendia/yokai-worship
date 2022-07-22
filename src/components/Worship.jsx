import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { firestore } from "../firebase";
import yokai1 from "./img/oni.jpeg";
import yokai2 from "./img/oninokannebutsu.jpeg";
import yokaiData from "../dataset/yokaiData";

// const document = {
//   quien: "javier",
//   yokai: [
//     {
//       id: 3,
//       vote: 1,
//     },
//     {
//       id: 13,
//       vote: 3,
//     },
//     {
//       id: 4,
//       vote: 5,
//     },
//     {
//       id: 8,
//       vote: 7,
//     },
//   ],
// };

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
    // vote.yokai.push(selectedYokai);
    setVote((currentState) => {
      return {
        ...currentState,
        yokaiVotes: [...currentState.yokaiVotes, selectedYokai],
      };
    });

    // console.log("vote :>> ", vote);
    const newYokaiList = yokaiList.filter(
      (yokai) => yokai.id !== selectedYokai.id
    );
    setYokaiList(newYokaiList);
    // console.log("newVotingList :>> ", newVotingList);
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
      <div>
        <Link to="/ratings">Ratings</Link>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div className="voting-booth yokai-cards-container">
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
