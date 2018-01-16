import React, { Component } from "react";

class SearchFields extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editOn: false,
      firstName: "",
      lastName: "",
      role: "Child",
      caseStatus: ""
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.setProp = this.setProp.bind(this);
  }
  toggleEdit(){
    this.setState({
      editOn: !this.state.editOn
    });
  }
  setProp(e, propNum){
    switch(propNum) {
      case 1: this.setState({firstName: e.target.value}); break;
      case 2: this.setState({lastName: e.target.value}); break;
      case 3: this.setState({role: e.target.value}); break;
      case 4: this.setState({caseStatus: e.target.value}); break;
    }
  }
    render() {
      return (
    <div>
      <div className="row">
        <div className="col-sm-12"><button type="button" className={"btn " + ((this.state.editOn)?"btn-success":"btn-info")} onClick={this.toggleEdit}>{(this.state.editOn)?"Save":"Edit"}</button></div>
        <br />
        <br />
      </div>
      <div className="form-row">
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="inputFirstName">First Name</label>
            <input type="text" readOnly={(this.state.editOn)? false: true} className={(this.state.editOn)? "form-control":"form-control-plaintext"} id="inputFirstName" value={this.state.firstName} onChange={(e)=>this.setProp(e,1)}/>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="inputLastName">Last Name</label>
            <input type="text" readOnly={(this.state.editOn)? false: true} className={(this.state.editOn)? "form-control":"form-control-plaintext"} id="inputLastName" onChange={(e)=>this.setProp(e,2)}  value={this.state.lastName}/>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="selectRole">Role</label>
            <select disabled={(this.state.editOn)? false: true} className="form-control" id="selectRole" value={this.state.role} onChange={(e)=>this.setProp(e,3)}>
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
            <select disabled={(this.state.editOn)? false: true} className="form-control" value={this.state.caseStatus} onChange={(e)=>this.setProp(e,4)} id="selectCaseStatus">
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
}
};

export default SearchFields;
