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
      showAdvSearchText: true,
      startDate: null,
      startDate2: null,
      startDate3: null
    };
    this.setActiveButton = this.setActiveButton.bind(this);
    this.displayTable = this.displayTable.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.toggleAdvSearchText = this.toggleAdvSearchText.bind(this);
  }
  componentDidUpdate(prevProps, prevState) {
    // document.getElementById("results").scrollIntoView({ behavior: "smooth" });
  }
  setActiveButton(btnText) {
    this.setState({ activeBtn: btnText});
  }
  displayTable(e) {
    e.preventDefault();
    this.setState({displayTable: true});
  }
  toggleAdvSearchText(e) {
    e.preventDefault();
    this.setState({ showAdvSearchText: !this.state.showAdvSearchText });
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
        <div className="card bg-light">
         
          <div className="card-body">
            <form style={{ position: "relative" }}>
            <button type="button" className="btn btn-secondary btn-sm float-right" data-toggle="collapse" data-target="#searchFields" aria-expanded="true" aria-controls="searchFields"><span className="fa fa-chevron-up"></span></button>
              <p className="h2">Search by cases</p>
              
              <div id="searchFields" className="collapse show"> 
              {this.state.showSearch}
                <SearchFields />
                <AdvancedSearchFields
                  startDate={this.state.startDate}
                  startDate2={this.state.startDate2}
                  startDate3={this.state.startDate3}
                  handleChange={this.handleChange}
                  handleChange2={this.handleChange2}
                  handleChange3={this.handleChange3}
                />
              
              <a
                id="advSearch"
                className="btn-advSearch btn btn-lg"
                data-toggle="collapse"
                href="#collapseAdvancedSearch"
                aria-expanded="false"
                aria-controls="collapseAdvancedSearch"
                data-original-title="Toggle advance search"
                onClick={this.toggleAdvSearchText}
              >
                <span className="badge badge-pill badge-dark">
                  {this.state.showAdvSearchText ? "Advanced Search" : "Basic Search"}
                </span>
              </a>
              <button
                type="submit"
                onClick={this.displayTable}
                data-toggle="collapse"
                data-target="#searchFields"
                className="btn btn-primary float-right"
              >
                Search&nbsp;
                <span className="fa fa-search" />
              </button>
              </div>
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
