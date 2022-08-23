import React from "react";

const Message = ({ winner, startsWithX }) => {
  if (winner && winner != "draw") {
    return "Winner: " + winner;
  } else if (winner && winner === "draw") {
    return "It's a " + winner;
  } else {
    return "Next player " + (startsWithX ? "X" : "O");
  }
};

export default Message;
