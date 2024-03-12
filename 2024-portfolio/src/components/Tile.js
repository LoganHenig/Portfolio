import React from "react";


export const Tile = ({number, hidden}) => {
  return (
    <div className={`grid-item ${hidden}-${Math.floor(Math.random() * 5) + 1}`}>
        {number}
    </div>
  );
}
