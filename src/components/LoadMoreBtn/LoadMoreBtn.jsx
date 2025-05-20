import React from "react";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ padding: "10px 20px", margin: "10px auto", display: "block" }}
    >
      Load more
    </button>
  );
};

export default LoadMoreBtn;
