import React from "react";
import SearchFields from "./SearchFields";
import AdvancedSearchFields from "./AdvancedSearchFields";
import ResultsTable from "../Results";

const Search = props => {
  return (
    <div className="col-md-12">
      <div className="card bg-light">
        <div className="card-body">
          <form style={{ position: "relative" }}>
            <button
              type="button"
              className="btn btn-secondary btn-sm float-right"
              data-toggle="collapse"
              data-target="#searchFields"
              aria-expanded="true"
              aria-controls="searchFields"
              onClick={props.collapseBtn}
            >
              <span
                className={
                  "fa " +
                  (props.collapseSearch
                    ? "fa-chevron-down"
                    : "fa-chevron-up")
                }
              />
            </button>
            <p className="h2">Search by {props.searchingText}</p>

            <div id="searchFields" className="collapse">
              {props.showSearch}
              <SearchFields />
              <AdvancedSearchFields
                startDate={props.startDate}
                startDate2={props.startDate2}
                startDate3={props.startDate3}
                handleChange={props.handleChange}
                handleChange2={props.handleChange2}
                handleChange3={props.handleChange3}
              />

              <a
                id="advSearch"
                className="btn-advSearch btn btn-lg"
                data-toggle="collapse"
                href="#collapseAdvancedSearch"
                aria-expanded="false"
                aria-controls="collapseAdvancedSearch"
                data-original-title="Toggle advance search"
                onClick={props.toggleAdvSearchText}
              >
                <span className="badge badge-pill badge-dark">
                  {props.showAdvSearchText
                    ? "Advanced Search"
                    : "Basic Search"}
                </span>
              </a>
              <button
                type="submit"
                onClick={props.toggleDisplayTable}
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

    </div>
  );
};

export default Search;
