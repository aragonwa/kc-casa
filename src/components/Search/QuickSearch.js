import React, { Component } from "react";

export default class QuickSearch extends Component {
  render() {
    return (
      <form
        className="form-inline my-2 my-lg-0 col-7"
        onSubmit={this.props.searchNav}
        noValidate
      >
        <span className="input-group" style={{ width: "100%" }}>
          <input
            className="form-control"
            type="text"
            id="search-nav-input"
            name="search-nav-input"
            placeholder="Search by name or case number"
            aria-label="Search by name or case number"
            value={this.props.searchNavText}
            onChange={this.props.searchNavChange}
            required
          />
          <div className="input-group-append">
            <button
              className="btn btn-success my-2 my-sm-0"
              id="search-nav-btn"
              type="submit"
            >
              <span className="fa fa-search" />
            </button>
          </div>
        </span>
      </form>
    );
  }
}
