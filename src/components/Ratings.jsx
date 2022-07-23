import { useEffect, useState } from "react";
import { firestore } from "../firebase";

import { Link } from "react-router-dom";

import yokaiData from "../dataset/yokaiData";
import Links from "./Links";

export default function Ratings() {
  const [ranking, setRanking] = useState();

  useEffect(() => {
    const desuscribir = firestore.collection("votes").onSnapshot((snapshot) => {
      const votes = snapshot.docs.map((doc) => {
        return doc.data().yokaiVotes.map((vote) => {
          return {
            id: vote.id,
            vote: vote.vote,
            name: vote.name,
          };
        });
      });
      let flatArray = [].concat.apply([], votes);
      let frequencyCounter = {};
      for (let val of flatArray) {
        // console.log("frequencyCounter[val.id] :>> ", frequencyCounter[val.id]);
        frequencyCounter[val.id] = {
          vote: (frequencyCounter[val.id]?.vote || 0) + val.vote,
          name: val.name,
        };
      }

      let sortable = [];
      for (var value in frequencyCounter) {
        sortable.push([value, frequencyCounter[value]]);
      }

      sortable.sort(function (a, b) {
        return b[1].vote - a[1].vote;
      });

      const sortableWithImage = sortable.map((sortedYokai) => {
        const imgIndex = yokaiData.findIndex(
          (yokai) => yokai.id === sortedYokai[0]
        );
        return {
          ...sortedYokai,
          img: yokaiData[imgIndex].img,
        };
      });
      console.log("sortableWithImage :>> ", sortableWithImage);
      setRanking(sortableWithImage);
    });

    return () => desuscribir();
  }, []);
  return (
    <div>
      <Links></Links>
      {/* <div>
        <Link to="/">
          <h1>Ratings</h1>
        </Link>
      </div> */}
      <div className="ratings">
        {ranking && ranking.length > 0 && (
          <div className="yokai-cards-container">
            <div></div>
            {ranking.map((yokai, index) => {
              return (
                <div className={`yokai-cards-rating place-${index}`}>
                  <h1>Puesto {index + 1}</h1>
                  <div className="yokai-name">{yokai["1"].name}</div>{" "}
                  <div className="yokai-voting">
                    {yokai["1"].vote} <span className="torii">⛩️</span>
                  </div>{" "}
                  <img src={yokai.img} alt="yokai" />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
