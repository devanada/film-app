import React from "react";
import { Link } from "react-router-dom";

import Button from "./Button";
import { WithRouter } from "../utils/Navigation";

// const Card = (props) => {
const Card = ({ data, navigate }) => {
  return (
    <div className="p-3 flex flex-col justify-between bg-neutral-500 rounded shadow-lg shadow-black">
      <div onClick={() => navigate(`/detail/${data.id}`, { replace: true })}>
        <img
          src={
            data.poster_path
              ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
              : "https://via.placeholder.com/500x750?text=No+Image"
          }
          alt={data.title}
          height="750"
        />
        <p className="text-center text-white font-bold">{data.title}</p>
      </div>
      <Button
        label="Add to favorite"
        onClick={() => navigate(`/detail/${data.id}`)}
      />
    </div>
  );
};

// 1. export default
export default WithRouter(Card);
// 2. named export
// export { Card };
