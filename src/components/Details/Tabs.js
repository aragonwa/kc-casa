import React from "react";

const Tabs = () => {
  return (
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <div className="row">
            <div className="col-sm-12">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Case number 1234
              </h5>
            </div>

            {/* <div className="col-sm">
                <dl className="row">
                  <dt className="col-sm-4">Child name</dt>
                  <dd className="col-sm-8">Joe Smith</dd>
                  <dt className="col-sm-4">Gender</dt>
                  <dd className="col-sm-8">Male</dd>
                  <dt className="col-sm-4">Age</dt>
                  <dd className="col-sm-8">15</dd>
                  <dt className="col-sm-4">Birthday</dt>
                  <dd className="col-sm-8">1/1/2017</dd>
                  <dt className="col-sm-4">Ethnicity</dt>
                  <dd className="col-sm-8">White</dd>
                </dl>
              </div>
              <div className="col-sm">
                <dl className="row">
                  <dt className="col-sm-4">Child age at file</dt>
                  <dd className="col-sm-8">7 years 5 months</dd>
                  <dt className="col-sm-4">Legal number</dt>
                  <dd className="col-sm-8">00-7-00305-4</dd>
                  <dt className="col-sm-4">Pending number</dt>
                  <dd className="col-sm-8">1111</dd>
                  <dt className="col-sm-4">Case number</dt>
                  <dd className="col-sm-8">22222</dd>
                  <dt className="col-sm-4">Case Status</dt>
                  <dd className="col-sm-8">Active</dd>
                </dl>
              </div> */}
          </div>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body" style={{ paddingTop: "0px" }}>
          <div className="row">
            <div className="col-12" style={{ paddingRight: 0, paddingLeft: 0 }}>
              <div className="nav nav-tabs nav-fill" id="myTab" role="tablist">
                <a
                  className="nav-item nav-link active"
                  id="case-detail-tab"
                  data-toggle="tab"
                  href="#case-detail"
                  role="tab"
                  aria-controls="case-detail"
                  aria-selected="true"
                >
                  Case Details
                </a>

                <a
                  className="nav-item nav-link"
                  id="case-persons-tab"
                  data-toggle="tab"
                  href="#case-persons"
                  role="tab"
                  aria-controls="case-persons"
                  aria-selected="false"
                >
                  Case Persons
                </a>

                <a
                  className="nav-item nav-link"
                  id="AddRemoveCASA-tab"
                  data-toggle="tab"
                  href="#AddRemoveCASA"
                  role="tab"
                  aria-controls="AddRemoveCASA"
                  aria-selected="false"
                >
                  Add/Remove CASA
                </a>
                <a
                  className="nav-item nav-link"
                  id="GAL-tab"
                  data-toggle="tab"
                  href="#GAL"
                  role="tab"
                  aria-controls="GAL"
                  aria-selected="false"
                >
                  GAL
                </a>
                <a
                  className="nav-item nav-link"
                  id="Intake-Detail-tab"
                  data-toggle="tab"
                  href="#Intake-Detail"
                  role="tab"
                  aria-controls="Intake-Detail"
                  aria-selected="false"
                >
                  Intake Detail
                </a>
                <a
                  className="nav-item nav-link"
                  id="Sibling-tab"
                  data-toggle="tab"
                  href="#Sibling"
                  role="tab"
                  aria-controls="Sibling"
                  aria-selected="false"
                >
                  Sibling
                </a>
                <a
                  className="nav-item nav-link"
                  id="Event-tab"
                  data-toggle="tab"
                  href="#Event"
                  role="tab"
                  aria-controls="Event"
                  aria-selected="false"
                >
                  Event
                </a>
                <a
                  className="nav-item nav-link"
                  id="Case-Status-History-tab"
                  data-toggle="tab"
                  href="#Case-Status-History"
                  role="tab"
                  aria-controls="Case-Status-History"
                  aria-selected="false"
                >
                  Case Status History
                </a>
                <a
                  className="nav-item nav-link"
                  id="Casa-History-tab"
                  data-toggle="tab"
                  href="#Casa-History"
                  role="tab"
                  aria-controls="Casa-History"
                  aria-selected="false"
                >
                  CASA History
                </a>
                <a
                  className="nav-item nav-link"
                  id="Case-Notes-tab"
                  data-toggle="tab"
                  href="#Case-Notes"
                  role="tab"
                  aria-controls="Case-Notes"
                  aria-selected="false"
                >
                  Case Notes
                </a>
                <a
                  className="nav-item nav-link"
                  id="Priority-tab"
                  data-toggle="tab"
                  href="#Priority"
                  role="tab"
                  aria-controls="Priority"
                  aria-selected="false"
                >
                  Priority
                </a>
              </div>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane show active"
                  id="case-detail"
                  role="tabpanel"
                  data-toggle="tab"
                  aria-labelledby="case-detail-tab"
                >
                  <div className="">
                    <div className="card-body">
                      <div className="card-deck">
                        <div className="card">
                          <div className="card-header bg-secondary text-white">
                            Child
                          </div>
                          <div className="card-body">
                            <p className="card-text">
                              <dt>Language</dt>
                              <dd>English</dd>
                              <dt>Interpreter needed</dt>
                              <dd>no</dd>
                              <dt>Tribe</dt>
                              <dd>N/A</dd>
                            </p>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header bg-secondary text-white">
                            Case
                          </div>
                          <div className="card-body">
                            <p className="card-text">
                              <dt>Case status</dt>
                              <dd>Active</dd>
                              <dt>Case type</dt>
                              <dd>Drugs</dd>
                              <dt>Active sub status</dt>
                              <dd />
                              <dt>ICWA</dt>
                              <dd>Unknown</dd>
                              <dt>File location</dt>
                              <dd>Seattle</dd>
                            </p>
                          </div>
                        </div>

                        <div className="card">
                          <div className="card-header bg-secondary text-white">
                            CASA
                          </div>
                          <div className="card-body">
                            <dt>CASA name</dt>
                            <dd>Sharon Doak</dd>
                            <dt>Assign date</dt>
                            <dd>01/12/2012</dd>
                            <dt>CS</dt>
                            <dd>Rie Takeuchi</dd>
                            <dt>Assign date</dt>
                            <dd>01/12/2012</dd>
                            <dt>Termination number</dt>
                            <dd>11-1-11111-1</dd>
                            <dt>Exit date</dt>
                            <dd>11/11/1111</dd>
                            <dt>File purge date</dt>
                            <dd>11/11/1111</dd>
                            <dt>DCFS units</dt>
                            <dd>Adoption/BRS</dd>
                          </div>
                        </div>
                      </div>
                      <br />
                      <br />
                      <div className="card-deck">
                        <div className="card">
                          <div className="card-header bg-secondary text-white">
                            Parents
                          </div>
                          <div className="card-body">
                            <dt>Mom Term. date</dt>
                            <dd>06/01/2000</dd>
                            <dt>Mom Dep. Est. Date</dt>
                            <dd>01/01/2000</dd>
                            <dt>Dad Term. date</dt>
                            <dd>06/01/2000</dd>
                            <dt>Dad Dep. Est. Date</dt>
                            <dd>01/01/2000</dd>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header bg-secondary text-white">
                            Notes
                          </div>
                          <div className="card-body">
                            <p>
                              Lorem ipsum dolor sit amet, sanctus voluptatibus
                              mel cu, eu nam enim dicat everti. Ex pri choro
                              nonumes, exerci disputando complectitur mei ut,
                              qui dicat petentium in. Graecis apeirian
                              neglegentur cu his. Per cu alii solum probatus.
                              Quodsi habemus invidunt at his, ullum erant
                              laboramus eu duo.
                            </p>
                            <p>
                              At nec solum error, tantas quodsi vis ex. Mucius
                              albucius legendos his et. Mel in sale bonorum
                              scaevola. An animal labitur tacimates sit, eos
                              veniam fierent deterruisset id, in impetus
                              invenire efficiendi his. Duo velit albucius
                              lobortis no.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane"
                  id="case-persons"
                  role="tabpanel"
                  aria-labelledby="case-persons-tab"
                >
                  <div className="card-body">
                      <table className="table table-responsive-sm table-striped table-bordered table-hover">
                        <thead className="thead-light">
                          <tr>
                            <th scope="col">Role</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Firm/Agency</th>
                            <th scope="col">Email</th>
                            <th scope="col">Fax</th>
                            <th scope="col">Home Phone</th>
                            <th scope="col">Work Phone</th>
                            <th scope="col">Address</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>AGG</td>
                            <td>Mary</td>
                            <td>Li</td>
                            <td>AAG</td>
                            <td>mary@email.com</td>
                            <td>201-222-2222</td>
                            <td />
                            <td>201-222-2222</td>
                            <td />
                          </tr>
                          <tr>
                            <td>Child Attorney</td>
                            <td>Meg</td>
                            <td>While</td>
                            <td>Defenders</td>
                            <td>Meg@email.com</td>
                            <td>201-222-2222</td>
                            <td />
                            <td>201-222-2222</td>
                            <td>111 First Rd</td>
                          </tr>
                          <tr>
                            <td>Social worker</td>
                            <td>Bob</td>
                            <td>Vance</td>
                            <td>DCHS</td>
                            <td>bob@email.com</td>
                            <td>201-222-2222</td>
                            <td />
                            <td>201-222-2222</td>
                            <td />
                          </tr>
                        </tbody>
                      </table>
                      <a
                        className="btn btn-primary float-right"
                        href="/add-person"
                        target="_blank"
                      >
                        Add person
                      </a>
                      <br />
                    </div>
                </div>
                <div
                  className="tab-pane"
                  id="AddRemoveCASA"
                  role="tabpanel"
                  aria-labelledby="AddRemoveCASA-tab"
                >
                  <div className="p-3">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably haven't heard
                      of them accusamus labore sustainable VHS.
                    </div>
                </div>
                <div
                  className="tab-pane"
                  id="GAL"
                  role="tabpanel"
                  aria-labelledby="GAL-tab"
                >
                  <div className="p-3">
                      Quis aute nisi qui amet cillum et ut. Adipisicing exercitation consectetur adipisicing ex. Proident anim excepteur id non sunt nulla pariatur ex nostrud consectetur proident culpa. Fugiat sunt officia est cupidatat eiusmod sunt exercitation velit duis dolore. Eiusmod enim velit elit eu ut in. Nostrud duis Lorem labore sit cillum laborum do non Lorem et est qui deserunt cillum. Sunt nostrud esse pariatur laboris sint excepteur ut ipsum do eiusmod.
                    </div>
                </div>
                <div
                  className="tab-pane"
                  id="Intake-Detail"
                  role="tabpanel"
                  aria-labelledby="Intake-Detail-tab"
                >
                  <div className="p-3">
                      Nostrud ipsum exercitation dolor nisi nulla reprehenderit eu velit in pariatur esse. Mollit mollit dolore anim in esse aute irure proident irure eiusmod. Veniam in voluptate cillum adipisicing fugiat incididunt anim cupidatat minim tempor ut. Laborum consectetur magna minim tempor culpa incididunt ut ut. Irure deserunt officia eu do eiusmod non velit eu ut nisi esse id mollit reprehenderit.
                    </div>
                </div>
                <div
                  className="tab-pane"
                  id="Sibling"
                  role="tabpanel"
                  aria-labelledby="Sibling-tab"
                >
                  <div className="p-3">
                     Dolor occaecat tempor ea nulla reprehenderit enim elit occaecat aliqua nisi id do incididunt nostrud. Dolore esse quis veniam in labore do. Id sit et sit incididunt nostrud reprehenderit reprehenderit cillum. Est cillum fugiat mollit aute ipsum dolore proident. Esse id sunt anim est irure aute veniam Lorem ex enim ad.
                    </div>
                </div>
                <div
                  className="tab-pane"
                  id="Event"
                  role="tabpanel"
                  aria-labelledby="Event-tab"
                >
                  <div className="p-3">
                      Sit aliquip quis ad exercitation adipisicing consectetur Lorem consectetur eiusmod commodo ipsum id cillum enim. Nisi irure excepteur mollit quis veniam minim dolore ea. Mollit in voluptate occaecat nulla velit laborum voluptate. Incididunt dolore laborum exercitation ipsum quis non commodo in id. Culpa labore enim aliquip velit eiusmod eiusmod consequat non esse est nulla sint duis.
                    </div>
                </div>
                <div
                  className="tab-pane"
                  id="Case-Status-History"
                  role="tabpanel"
                  aria-labelledby="Case-Status-History-tab"
                >
                  <div className="p-3">
                      Sunt officia ea velit officia excepteur nisi consequat adipisicing. Dolor est anim esse sint pariatur commodo cupidatat mollit. Adipisicing amet id veniam aliqua anim cupidatat velit. Qui do eu exercitation est ut excepteur est proident amet in cupidatat deserunt minim.
                    </div>
                </div>
                <div
                  className="tab-pane"
                  id="Casa-History"
                  role="tabpanel"
                  aria-labelledby="Casa-History-tab"
                >
                  <div className="p-3">
                     Anim ea do sunt incididunt nostrud sint minim dolor. Sunt velit velit laboris ex aliquip ut Lorem deserunt quis elit labore occaecat voluptate ad. Velit consequat qui nostrud ad adipisicing reprehenderit ipsum occaecat officia sunt occaecat cillum. In duis veniam magna culpa quis proident aliqua. Qui incididunt aute consectetur elit amet.
                    </div>
                </div>
                <div
                  className="tab-pane"
                  id="Case-Notes"
                  role="tabpanel"
                  aria-labelledby="Case-Notes-tab"
                >
                  <div className="p-3">
                      Mollit consectetur anim labore proident Lorem anim voluptate quis esse consequat cillum. Deserunt elit mollit aliqua fugiat enim. Ullamco ea nulla cillum exercitation exercitation. Aliquip laborum voluptate culpa excepteur aliqua cupidatat amet eiusmod non. Duis officia reprehenderit laborum sint quis sit proident labore duis minim sunt.
                    </div>
                </div>
                <div
                  className="tab-pane"
                  id="Priority"
                  role="tabpanel"
                  aria-labelledby="Priority-tab"
                >
                  <div className="p-3">
                      Lorem adipisicing quis incididunt fugiat et irure ad velit nulla est eiusmod commodo occaecat quis. Elit ad irure aute exercitation velit exercitation excepteur culpa ad. Deserunt et labore nostrud in proident laborum id adipisicing ullamco.
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
  );
};

export default Tabs;
