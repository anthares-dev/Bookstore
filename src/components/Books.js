import React from "react";

class Books extends React.Component {
  render() {
    var { books, search, selectedOption } = this.props;

    books = books
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
                  href={book.detail}
                  data-fancybox="gallery"
                  data-caption={`Caption #${i}`}
                >
                  {" "}
                  More Info
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Books;
