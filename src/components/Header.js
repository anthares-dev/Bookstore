import React from "react";

class Header extends React.Component {
  render() {
    console.log(this.props);
    const { selectedOption } = this.props;
    return (
      <section>
        <section>
          <div className="row justify-content-end">
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <label
                className={
                  selectedOption === "all"
                    ? "btn btn-light active"
                    : "btn btn-light hidden"
                }
              >
                <input
                  type="radio"
                  value="all"
                  name="options"
                  autoComplete="off"
                  checked={selectedOption === "all"}
                  onChange={this.props.handleOptionChange}
                />
                All languages
              </label>
              <label
                className={
                  selectedOption === "en"
                    ? "btn btn-light active"
                    : "btn btn-light"
                }
              >
                <input
                  type="radio"
                  value="en"
                  name="options"
                  autoComplete="off"
                  checked={selectedOption === "en"}
                  onChange={this.props.handleOptionChange}
                />
                English
              </label>
              <label
                className={
                  selectedOption === "es"
                    ? "btn btn-light active"
                    : "btn btn-light"
                }
              >
                <input
                  type="radio"
                  value="es"
                  name="options"
                  autoComplete="off"
                  checked={selectedOption === "es"}
                  onChange={this.props.handleOptionChange}
                />
                Español
              </label>
              <label
                className={
                  selectedOption === "ca"
                    ? "btn btn-light active"
                    : "btn btn-light"
                }
              >
                <input
                  type="radio"
                  value="ca"
                  name="options"
                  autoComplete="off"
                  checked={selectedOption === "ca"}
                  onChange={this.props.handleOptionChange}
                />
                Català
              </label>
            </div>
          </div>
        </section>
        <section>
          <header className="border-bottom border-dark">
            <nav className="navbar navbar-expand-lg navbar-light">
              <a className="navbar-brand mr-auto" href="index.html">
                <img
                  src={require("../../src/logoBookstore.JPG")}
                  className="img-fluid"
                  alt="Ubiqum Bookstore"
                />
              </a>

              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search for a book title"
                  aria-label="Search"
                  onChange={this.props.filterList}
                />
              </form>
            </nav>
          </header>
        </section>
      </section>
    );
  }
}

export default Header;
