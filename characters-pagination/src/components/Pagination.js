import React from "react";

export const Pagination = ({ setCurrentPage, currentPage, apiData }) => {
  let pages = [];

  // vo pages imame list od brojkite od 1 do 42
  for (let i = 1; i <= apiData?.info?.pages; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        style={{ fontSize: "x-small" }}
      >
        Prev
      </button>
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page === currentPage ? "active" : ""}
          >
            {page}
          </button>
        );
      })}
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        style={{ fontSize: "x-small" }}
      >
        Next
      </button>
    </div>
  );
};
