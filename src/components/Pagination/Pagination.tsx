import React from "react";
import { PaginationContainer, PageButton, PageInfo } from "./Pagination.styles";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  return (
    <PaginationContainer>
      <PageButton onClick={() => onPageChange(1)} disabled={currentPage === 1}>
        {"<<"}
      </PageButton>
      <PageButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {"<"}
      </PageButton>
      <PageInfo>
        Page {currentPage} of {totalPages}
      </PageInfo>
      <PageButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {">"}
      </PageButton>
      <PageButton
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        {">>"}
      </PageButton>
    </PaginationContainer>
  );
};
