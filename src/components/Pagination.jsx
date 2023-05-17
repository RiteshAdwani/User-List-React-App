import PropTypes from "prop-types";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Pagination = ({ setCurrentPage, currentPage }) => {
  const numberOfPages = 15;
  const pages = Array.from({ length: numberOfPages }, (_, index) => index + 1);

  return (
    <div className="d-flex justify-content-center">
      {currentPage > 1 && (
        <button
          className="prev-btn btn btn-warning fw-bolder p-1 rounded-circle mx-1"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <GrFormPrevious />
        </button>
      )}

      {pages
        .slice(
          Math.max(0, currentPage - 3),
          Math.min(numberOfPages, currentPage + 2)
        )
        .map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`btn fw-bolder p-1 rounded-circle page-number mx-1 ${
              page === currentPage
                ? "btn-warning text-white"
                : "bg-white text-warning"
            }`}
          >
            {page}
          </button>
        ))}

      {currentPage < numberOfPages && (
        <button
          className="next-btn btn btn-warning fw-bolder p-1 rounded-circle mx-1"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <GrFormNext />
        </button>
      )}
    </div>
  );
};

Pagination.propTypes = {
  setCurrentPage: PropTypes.func,
  currentPage: PropTypes.number,
  users: PropTypes.object,
};

export default Pagination;
