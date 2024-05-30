import { PaginationButton, PaginationContainer } from "./Pagination.styles";

interface PaginationProps {
  currentPage: number;
  totalPages: number | undefined;
  decrementPage: () => void;
  incrementPage: () => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  decrementPage,
  incrementPage,
}: PaginationProps) => {
  return (
    <PaginationContainer>
      <PaginationButton onClick={decrementPage} disabled={currentPage === 1}>
        Previous
      </PaginationButton>
      <PaginationButton
        onClick={incrementPage}
        disabled={currentPage === totalPages}
      >
        Next
      </PaginationButton>
    </PaginationContainer>
  );
};

export default Pagination;
