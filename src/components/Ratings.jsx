import { useEffect, useState } from "react";
import { firestore } from "../firebase";

import { Link } from "react-router-dom";

export default function Ratings() {
  const [ranking, setRanking] = useState();

  useEffect(() => {
    const desuscribir = firestore.collection("votes").onSnapshot(snapshot => {
      const votes = snapshot.docs.map(doc => {
        return doc.data().yokaiVotes.map(vote => {
          return {
            id: vote.id,
            vote: vote.vote,
            name: vote.name,
          };
        });
      });
      let flatArray = [].concat.apply([], votes);
      console.log("flatArray :>> ", flatArray);
      let frequencyCounter = {};
      for (let val of flatArray) {
        // console.log("frequencyCounter[val.id] :>> ", frequencyCounter[val.id]);
        frequencyCounter[val.id] = {
          vote: (frequencyCounter[val.id]?.vote || 0) + val.vote,
          name: val.name,
        };
      }

      console.log("frequencyCounter :>> ", frequencyCounter);

      let sortable = [];
      for (var value in frequencyCounter) {
        sortable.push([value, frequencyCounter[value]]);
      }

      sortable.sort(function (a, b) {
        return b[1].vote - a[1].vote;
      });

      // console.log("sortable :>> ", sortable);
      setRanking(sortable);
    });

    return () => desuscribir();
  }, []);
  return (
    <div>
      <h1>Ratings</h1>
      <div>
        <Link to="/filters">Filters</Link>
      </div>
      <div>
        <Link to="/worship">Worship</Link>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div className="ratings">
        {ranking && ranking.length > 0 && (
          <>
            <div>
              <p>en primer lugar:</p>
              name: {ranking[0][1].name}
              puntos: {ranking[0][1].vote}
            </div>
            <div>
              <p>en primer lugar:</p>
              name: {ranking[1][1].name}
              puntos: {ranking[1][1].vote}
            </div>
            <div>
              <p>en primer lugar:</p>
              name: {ranking[2][1].name}
              puntos: {ranking[2][1].vote}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
