import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from 'moment';


class EditExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editOn: false,
      lastName: "Doe",
      firstName: "Joe",
      inquiryDate: moment(),
      email: "example@kingcounty.gov",
      status: "A",
      address: "1234 First Street",
      city: "Seattle",
      addressState: "WA",
      zipCode: "98104"
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.setProp = this.setProp.bind(this);
    this.setDate = this.setDate.bind(this);
  }
  toggleEdit() {
    this.setState({
      editOn: !this.state.editOn
    });
  }
  setDate(date){
    this.setProp(date, 3)
  }
  setProp(e, propNum) {
    console.log(e);
    switch (propNum) {
      case 1:
        this.setState({ firstName: e.target.value });
        break;
      case 2:
        this.setState({ lastName: e.target.value });
        break;
      case 3:
        this.setState({ inquiryDate: e });
        break;
      case 4:
        this.setState({ email: e.target.value });
        break;
      case 5:
        this.setState({ status: e.target.value });
        break;
      case 6:
        this.setState({ address: e.target.value });
        break;
      case 7:
        this.setState({ city: e.target.value });
        break;
      case 8:
        this.setState({ addressState: e.target.value });
        break;
      case 9:
        this.setState({ zipCode: e.target.value });
        break;
    }
  }
  render() {
    return (
      <div>
        <div className="form-row">
          <div className="col-sm-4">
            <div className="form-group">
              <label htmlFor="inputFirstName">First Name</label>
              <input
                type="text"
                readOnly={this.state.editOn ? false : true}
                className={
                  this.state.editOn ? "form-control" : "form-control-plaintext"
                }
                id="inputFirstName"
                value={this.state.firstName}
                onChange={e => this.setProp(e, 1)}
              />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="form-group">
              <label htmlFor="inputLastName">Last Name</label>
              <input
                type="text"
                readOnly={this.state.editOn ? false : true}
                className={
                  this.state.editOn ? "form-control" : "form-control-plaintext"
                }
                id="inputLastName"
                onChange={e => this.setProp(e, 2)}
                value={this.state.lastName}
              />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="form-group">
              <label htmlFor="inputDateInquiry">Inquiry Date</label>
              <DatePicker id="inputDateInquiry" className={this.state.editOn ? "form-control" : "form-control-plaintext"} readOnly={this.state.editOn ? false : true} selected={this.state.inquiryDate} onChange={this.setDate} />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="form-group">
              <label htmlFor="inputEmail">Email</label>
              <input
                type="text"
                readOnly={this.state.editOn ? false : true}
                className={
                  this.state.editOn ? "form-control" : "form-control-plaintext"
                }
                id="inputEmail"
                onChange={e => this.setProp(e, 4)}
                value={this.state.email}
              />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="form-group">
              <label htmlFor="selectStatus">Status</label>
              <select
                disabled={this.state.editOn ? false : true}
                className="form-control"
                id="selectStatus"
                value={this.state.status}
                onChange={e => this.setProp(e, 5)}
              >
                <option value="0">[Select]</option>
                <option value="In process">In process</option>
                <option value="Pend">Pending</option>
                <option value="A">Active</option>
                <option value="I">Inactive</option>
                <option value="W">Withdrawn</option>
                <option value="TC">Training completed</option>
                <option value="DFT">Did not follow thru</option>
                <option value="NOT ACCEPTED">NOT ACCEPTED</option>
              </select>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="form-group">
              <label htmlFor="inputAddress">Address</label>
              <input
                type="text"
                readOnly={this.state.editOn ? false : true}
                className={
                  this.state.editOn ? "form-control" : "form-control-plaintext"
                }
                id="inputAddress"
                onChange={e => this.setProp(e, 6)}
                value={this.state.address}
              />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="form-group">
              <label htmlFor="inputCity">City</label>
              <input
                type="text"
                readOnly={this.state.editOn ? false : true}
                className={
                  this.state.editOn ? "form-control" : "form-control-plaintext"
                }
                id="inputCity"
                onChange={e => this.setProp(e, 7)}
                value={this.state.city}
              />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="form-group">
              <label htmlFor="inputState">State</label>
                <select
                disabled={this.state.editOn ? false : true}
                className="form-control"
                id="inputState"
                onChange={e => this.setProp(e, 8)}
                value={this.state.addressState}
              >
                <option value="">[Select]</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AS">American Samoa</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="AA">Armed Forces Americas</option>
                <option value="AE">Armed Forces Furone</option>
                <option value="AP">Armed Forces Pacific</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="GU">Guam</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MP">Mariana Islands</option>
                <option value="MH">Marshall Islands</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="FM">Micronesia</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PW">Palau</option>
                <option value="PA">Pennsylvania</option>
                <option value="PR">Puerto Rico</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VI">Virgin Islands</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="form-group">
              <label htmlFor="inputZipCode">Zip Code</label>
              <input
                type="text"
                readOnly={this.state.editOn ? false : true}
                className={
                  this.state.editOn ? "form-control" : "form-control-plaintext"
                }
                id="inputZipCode"
                onChange={e => this.setProp(e, 9)}
                value={this.state.zipCode}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <button
              type="button"
              className={
                "float-right btn " +
                (this.state.editOn ? "btn-success" : "btn-info")
              }
              onClick={this.toggleEdit}
            >
              {this.state.editOn ? "Save" : "Edit"}
            </button>
          </div>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default EditExample;
