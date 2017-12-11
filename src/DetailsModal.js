import React from "react";

const DetailsModal = () => {
  return (
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLongTitle">
            Case number 1234
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
          <div className="row">
            <div className="col-sm-6">
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
            <div className="col-sm-6">
              <dl className="row">
                <dt className="col-sm-4">Legal number</dt>
                <dd className="col-sm-8">00-7-00305-4</dd>
                <dt className="col-sm-4">Pending number</dt>
                <dd className="col-sm-8">1111</dd>
                <dt className="col-sm-4">Case number</dt>
                <dd className="col-sm-8">22222</dd>
              </dl>
            </div>
          </div>
          <div className="row">
            <div className="col-12" style={{ paddingRight: 0, paddingLeft: 0 }}>
              <div id="accordion" role="tablist">
                <div className="card">
                  <div className="card-header" role="tab" id="headingDetail">
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
                    className="collapse"
                    role="tabpanel"
                    aria-labelledby="headingDetail"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <div className="card-deck">
                        <div className="card">
                          <div className="card-header bg-secondary text-white">
                            Case
                          </div>
                          <div className="card-body">
                            <p className="card-text">
                              <dt>Case status</dt>
                              <dd>Pending</dd>
                              <dt>Case type</dt>
                              <dd>Drugs</dd>
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
                            <dt>CS</dt>
                            <dd>Rie Takeuchi</dd>
                            <dt>Assign date</dt>
                            <dd>01/12/2012</dd>
                            <dt>Termination number</dt>
                            <dd>11-1-11111-1</dd>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div
                    className="card-header"
                    role="tab"
                    id="headingCasePersons"
                  >
                    <h5 className="mb-0">
                      <a
                        className="collapsed"
                        data-toggle="collapse"
                        href="#collapseCasePersons"
                        aria-expanded="false"
                        aria-controls="collapseCasePersons"
                      >
                        Case Persons
                      </a>
                    </h5>
                  </div>
                  <div
                    id="collapseCasePersons"
                    className="collapse"
                    role="tabpanel"
                    aria-labelledby="headingCasePersons"
                    data-parent="#accordion"
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
                            <td></td>
                            <td>201-222-2222</td>
                            <td></td>
                          </tr>
                          <tr>
                          <td>Child Attorney</td>
                          <td>Meg</td>
                          <td>While</td>
                          <td>Defenders</td>
                          <td>Meg@email.com</td>
                          <td>201-222-2222</td>
                          <td></td>
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
                          <td></td>
                          <td>201-222-2222</td>
                          <td></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" role="tab" id="headingGAL">
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
                </div>
                <div className="card">
                  <div className="card-header" role="tab" id="headingSlibling">
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

export default DetailsModal;
