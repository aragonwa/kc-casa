import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import ResultsTable from "./components/Results";
import Features from "./components/Features";

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
      startDate3: null,
      collapseSearch: true,
      searchNavText: "",
      searchingText: ""
    };
    this.setActiveButton = this.setActiveButton.bind(this);
    this.toggleDisplayTable = this.toggleDisplayTable.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.toggleAdvSearchText = this.toggleAdvSearchText.bind(this);
    this.collapseBtn = this.collapseBtn.bind(this);
    this.searchNav = this.searchNav.bind(this);
    this.searchNavChange = this.searchNavChange.bind(this);
  }
  componentDidUpdate(prevProps, prevState) {
    // document.getElementById("results").scrollIntoView({ behavior: "smooth" });
  }
  setActiveButton(btnText) {
    this.setState({ activeBtn: btnText });
  }
  toggleDisplayTable(e) {
    if (e) {
      e.preventDefault();
    }
    this.setState({
      displayTable: true,
      collapseSearch: !this.state.collapseSearch
    });
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
  collapseBtn() {
    this.setState({
      collapseSearch: !this.state.collapseSearch
    });
  }
  searchNavChange(e) {
    this.setState({
      searchNavText: e.target.value
    });
  }
  searchNav(e) {
    e.preventDefault();
    const numPattern = /^\d+$/;
    const inputStr = this.state.searchNavText;
    const result = inputStr.match(numPattern)
      ? "case number " + this.state.searchNavText
      : "name " + this.state.searchNavText;
    this.setState({
      searchingText: result
    });
    this.toggleDisplayTable();
  }

  render() {
    return (
      <div className="App">
        <Nav
          searchNav={this.searchNav}
          searchNavText={this.state.searchNavText}
          searchNavChange={this.searchNavChange}
        />
        <main role="main">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <ResultsTable 
                  searchNavText={this.state.searchingText}
                  displayTable={this.state.displayTable} />
              </div>
        
              {!this.state.displayTable && <Features />}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
