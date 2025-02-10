// 'use client';

// import Icon from '@/ui/icon/icon';
// import Wheat from '@/assets/wheat-green.svg';
// import styles from './pagination.module.scss';
// import { PaginationProps } from './pagination.types';

// export default function Pagination({
//   currentPage,
//   totalCardsCount,
//   onPageChange,
// }: PaginationProps) {
//   const totalPages = Math.ceil(totalCardsCount / 12);

//   const handleClick = (pageNumber: number) => {
//     onPageChange(pageNumber);
//     window.scrollTo(0, 0);
//   };

//   const goToPreviousPage = () => {
//     if (currentPage > 1) {
//       onPageChange(currentPage - 1);
//       window.scrollTo(0, 0);
//     }
//   };

//   const goToNextPage = () => {
//     if (currentPage < totalPages) {
//       onPageChange(currentPage + 1);
//       window.scrollTo(0, 0);
//     }
//   };

//   const getPageNumbers = () => {
//     if (totalPages <= 4) {
//       return Array.from({ length: totalPages }, (_, index) => index + 1);
//     }

//     if (currentPage <= 3) {
//       return [1, 2, 3, '...', totalPages];
//     }

//     if (currentPage >= totalPages - 2) {
//       return [1, '...', totalPages - 2, totalPages - 1, totalPages];
//     }

//     return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
//   };

//   const pageNumbers = getPageNumbers();

//   return (
//     <div className={styles.root}>
//       <button
//         className={`${styles.buttonPrev} ${currentPage === 1 ? 'disabled' : ''}`}
//         type="button"
//         onClick={goToPreviousPage}
//         disabled={currentPage === 1}
//         name="Назад"
//       >
//         <Icon Icon={Wheat} width={47} height={18} />
//       </button>
//       <ul className={styles.pageNumbers}>
//         {pageNumbers.map((pageNumber, index) => (
//           <li key={index} className={styles.pageNumber}>
//             {pageNumber === '...' ? (
//               <span className={styles.dots}>...</span>
//             ) : (
//               <button
//                 className={`${styles.pageButton} ${pageNumber === currentPage ? styles.active : ''}`}
//                 onClick={() => handleClick(pageNumber as number)}
//                 type={'button'}>
//                 {pageNumber}
//               </button>
//             )}
//           </li>
//         ))}
//       </ul>
//       <button
//         className={`${styles.buttonNext} ${currentPage === totalPages ? 'disabled' : ''}`}
//         type="button"
//         onClick={goToNextPage}
//         disabled={currentPage === totalPages}
//         name="Вперед"
//       >
//         <Icon Icon={Wheat} width={47} height={18} />
//       </button>
//     </div>
//   );
// }

'use client';

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

  const getPageNumbers = () => {
    if (totalPages <= 4) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    if (currentPage <= 3) {
      return [1, 2, 3, '...', totalPages];
    }

    if (currentPage >= totalPages - 2) {
      return [1, '...', totalPages - 2, totalPages - 1, totalPages];
    }

    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
  };

  const pageNumbers = getPageNumbers();

  // Determine if the page buttons should be disabled
  const isPageNumberOne = pageNumbers.length === 1;
  const isPageNumberZero = pageNumbers.length === 0;

  return (
    <div
      className={styles.root}
      style={{ width: isPageNumberZero ? 'fit-content' : undefined }}
    >
      <button
        className={`${styles.buttonPrev} ${currentPage === 1 || isPageNumberOne ? 'disabled' : ''}`}
        type="button"
        onClick={goToPreviousPage}
        disabled={currentPage === 1 || isPageNumberOne}
        name="Назад"
      >
        <Icon Icon={Wheat} width={47} height={18} />
      </button>
      <ul className={styles.pageNumbers}>
        {pageNumbers.map((pageNumber, index) => (
          <li key={index} className={styles.pageNumber}>
            {pageNumber === '...' ? (
              <span className={styles.dots}>...</span>
            ) : (
              <button
                className={`${styles.pageButton} ${pageNumber === currentPage ? styles.active : ''}`}
                onClick={() => handleClick(pageNumber as number)}
                type={'button'}>
                {pageNumber}
              </button>
            )}
          </li>
        ))}
      </ul>
      <button
        className={`${styles.buttonNext} ${currentPage === totalPages || isPageNumberOne ? 'disabled' : ''}`}
        type="button"
        onClick={goToNextPage}
        disabled={currentPage === totalPages || isPageNumberOne}
        name="Вперед"
      >
        <Icon Icon={Wheat} width={47} height={18} />
      </button>
    </div>
  );
}
