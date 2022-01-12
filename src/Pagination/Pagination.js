import React, { useState } from "react";
const Pagination = ({ card }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 10;
  const totalCards = card.length;
  const pageNumbers = [];
  console.log(totalCards, "totalCards");

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = card.slice(indexOfFirstCard, indexOfLastCard);
  const paginate = (pages) => setCurrentPage(pages);

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers[0], "pageNumber");

  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1);
    paginate(currentPage + 1);
  };
  const handlePrevBtn = () => {
    setCurrentPage(currentPage - 1);
    paginate(currentPage - 1);
  };

  const slicer = (currentPage, pageNos) => {
    let slice = [];
    let noOfPages = pageNos?.length;

    if (currentPage >= 5 && currentPage <= noOfPages) {
      slice.push("...");
    }
    if (currentPage >= 1 && currentPage <= 4) {
      for (let i = 1; i <= noOfPages && i <= 5; i++) {
        slice.push(i);
      }
      slice.push("...");
    } else if (currentPage >= 5 && currentPage <= noOfPages - 2) {
      for (
        let i = currentPage - 2;
        i <= noOfPages && i <= currentPage + 2;
        i++
      ) {
        slice.push(i);
      }
    } else if ((currentPage = noOfPages - 1)) {
      for (let i = currentPage - 3; i <= noOfPages; i++) {
        slice.push(i);
      }
    } else if (currentPage >= noOfPages) {
      for (let i = currentPage - 4; i <= noOfPages; i++) {
        slice.push(i);
      }
    }
    if (currentPage >= 5 && currentPage <= noOfPages - 3) {
      slice.push("...");
    }
    console.log(slice, currentPage, pageNos, noOfPages);
    return slice;
  };
  console.log(currentPage, "currentPAge");
  return (
    <>
      <div className="row">
        {currentCards.map((cards) => {
          return (
            <div className="card col-4 m-3" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">{cards.userId}</h5>
                <hr className="m-0 p-0" />
                <h6 className="card-subtitle my-2 text-muted">{cards.title}</h6>
                <p className="card-text">{cards.body}</p>
              </div>
            </div>
          );
        })}
      </div>
      <nav className="d-flex justify-content-center">
        <ul className="pagination">
          <button
            className="btn btn-primary btn-sm"
            onClick={() => setCurrentPage(1)}
          >
            <a className="link-light">First</a>
          </button>
          <button
            className="btn btn-primary btn-sm mx-1"
            onClick={() => handlePrevBtn()}
            disabled={currentPage === 1 ? true : false}
          >
            <a className="link-light">Prev</a>
          </button>
          {slicer(currentPage, pageNumbers).map((number) => {
            return (
              <>
                <li
                  style={{ cursor: "pointer" }}
                  key={number}
                  className={`page-item ${currentPage === number && "active"} ${
                    number === "..." && "disabled"
                  }`}
                >
                  <button
                    onClick={() => paginate(number)}
                    className="page-link"
                    disabled={number === "..." ? true : false}
                  >
                    {number}
                    {console.log(number)}
                  </button>
                </li>
              </>
            );
          })}

          <button
            className="btn btn-primary btn-sm mx-1"
            onClick={() => handleNextBtn()}
            disabled={currentPage === pageNumbers.length ? true : false}
          >
            <a className="link-light">Next</a>
          </button>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => setCurrentPage(pageNumbers.length)}
          >
            <a className="link-light">Last</a>
          </button>
        </ul>
      </nav>
    </>
  );
};
export default Pagination;
