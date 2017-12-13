import React from "react";

const SearchFields = () => {
  return (
    <div>
      <div className="form-row">
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="inputLastName">Last Name</label>
            <input type="text" className="form-control" id="inputLastName" />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="inputFirstName">First Name</label>
            <input type="text" className="form-control" id="inputFirstName" />
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
              <option value="Pro Bono Attorney">Pro Bono Attorney</option>
              <option value="Primary Staff Attorney">
                Primary Staff Attorney
              </option>
            </select>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="selectCaseStatus">Case Status</label>
            <select value="" className="form-control" id="selectCaseStatus">
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
    </div>
  );
};

export default SearchFields;
