import { TFilter, TMeta } from "@/types/global.types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import { Button } from "./button";

interface PaginationProps {
  meta: TMeta;
  onPageChange: React.Dispatch<React.SetStateAction<TFilter[]>>;
}

// TODO: Implement link redirect based Pagination
const Pagination: React.FC<PaginationProps> = ({ meta, onPageChange }) => {
  const { totalPage, page } = meta || {};
  const handlePrevious = () => {
    if (page > 1) {
      onPageChange([{ key: "page", value: (page - 1).toString() }]);
    }
  };

  const handleNext = () => {
    if (page < totalPage) {
      onPageChange([{ key: "page", value: (page + 1).toString() }]);
    }
  };

  const handlePageChange = (page: number) => {
    onPageChange([{ key: "page", value: page.toString() }]);
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPage; i++) {
      pages.push(
        <Button
          variant="outline"
          key={i}
          onClick={() => handlePageChange(i)}
          disabled={i === page}
          className={`page-number ${i === page ? "active" : ""}`}
        >
          {i}
        </Button>
      );
    }
    return pages;
  };

  return (
    <div className="flex items-center justify-end gap-4 mt-4">
      <Button variant="ghost" onClick={handlePrevious} disabled={page === 1}>
        <ChevronLeft /> Prev
      </Button>
      {renderPageNumbers()}
      <Button
        variant="ghost"
        onClick={handleNext}
        disabled={page === totalPage}
      >
        Next <ChevronRight />
      </Button>
    </div>
  );
};

export default Pagination;
