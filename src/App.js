import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/scss/bootstrap.scss";

import "bootstrap";
import DatePicker from 'react-datepicker';
import moment from 'moment';
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
              <span className="fa fa-cog" />
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

            <table className="table table-striped table-bordered table-responsive">
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

          <div
            className="modal fade"
            id="modalResult1"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLongTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">
                    Case details
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="row ">
                    <div className="col-sm-12">
                      <p>Child name: Joe Smith</p>
                      <p>
                        Polaroid wolf mixtape sartorial migas. Crucifix chia
                        franzen next level stumptown twee normcore, pork belly
                        sriracha asymmetrical cliche raw denim. Sriracha
                        activated charcoal biodiesel craft beer blog health goth
                        messenger bag butcher flexitarian gluten-free ugh jean
                        shorts unicorn kale chips. Forage food truck woke,
                        mixtape pug adaptogen live-edge raclette authentic. Lomo
                        celiac succulents ennui af kickstarter occupy. Bitters
                        shabby chic blog, pour-over pug raw denim prism enamel
                        pin semiotics blue bottle venmo knausgaard quinoa.
                        Slow-carb drinking vinegar keffiyeh jianbing. Wolf roof
                        party disrupt af la croix VHS activated charcoal
                        glossier knausgaard scenester authentic locavore offal
                        tilde umami. Hexagon blue bottle bitters tbh kogi
                        godard. Next level trust fund typewriter godard
                        asymmetrical sartorial portland schlitz franzen four
                        loko tumblr single-origin coffee butcher. Yuccie
                        chambray hell of try-hard cornhole. Chia squid subway
                        tile semiotics, gastropub VHS hoodie health goth hell of
                        kogi pabst shabby chic. Hot chicken forage activated
                        charcoal, lo-fi pickled VHS sartorial la croix palo
                        santo fam.
                      </p>
                      <p>
                        riracha taiyaki flannel, four loko tattooed pour-over
                        occupy distillery. Vaporware sriracha wolf blue bottle
                        intelligentsia, photo booth banh mi brunch cold-pressed
                        squid pork belly listicle. Lo-fi bitters yuccie 3 wolf
                        moon squid. Portland fanny pack affogato marfa, woke
                        flannel fashion axe put a bird on it tofu pug.
                        Chicharrones migas disrupt kale chips ugh gastropub
                        bitters shaman hella kogi hot chicken taiyaki. XOXO food
                        truck freegan polaroid dreamcatcher, keffiyeh brunch.
                        Activated charcoal helvetica green juice kinfolk,
                        biodiesel farm-to-table cardigan wolf everyday carry.
                        Austin palo santo iceland, intelligentsia XOXO vice
                        meditation leggings. Aesthetic salvia chambray before
                        they sold out. Umami pickled selfies seitan bushwick
                        church-key VHS cold-pressed kickstarter etsy waistcoat
                        beard photo booth brunch tilde. Lyft jianbing
                        post-ironic snackwave food truck tote bag craft beer.
                        Photo booth flannel fixie pork belly lo-fi tote bag YOLO
                        taiyaki live-edge.
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div
                      className="col-12"
                      style={{ paddingRight: 0, paddingLeft: 0 }}
                    >
                      <div id="accordion" role="tablist">
                        <div className="card">
                          <div
                            className="card-header"
                            role="tab"
                            id="headingDetail"
                          >
                            <h5 className="mb-0">
                              <a
                                data-toggle="collapse"
                                href="#collapseDetail"
                                aria-expanded="true"
                                aria-controls="collapseDetail"
                              >
                                Case Detail
                              </a>
                            </h5>
                          </div>

                          <div
                            id="collapseDetail"
                            className="collapse show"
                            role="tabpanel"
                            aria-labelledby="headingDetail"
                            data-parent="#accordion"
                          >
                            <div className="card-body">
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch. Food truck quinoa nesciunt laborum
                              eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                              put a bird on it squid single-origin coffee nulla
                              assumenda shoreditch et. Nihil anim keffiyeh
                              helvetica, craft beer labore wes anderson cred
                              nesciunt sapiente ea proident. Ad vegan excepteur
                              butcher vice lomo. Leggings occaecat craft beer
                              farm-to-table, raw denim aesthetic synth nesciunt
                              you probably haven't heard of them accusamus
                              labore sustainable VHS.
                              <p>
                                Hoodie crucifix viral dreamcatcher blog. Venmo
                                mixtape cornhole kickstarter waistcoat normcore
                                raw denim everyday carry beard flannel semiotics
                                health goth pug locavore. Aesthetic small batch
                                photo booth truffaut swag meditation cornhole.
                                Four loko banh mi hell of, +1 literally prism
                                quinoa 3 wolf moon VHS slow-carb single-origin
                                coffee. Photo booth semiotics humblebrag brunch
                                vexillologist intelligentsia. Microdosing you
                                probably haven't heard of them hammock, schlitz
                                YOLO chia lomo meditation. Sartorial viral woke
                                af vape poke semiotics farm-to-table
                                vexillologist 3 wolf moon yr. Fixie XOXO put a
                                bird on it kogi affogato try-hard blog lomo.
                                Humblebrag ethical cold-pressed intelligentsia
                                succulents. Taiyaki lyft four dollar toast,
                                knausgaard marfa retro cloud bread. Cardigan
                                whatever affogato glossier VHS intelligentsia
                                XOXO art party kitsch letterpress. Live-edge
                                taxidermy mustache, mlkshk cornhole tousled
                                hexagon heirloom migas iPhone tumblr try-hard
                                four dollar toast neutra freegan. Kogi austin af
                                brunch. Edison bulb vape chillwave, ugh YOLO
                                try-hard green juice direct trade thundercats
                                typewriter brunch fingerstache four loko seitan.
                                Semiotics mlkshk shabby chic, cronut
                                dreamcatcher microdosing brooklyn offal unicorn.
                              </p>
                              <p>
                                Bushwick swag blog, try-hard poutine chillwave
                                pinterest synth. Hoodie food truck artisan,
                                bitters glossier live-edge iPhone sartorial.
                                Occupy chia banjo franzen affogato hashtag ennui
                                leggings. Brunch sustainable plaid subway tile
                                swag. Sartorial literally YOLO artisan
                                microdosing hashtag adaptogen schlitz brooklyn
                                raw denim photo booth scenester. Typewriter
                                waistcoat 90's, vape hammock mixtape air plant
                                tacos. Irony vice fixie palo santo subway tile
                                asymmetrical kitsch normcore migas coloring book
                                synth single-origin coffee iceland listicle.
                                Green juice dreamcatcher four loko photo booth
                                four dollar toast, enamel pin +1. Polaroid
                                normcore affogato vice, cred bespoke hella
                                meditation deep v cornhole PBR&amp;B etsy health
                                goth jianbing actually. Kinfolk flannel narwhal
                                skateboard fixie, kale chips pinterest.
                                Pour-over vegan shaman intelligentsia, pabst
                                trust fund synth vinyl four loko coloring book.
                                Live-edge tumeric plaid roof party XOXO
                                church-key YOLO +1 four dollar toast fam pabst
                                fingerstache. Cray street art lo-fi vice ethical
                                bespoke, farm-to-table edison bulb photo booth
                                distillery keffiyeh. Taiyaki lyft master cleanse
                                occupy. Pug DIY lomo fixie hot chicken, iPhone
                                keffiyeh marfa humblebrag.
                              </p>
                              <p>
                                Narwhal cold-pressed 3 wolf moon man bun.
                                Sriracha lomo freegan raclette, beard tumeric
                                roof party flexitarian fam fanny pack air plant
                                vinyl hammock bushwick. Keytar affogato next
                                level, tousled meditation vape roof party
                                bushwick seitan selvage mumblecore pork belly
                                banh mi iceland gochujang. Kitsch humblebrag
                                mustache bicycle rights tumeric. Hella hashtag
                                try-hard cloud bread, green juice vape kitsch
                                listicle disrupt man braid before they sold out.
                                Godard green juice lomo kitsch af vaporware
                                hella shaman butcher tilde cloud bread palo
                                santo gastropub woke. Chia pug subway tile
                                bespoke cray scenester succulents. Coloring book
                                cloud bread mlkshk hashtag distillery, salvia
                                ramps activated charcoal church-key neutra.
                                Pop-up shabby chic coloring book neutra. Umami
                                vexillologist neutra, tousled four dollar toast
                                kombucha raclette thundercats hot chicken ugh
                                humblebrag drinking vinegar tilde coloring book.
                                Banjo keffiyeh photo booth, unicorn 3 wolf moon
                                DIY kinfolk pug jianbing yuccie cred scenester
                                ramps migas cray. Palo santo prism green juice
                                glossier, chartreuse pitchfork adaptogen ethical
                                you probably haven't heard of them street art
                                lo-fi 3 wolf moon. Ennui sustainable blue bottle
                                put a bird on it cloud bread fashion axe selfies
                                wolf pitchfork chillwave plaid. +1 celiac
                                mumblecore, 90's small batch health goth
                                slow-carb cray next level taiyaki gochujang tofu
                                pinterest. Synth mixtape succulents cliche echo
                                park etsy activated charcoal +1.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div
                            className="card-header"
                            role="tab"
                            id="headingGAL"
                          >
                            <h5 className="mb-0">
                              <a
                                className="collapsed"
                                data-toggle="collapse"
                                href="#collapseGAL"
                                aria-expanded="false"
                                aria-controls="collapseGAL"
                              >
                                GAL
                              </a>
                            </h5>
                          </div>
                          <div
                            id="collapseGAL"
                            className="collapse"
                            role="tabpanel"
                            aria-labelledby="headingGAL"
                            data-parent="#accordion"
                          >
                            <div className="card-body">
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch. Food truck quinoa nesciunt laborum
                              eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                              put a bird on it squid single-origin coffee nulla
                              assumenda shoreditch et. Nihil anim keffiyeh
                              helvetica, craft beer labore wes anderson cred
                              nesciunt sapiente ea proident. Ad vegan excepteur
                              butcher vice lomo. Leggings occaecat craft beer
                              farm-to-table, raw denim aesthetic synth nesciunt
                              you probably haven't heard of them accusamus
                              labore sustainable VHS.
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div
                            className="card-header"
                            role="tab"
                            id="headingSlibling"
                          >
                            <h5 className="mb-0">
                              <a
                                className="collapsed"
                                data-toggle="collapse"
                                href="#collapseSlibling"
                                aria-expanded="false"
                                aria-controls="collapseSlibling"
                              >
                                Sibling
                              </a>
                            </h5>
                          </div>
                          <div
                            id="collapseSlibling"
                            className="collapse"
                            role="tabpanel"
                            aria-labelledby="headingSlibling"
                            data-parent="#accordion"
                          >
                            <div className="card-body">
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch. Food truck quinoa nesciunt laborum
                              eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                              put a bird on it squid single-origin coffee nulla
                              assumenda shoreditch et. Nihil anim keffiyeh
                              helvetica, craft beer labore wes anderson cred
                              nesciunt sapiente ea proident. Ad vegan excepteur
                              butcher vice lomo. Leggings occaecat craft beer
                              farm-to-table, raw denim aesthetic synth nesciunt
                              you probably haven't heard of them accusamus
                              labore sustainable VHS.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary float-right"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
