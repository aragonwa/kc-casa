import React, { Component } from "react";

import SearchFields from "./SearchFields";
import AdvancedSearchFields from "./AdvancedSearchFields";
import ResultsTable from "./ResultsTable";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/scss/bootstrap.scss";

import "bootstrap";

// import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeBtn: "Case",
      displayTable: false,
      startDate: null,
      startDate2: null,
      startDate3: null
    };
    this.setActiveButton = this.setActiveButton.bind(this);
    this.displayTable = this.displayTable.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
  }
  componentDidUpdate(prevProps, prevState) {
    document.getElementById("results").scrollIntoView({ behavior: "smooth" });
  }
  setActiveButton(btnText) {
    this.setState({ activeBtn: btnText });
  }
  displayTable(e) {
    e.preventDefault();
    this.setState({ displayTable: true });
  }
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
  handleChange2(date) {
    this.setState({
      startDate2: date
    });
  }
  handleChange3(date) {
    this.setState({
      startDate4: date
    });
  }
  render() {
    return (
      <div className="App">
        <div
          className="btn-group btn-group-lg special"
          role="group"
          aria-label="Basic example"
        />
        <div className="card bg-light">
          <div className="card-header">
            <h1>CASA Information System</h1>
          </div>
          <div className="card-body">
            <form style={{ position: "relative" }}>
              <a
                className="btn-advSearch btn btn-lg"
                data-toggle="collapse"
                href="#collapseAdvancedSearch"
                aria-expanded="false"
                aria-controls="collapseAdvancedSearch"
                data-original-title="Toggle advance search"
              >
                <span className="badge badge-pill badge-dark">
                  Advanced &nbsp;
                  <span className="fa fa-cog" />
                </span>
              </a>
              <p className="h2">Search by cases</p>
              <SearchFields />
              <AdvancedSearchFields
                startDate={this.state.startDate}
                startDate2={this.state.startDate2}
                startDate3={this.state.startDate3}
                handleChange={this.handleChange}
                handleChange2={this.handleChange2}
                handleChange3={this.handleChange3}
              />
              <button
                type="submit"
                onClick={this.displayTable}
                className="btn btn-primary float-right"
              >
                Search&nbsp;
                <span className="fa fa-search" />
              </button>
            </form>
          </div>
        </div>
        <br />
        <br />
        <br />

        <ResultsTable displayTable={this.state.displayTable} />
      </div>
    );
  }
}

export default App;
