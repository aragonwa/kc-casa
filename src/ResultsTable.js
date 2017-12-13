import React from "react";
import DetailsModal from "./DetailsModal";
import Pagination from "./Pagination";

const ResultsTable = props => {
  return (
    <div className={props.displayTable ? "" : "d-none"} id="results">
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

        <Pagination />
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
  );
};

export default ResultsTable;
