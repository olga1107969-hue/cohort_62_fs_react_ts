import { useState } from "react";
import Feedback from "components/Feedback/Feedback";

function Homework_07() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const onLike = () => setLike(like + 1);
  const onDislike = () => setDislike(dislike + 1);
  const resetResults = () => {
    setLike(0);
    setDislike(0);
  };

  return (
    <div>
      <h2>Homework 07</h2>
      <Feedback
        like={like}
        dislike={dislike}
        onLike={onLike}
        onDislike={onDislike}
        resetResults={resetResults}
      />
    </div>
  );
}

export default Homework_07;
