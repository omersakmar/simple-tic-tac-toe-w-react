import React from "react";

const style = {
  background: "#F1F1F1",
  border: "2px solid #100F0F",
  color: "#100F0F",
  fontSize: "40px",
  fontWeight: "800",
  cursor: "pointer",
  outline: "none",
};
const Square = ({ value, onClick }) => (
  <button style={style} onClick={onClick}>
    {value}
  </button>
);

export default Square;
