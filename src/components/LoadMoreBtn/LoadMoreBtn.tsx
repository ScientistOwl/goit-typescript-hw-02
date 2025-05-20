import React from "react";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
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
