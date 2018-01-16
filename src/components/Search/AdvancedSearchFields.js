import React from "react";
import DatePicker from "react-datepicker";

const AdvancedSearchFields = (props) => {
  return (
    <div className="collapse" id="collapseAdvancedSearch" style={{marginTop: "20px"}}>
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
            <label htmlFor="inputTerminationNumber">Termination Number</label>
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
            <select value="" className="form-control" id="selectCourtRecommend">
              <option value="">Select court recommend</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Deferred">Deferred</option>
            </select>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="inputDateOrdered">Date ordered</label>
            <DatePicker
              id="inputDateOrdered"
              className="form-control"
              selected={props.startDate2}
              onChange={props.handleChange2}
            />
          </div>
        </div>
      </div>
      <div className="form-row ">
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="selectIntakeStaff">Intake staff</label>
            <select value="" className="form-control" id="selectIntakeStaff">
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
            <label htmlFor="inputIntakeDate">Intake date</label>
            <DatePicker
              id="inputIntakeDate"
              className="form-control"
              selected={props.startDate}
              onChange={props.handleChange}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="selectCS">CS</label>
            <select value="" className="form-control" id="selectCS">
              <option value="0">Select CS</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="inputBirthDate">Date of Brith</label>
            <DatePicker
              id="inputBirthDate"
              className="form-control"
              selected={props.startDate3}
              onChange={props.handleChange3}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="selectLocation">Location</label>
            <select value="" className="form-control" id="selectLocation">
              <option value="0">Select Location</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <div className="form-check">
              <br />
              <label className="form-check-label" style={{paddingTop: "15px"}}>
                <input className="form-check-input" type="checkbox" value="" />
                Archives
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSearchFields;
