import React from "react";
import Header from "./components/Header";
import Books from "./components/Books";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      selectedOption: "all",
      search: ""
    };
  }
  componentDidMount() {
    console.log("componentDidMount");

    fetch("https://api.myjson.com/bins/zyv02")
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data.books);

        this.setState({
          books: data.books
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleOptionChange = event => {
    this.setState({
      selectedOption: event.target.value
    });
  };

  filterList = event => {
    this.setState({
      search: event.target.value.toLowerCase()
    });
  };

  render() {
    return (
      <div className="container">
        <Header
          selectedOption={this.state.selectedOption}
          handleOptionChange={this.handleOptionChange}
          filterList={this.filterList}
        />{" "}
        <main className="container py-3">
          <div className="row p-3 my-3" id="top">
            <Books
              books={this.state.books}
              selectedOption={this.state.selectedOption}
              search={this.state.search}
            />
          </div>
          <a
            id="back-to-top"
            href="#"
            className="btn btn-light btn-lg back-to-top"
            role="button"
          >
            <i className="fas fa-chevron-up"></i>
          </a>
        </main>
        <footer className="page-footer border-top border-dark">
          <div className="footer-copyright text-center py-3">
            © UBIQUM ACADAMY BOOKSTORE 2019 - made by Fulvio Vigilante |
            <a href="#"> All Rights Reserved</a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
