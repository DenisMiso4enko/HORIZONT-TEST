import React from "react";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import "./index.scss";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getPageNumbers = (): Array<number | string> => {
    const pageNumbers: Array<number | string> = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 5; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <button
        className={`btn pagination__item ${
          currentPage === 1 ? "pagination__item--disabled" : ""
        }`}
        onClick={handlePrevClick}
        disabled={currentPage === 1}
      >
        <IoMdArrowRoundBack />
      </button>

      {getPageNumbers().map((pageNumber, index) => (
        <button
          key={index}
          className={`btn pagination__item ${
            currentPage === pageNumber ? "pagination__item--active" : ""
          }`}
          onClick={() =>
            typeof pageNumber === "number" && onPageChange(pageNumber)
          }
        >
          {pageNumber}
        </button>
      ))}

      <button
        className={`btn pagination__item ${
          currentPage === totalPages ? "pagination__item--disabled" : ""
        }`}
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
      >
        <IoMdArrowRoundForward />
      </button>
    </div>
  );
};

export default Pagination;
