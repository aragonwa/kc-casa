import React, { Component } from "react";
import DetailsModal from './DetailsModal';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/scss/bootstrap.scss";

import "bootstrap";
import DatePicker from 'react-datepicker';
// import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import "./App.css";
 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeBtn: "Case",
      displayTable: false,
      startDate: null,
      startDate2: null
    };
    this.setActiveButton = this.setActiveButton.bind(this);
    this.displayTable = this.displayTable.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
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
  render() {
    // const buttons = ["Case", "CASA", "Event", "Query"].map(btnText => {
    //   return (
    //     <button
    //       type="button"
    //       key={btnText}
    //       onClick={() => this.setActiveButton(btnText)}
    //       className={
    //         "btn btn-primary" +
    //         (this.state.activeBtn === btnText ? " active" : "")
    //       }
    //     >
    //       {btnText}
    //     </button>
    //   );
    // });
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
            <button
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
            </button>
            <form>
              <p className="h2">Search by cases</p>
              <div className="form-row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="inputLastName">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputLastName"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="inputFirstName">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputFirstName"
                    />
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="selectRole">Role</label>
                    <select className="form-control" id="selectRole">
                      <option value="Child">Child</option>
                      <option value="Mother">Mother</option>
                      <option value="Father">Father</option>
                      <option value="CASA">CASA</option>
                      <option value="Pro Bono Attorney">
                        Pro Bono Attorney
                      </option>
                      <option value="Primary Staff Attorney">
                        Primary Staff Attorney
                      </option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="selectCaseStatus">Case Status</label>
                    <select
                      value=""
                      className="form-control"
                      id="selectCaseStatus"
                    >
                      <option value="">Choose Case Status</option>
                      <option value="New">New</option>
                      <option value="Pend">Pending</option>
                      <option value="A">Active</option>
                      <option value="PR">Pending reassign</option>
                      <option value="PR-EX">Exparte dischg pending</option>
                      <option value="DISC">Appt Discharged</option>
                      <option value="DIS">Case dismissed</option>
                      <option value="Reord">Reordered</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="collapse" id="collapseAdvancedSearch">
                <p className="h4">Advanced Search</p>
                <div className="form-row ">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="inputLegalNumber">Legal Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputLegalNumber"
                        placeholder="Legal Number"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="inputPendingNumber">Pending Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputPendingNumber"
                        placeholder="Pending Number"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-row ">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="inputCaseNumber">Case Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputCaseNumber"
                        placeholder="Case Number"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="inputTerminationNumber">
                        Termination Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputTerminationNumber"
                        placeholder="Termination Number"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-row ">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="selectCourtRecommend">Court Recommend</label>
                      <select
                        value=""
                        className="form-control"
                        id="selectCourtRecommend"
                      >
                        <option value="">Select court recommend</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="Deferred">Deferred</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="inputDateOrdered">
                        Date ordered
                      </label>
                      <DatePicker  
                        id="inputDateOrdered"
                        className="form-control"
                        selected={this.state.startDate2}
                        onChange={this.handleChange2}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-row ">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="selectIntakeStaff">Intake staff</label>
                      <select
                        value=""
                        className="form-control"
                        id="selectIntakeStaff"
                      >
                        <option value="0">Select intake staff</option>
                        <option value="-1">##Prior Employee##</option>
                        <option value="45">Bob Stutz</option>
                        <option value="74400">Napoleon Caldwell</option>
                        <option value="74401">Carolyn Frimpter</option>
                        <option value="74402">Melissa Hartley</option>
                        <option value="74403">Janet Horton</option>
                        <option value="74406">Peggy Larson</option>
                        <option value="74407">Don Miner</option>
                        <option value="74408">Emma Puro</option>
                        <option value="74409">Wai-Ping Li-Landis</option>
                        <option value="74410">Cheryl Retic</option>
                        <option value="74411">Deanna Watson</option>
                        <option value="74412">Lucyle Wooden</option>
                        <option value="84356">Connie Stockton</option>
                        <option value="74678">Janet Harris</option>
                        <option value="74405">Kathy McCormack</option>
                        <option value="74404">Vickey Wilson</option>
                        <option value="88640">Demetrius Devers</option>
                        <option value="76033">Laura Chunyk</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="inputIntakeDate">
                        Intake date
                      </label>
                      <DatePicker  
                        id="inputIntakeDate"
                        className="form-control"
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
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

        <div className={this.state.displayTable ? "" : "d-none"} id="results">
          <h3>Results</h3>
            <div className="hi">
            <table className="table table-striped table-bordered table-responsive-sm">
              <thead>
                <tr>
                  <th scope="col">Legal number</th>
                  <th scope="col">Child Name</th>
                  <th scope="col">Pending number</th>
                  <th scope="col">Case number</th>
                  <th scope="col">CASA name</th>
                  <th scope="col">Primary phone</th>
                  <th scope="col">CS name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <button
                      type="button"
                      className="btn btn-link"
                      data-toggle="modal"
                      data-target="#modalResult1"
                    >
                      00-0-00000-0
                    </button>
                  </td>
                  <td>Child 1</td>
                  <td>Active</td>
                  <td>1234</td>
                  <td>CASA</td>
                  <td>Primary phone</td>
                  <td>Joe Smith</td>
                </tr>
                <tr>
                  <td>
                    <button
                      type="button"
                      className="btn btn-link"
                      data-toggle="modal"
                      data-target="#modalResult1"
                    >
                      00-0-00000-0
                    </button>
                  </td>
                  <td>Child 2</td>
                  <td>Active</td>
                  <td>1234</td>
                  <td>CASA</td>
                  <td>Primary phone</td>
                  <td>Joe Smith</td>
                </tr>
                <tr>
                  <td>
                    <button
                      type="button"
                      className="btn btn-link"
                      data-toggle="modal"
                      data-target="#modalResult1"
                    >
                      00-0-00000-0
                    </button>
                  </td>
                  <td>Child 3</td>
                  <td>Active</td>
                  <td>1234</td>
                  <td>CASA</td>
                  <td>Primary phone</td>
                  <td>Joe Smith</td>
                </tr>
                <tr>
                  <td>
                    <button
                      type="button"
                      className="btn btn-link"
                      data-toggle="modal"
                      data-target="#modalResult1"
                    >
                      00-0-00000-0
                    </button>
                  </td>
                  <td>Child 4</td>
                  <td>Active</td>
                  <td>1234</td>
                  <td>CASA</td>
                  <td>Primary phone</td>
                  <td>Joe Smith</td>
                </tr>
                <tr>
                  <td>
                    <button
                      type="button"
                      className="btn btn-link"
                      data-toggle="modal"
                      data-target="#modalResult1"
                    >
                      00-0-00000-0
                    </button>
                  </td>
                  <td>Child 5</td>
                  <td>Active</td>
                  <td>1234</td>
                  <td>CASA</td>
                  <td>Primary phone</td>
                  <td>Joe Smith</td>
                </tr>
                <tr>
                  <td>
                    <button
                      type="button"
                      className="btn btn-link"
                      data-toggle="modal"
                      data-target="#modalResult1"
                    >
                      00-0-00000-0
                    </button>
                  </td>
                  <td>Child 6</td>
                  <td>Active</td>
                  <td>1234</td>
                  <td>CASA</td>
                  <td>Primary phone</td>
                  <td>Joe Smith</td>
                </tr>
                <tr>
                  <td>
                    <button
                      type="button"
                      className="btn btn-link"
                      data-toggle="modal"
                      data-target="#modalResult1"
                    >
                      00-0-00000-0
                    </button>
                  </td>
                  <td>Child 7</td>
                  <td>Active</td>
                  <td>1234</td>
                  <td>CASA</td>
                  <td>Primary phone</td>
                  <td>Joe Smith</td>
                </tr>
                <tr>
                  <td>
                    <button
                      type="button"
                      className="btn btn-link"
                      data-toggle="modal"
                      data-target="#modalResult1"
                    >
                      00-0-00000-0
                    </button>
                  </td>
                  <td>Child 8</td>
                  <td>Active</td>
                  <td>1234</td>
                  <td>CASA</td>
                  <td>Primary phone</td>
                  <td>Joe Smith</td>
                </tr>
                <tr>
                  <td>
                    <button
                      type="button"
                      className="btn btn-link"
                      data-toggle="modal"
                      data-target="#modalResult1"
                    >
                      00-0-00000-0
                    </button>
                  </td>
                  <td>Child 9</td>
                  <td>Active</td>
                  <td>1234</td>
                  <td>CASA</td>
                  <td>Primary phone</td>
                  <td>Joe Smith</td>
                </tr>
                <tr>
                  <td>
                    <button
                      type="button"
                      className="btn btn-link"
                      data-toggle="modal"
                      data-target="#modalResult1"
                    >
                      00-0-00000-0
                    </button>
                  </td>
                  <td>Child 10</td>
                  <td>Active</td>
                  <td>1234</td>
                  <td>CASA</td>
                  <td>Primary phone</td>
                  <td>Joe Smith</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            className="modal fade"
            id="modalResult1"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLongTitle"
            aria-hidden="true"
          >
          <DetailsModal />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
