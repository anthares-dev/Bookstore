import React from "react";

const Books = ({ books, search, selectedOption }) => {
  var books = books
    .filter(book => {
      return book.title.toLowerCase().search(search) !== -1;
    })
    .filter(book => {
      return book.language === selectedOption || selectedOption === "all";
    });

  return (
    <div className="row justify-content-between">
      {books.map((book, i) => (
        <div className="flip-card border mb-3" key={i}>
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={book.cover} alt="" />
            </div>

            <div className="flip-card-back">
              <h4>{book.title}</h4>

              <p>{book.description}</p>
              <a
                className="btn btn-primary"
                role="button"
                data-fancybox="gallery"
                data-caption={`Caption #${i}`}
                href={book.detail}
              >
                More Info
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Books;
