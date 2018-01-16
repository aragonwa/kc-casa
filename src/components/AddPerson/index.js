// src/components/About/index.js
import React, { Component } from "react";
import "./style.css";
import DatePicker from "react-datepicker";
import Nav from "../Nav";

export default class AddPerson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <div>
        <Nav />

        <main role="main">
          <div className="container-fluid">
            <div className="col-md-12">
              <h1>Create New Person</h1>
              <div className="form-row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <div className="form-check">
                      <label className="form-check-label">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        Is CASA
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="form-group">
                    <label htmlFor="inputFirstName">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputFirstName"
                    />
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="form-group">
                    <label htmlFor="inputLastName">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputLastName"
                    />
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="form-group">
                    <label htmlFor="inputMiddleName">Middle Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputMiddleName"
                    />
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="form-group">
                    <label htmlFor="inputSuffix">Suffix</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputSuffix"
                    />
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="form-group">
                    <label htmlFor="inputTitle">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputTitle"
                    />
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="form-group">
                    <label htmlFor="inputDateOfBirth">Date Of Birth</label>
                    <DatePicker
                      id="inputDateOfBirth"
                      className="form-control"
                      selected={this.state.startDate}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="form-group">
                    <label htmlFor="inputRace">Race</label>
                    <select className="form-control" id="inputRace">
                      <option value="0">[Select]</option>
                      <option value="1">African American / Black</option>
                      <option value="2">Asian / Pacific Islander</option>
                      <option value="3">Caucasian / White</option>
                      <option value="4">Hispanic / Latino</option>
                      <option value="7">Mixed Race</option>
                      <option value="5">Native American</option>
                      <option value="6">Unknown</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="form-group">
                    <label htmlFor="inputGender">Gender</label>
                    <select className="form-control" id="inputGender">
                      <option value="0">[Select]</option>
                      <option value="1">Male</option>
                      <option value="2">Female</option>
                    </select>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="inputAddress1">Address 1</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress1"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="inputAddress1">Address 2</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress2"
                    />
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="form-group">
                    <label htmlFor="inputCity">City</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCity"
                    />
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="form-group">
                    <label htmlFor="inputState">State</label>
                    <select className="form-control" id="State" name="State">
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
                <div className="col-sm-3">
                  <div className="form-group">
                    <label htmlFor="inputZipCode">Zip Code</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputZipCode"
                    />
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="form-group">
                    <label htmlFor="inputCountry">Country</label>
                    <select
                      class="form-control"
                      id="inputCounty"
                      name="inputCounty"
                    >
                      <option selected="selected" value="0">[Select]</option>
                      <option value="1">Afghanistan</option>
                      <option value="2">Albania</option>
                      <option value="3">Algeria</option>
                      <option value="4">American Samoa</option>
                      <option value="5">Andorra</option>
                      <option value="6">Angola</option>
                      <option value="7">Anguilla</option>
                      <option value="8">Antigua and Barbuda</option>
                      <option value="9">Argentina</option>
                      <option value="10">Armenia</option>
                      <option value="11">Aruba</option>
                      <option value="12">Australia</option>
                      <option value="13">Austria</option>
                      <option value="14">Azerbaijan</option>
                      <option value="15">Bahamas</option>
                      <option value="16">Bahrain</option>
                      <option value="17">Bangladesh</option>
                      <option value="18">Barbados</option>
                      <option value="19">Belarus</option>
                      <option value="20">Belgium</option>
                      <option value="21">Belize</option>
                      <option value="22">Benin</option>
                      <option value="23">Bermuda</option>
                      <option value="24">Bhutan</option>
                      <option value="25">Bolivia</option>
                      <option value="26">Bosnia and Herzegovina</option>
                      <option value="27">Botswana</option>
                      <option value="28">Brazil</option>
                      <option value="29">British Virgin Islands</option>
                      <option value="30">Brunei Darussalam</option>
                      <option value="31">Bulgaria</option>
                      <option value="32">Burkina Faso</option>
                      <option value="33">Burundi</option>
                      <option value="34">Cambodia</option>
                      <option value="35">Cameroon</option>
                      <option value="36">Canada</option>
                      <option value="37">Cape Verde</option>
                      <option value="38">Cayman Islands</option>
                      <option value="39">Central African Republic</option>
                      <option value="40">Chad</option>
                      <option value="41">Chile</option>
                      <option value="42">China</option>
                      <option value="45">Colombia</option>
                      <option value="46">Comoros</option>
                      <option value="47">Congo</option>
                      <option value="56">
                        Congo, Democratic Republic of the
                      </option>
                      <option value="48">Cook Islands</option>
                      <option value="49">Costa Rica</option>
                      <option value="50">Côte d'Ivoire</option>
                      <option value="51">Croatia</option>
                      <option value="52">Cuba</option>
                      <option value="53">Cyprus</option>
                      <option value="54">Czech Republic</option>
                      <option value="57">Denmark</option>
                      <option value="58">Djibouti</option>
                      <option value="59">Dominica</option>
                      <option value="60">Dominican Republic</option>
                      <option value="61">Ecuador</option>
                      <option value="62">Egypt</option>
                      <option value="63">El Salvador</option>
                      <option value="64">Equatorial Guinea</option>
                      <option value="65">Eritrea</option>
                      <option value="66">Estonia</option>
                      <option value="67">Ethiopia</option>
                      <option value="68">Faeroe Islands</option>
                      <option value="69">Falkland Islands (Malvinas)</option>
                      <option value="70">Fiji</option>
                      <option value="71">Finland</option>
                      <option value="72">France</option>
                      <option value="73">French Guiana</option>
                      <option value="74">French Polynesia</option>
                      <option value="75">Gabon</option>
                      <option value="76">Gambia</option>
                      <option value="77">Georgia</option>
                      <option value="78">Germany</option>
                      <option value="79">Ghana</option>
                      <option value="80">Gibraltar</option>
                      <option value="81">Greece</option>
                      <option value="82">Greenland</option>
                      <option value="83">Grenada</option>
                      <option value="84">Guadeloupe</option>
                      <option value="85">Guam</option>
                      <option value="86">Guatemala</option>
                      <option value="87">Guinea</option>
                      <option value="88">Guinea-Bissau</option>
                      <option value="89">Guyana</option>
                      <option value="90">Haiti</option>
                      <option value="91">Holy See</option>
                      <option value="92">Honduras</option>
                      <option value="43">Hong Kong</option>
                      <option value="93">Hungary</option>
                      <option value="94">Iceland</option>
                      <option value="95">India</option>
                      <option value="96">Indonesia</option>
                      <option value="97">Iran</option>
                      <option value="98">Iraq</option>
                      <option value="99">Ireland</option>
                      <option value="100">Israel</option>
                      <option value="101">Italy</option>
                      <option value="102">Jamaica</option>
                      <option value="103">Japan</option>
                      <option value="104">Jordan</option>
                      <option value="105">Kazakhstan</option>
                      <option value="106">Kenya</option>
                      <option value="107">Kiribati</option>
                      <option value="55">Korea</option>
                      <option value="108">Kuwait</option>
                      <option value="109">Kyrgyzstan</option>
                      <option value="110">Laos</option>
                      <option value="111">Latvia</option>
                      <option value="112">Lebanon</option>
                      <option value="113">Lesotho</option>
                      <option value="114">Liberia</option>
                      <option value="115">Libyan Arab Jamahiriya</option>
                      <option value="116">Liechtenstein</option>
                      <option value="117">Lithuania</option>
                      <option value="118">Luxembourg</option>
                      <option value="44">Macao</option>
                      <option value="203">Macedonia</option>
                      <option value="119">Madagascar</option>
                      <option value="120">Malawi</option>
                      <option value="121">Malaysia</option>
                      <option value="122">Maldives</option>
                      <option value="123">Mali</option>
                      <option value="124">Malta</option>
                      <option value="125">Marshall Islands</option>
                      <option value="126">Martinique</option>
                      <option value="127">Mauritania</option>
                      <option value="128">Mauritius</option>
                      <option value="129">Mayotte</option>
                      <option value="130">Mexico</option>
                      <option value="131">
                        Micronesia (Federated States of)
                      </option>
                      <option value="132">Monaco</option>
                      <option value="133">Mongolia</option>
                      <option value="134">Montserrat</option>
                      <option value="135">Morocco</option>
                      <option value="136">Mozambique</option>
                      <option value="137">Myanmar</option>
                      <option value="138">Namibia</option>
                      <option value="139">Nauru</option>
                      <option value="140">Nepal</option>
                      <option value="141">Netherlands</option>
                      <option value="142">Netherlands Antilles</option>
                      <option value="143">New Caledonia</option>
                      <option value="144">New Zealand</option>
                      <option value="145">Nicaragua</option>
                      <option value="146">Niger</option>
                      <option value="147">Nigeria</option>
                      <option value="148">Niue</option>
                      <option value="149">Norfolk Island</option>
                      <option value="150">Northern Mariana Islands</option>
                      <option value="151">Norway</option>
                      <option value="152">
                        Occupied Palestinian Territory
                      </option>
                      <option value="153">Oman</option>
                      <option value="154">Pakistan</option>
                      <option value="155">Palau</option>
                      <option value="156">Panama</option>
                      <option value="157">Papua New Guinea</option>
                      <option value="158">Paraguay</option>
                      <option value="159">Peru</option>
                      <option value="160">Philippines</option>
                      <option value="161">Pitcairn</option>
                      <option value="162">Poland</option>
                      <option value="163">Portugal</option>
                      <option value="164">Puerto Rico</option>
                      <option value="165">Qatar</option>
                      <option value="166">Republic of Korea</option>
                      <option value="167">Republic of Moldova</option>
                      <option value="168">Réunion</option>
                      <option value="169">Romania</option>
                      <option value="170">Russian Federation</option>
                      <option value="171">Rwanda</option>
                      <option value="172">Saint Helena</option>
                      <option value="173">Saint Kitts and Nevis</option>
                      <option value="174">Saint Lucia</option>
                      <option value="175">Saint Pierre and Miquelon</option>
                      <option value="176">
                        Saint Vincent and the Grenadines
                      </option>
                      <option value="177">Samoa</option>
                      <option value="178">San Marino</option>
                      <option value="179">Sao Tome and Principe</option>
                      <option value="180">Saudi Arabia</option>
                      <option value="181">Senegal</option>
                      <option value="182">Serbia and Montenegro</option>
                      <option value="183">Seychelles</option>
                      <option value="184">Sierra Leone</option>
                      <option value="185">Singapore</option>
                      <option value="186">Slovakia</option>
                      <option value="187">Slovenia</option>
                      <option value="188">Solomon Islands</option>
                      <option value="189">Somalia</option>
                      <option value="190">South Africa</option>
                      <option value="191">Spain</option>
                      <option value="192">Sri Lanka</option>
                      <option value="193">Sudan</option>
                      <option value="194">Suriname</option>
                      <option value="195">
                        Svalbard and Jan Mayen Islands
                      </option>
                      <option value="196">Swaziland</option>
                      <option value="197">Sweden</option>
                      <option value="198">Switzerland</option>
                      <option value="199">Syrian Arab Republic</option>
                      <option value="200">Taiwan</option>
                      <option value="201">Tajikistan</option>
                      <option value="218">Tanzania</option>
                      <option value="202">Thailand</option>
                      <option value="204">Timor-Leste</option>
                      <option value="205">Togo</option>
                      <option value="206">Tokelau</option>
                      <option value="207">Tonga</option>
                      <option value="208">Trinidad and Tobago</option>
                      <option value="209">Tunisia</option>
                      <option value="210">Turkey</option>
                      <option value="211">Turkmenistan</option>
                      <option value="212">Turks and Caicos Islands</option>
                      <option value="213">Tuvalu</option>
                      <option value="214">Uganda</option>
                      <option value="215">Ukraine</option>
                      <option value="216">United Arab Emirates</option>
                      <option value="217">United Kingdom</option>
                      <option value="219">United States of America</option>
                      <option value="220">United States Virgin Islands</option>
                      <option value="221">Uruguay</option>
                      <option value="222">Uzbekistan</option>
                      <option value="223">Vanuatu</option>
                      <option value="224">Venezuela</option>
                      <option value="225">Viet Nam</option>
                      <option value="226">Wallis and Futuna Islands</option>
                      <option value="227">Western Sahara</option>
                      <option value="228">Yemen</option>
                      <option value="229">Zambia</option>
                      <option value="230">Zimbabwe</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="form-group">
                    <label htmlFor="inputEmail">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail"
                    />
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="form-group">
                    <label htmlFor="inputPhone">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPhone"
                    />
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="form-group">
                    <label htmlFor="inputPhoneExtension">Phone Extension</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPhoneExtension"
                    />
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="form-group">
                    <label htmlFor="inputPhoneType">Phone Type</label>
                      <select
                      class="form-control"
                      id="inputPhoneType"
                      name="inputPhoneType"
                      >
                        <option selected="selected" value="0">[Select]</option>
                        <option value="1">Home</option>
                        <option value="2">Work</option>
                        <option value="3">Cell</option>
                        <option value="4">Fax</option>
                      </select>
                  </div>
                </div>
              </div>
              <input class="btn btn-primary float-right" type="submit" value="Submit" />
            </div>
          </div>
        </main>
      </div>
    );
  }
}
