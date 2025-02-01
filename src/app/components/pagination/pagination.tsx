'use client'

import Icon from '@/ui/icon/icon';
import Wheat from '@/assets/wheat-green.svg';
import styles from './pagination.module.scss';
import { PaginationProps } from './pagination.types';

export default function Pagination({
  currentPage,
  totalCardsCount,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(totalCardsCount / 12);

  const handleClick = (pageNumber: number) => {
    onPageChange(pageNumber);
    window.scrollTo(0, 0);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
      window.scrollTo(0, 0);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className={styles.root}>
      <button
        className={`${styles.buttonPrev} ${currentPage === 1 ? 'disabled' : ''}`}
        type="button"
        onClick={goToPreviousPage}
        disabled={currentPage === 1}
        name="Назад"
      >
        <Icon Icon={Wheat} width={47} height={18} />
      </button>
      <ul className={styles.pageNumbers}>
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber} className={styles.pageNumber}>
            <button
              className={`${styles.pageButton} ${pageNumber === currentPage ? styles.active : ''}`}
              onClick={() => handleClick(pageNumber)}
              type={'button'}>
              {pageNumber}
            </button>
          </li>
        ))}
      </ul>
      <button
        className={`${styles.buttonNext} ${currentPage === totalPages ? 'disabled' : ''}`}
        type="button"
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
        name="Вперед"
      >
        <Icon Icon={Wheat} width={47} height={18} />
      </button>
    </div>
  );
}
