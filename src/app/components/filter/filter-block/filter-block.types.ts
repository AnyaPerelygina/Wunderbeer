export type Category = {
  label: string;
  options?: string[];
};

export type FilterBlockProps = {
  applyFilters: (tags: string[], minPrice: number, maxPrice: number) => void;
}
