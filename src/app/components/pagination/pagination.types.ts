export type PaginationProps = {
  currentPage: number;
  totalCardsCount: number;
  onPageChange: (page: number) => void;
}
