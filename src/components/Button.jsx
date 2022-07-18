import React from "react";

// const Button = (props) => {
const Button = ({ onClick, type, label }) => {
  return (
    <button
      className="text-white text-lg bg-zinc-800 dark:bg-neutral-500 rounded-md p-2"
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
};

export default Button;
