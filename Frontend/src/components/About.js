import React from "react";

const About = () => {
  return (
    <>
      <div className="container">
        <form method="">
          <div className="row">
            <div className="col-md-4">
              <img
                src="data:image/jpeg;base64,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"
                alt="image"
              />
            </div>

            <div className="col-md-6">
              <div className="profile-head">
                <h5>Rehan Mumtaz</h5>
                <h6>Web Developer</h6>
                <p className="profile-rating mt-3 mb-5">
                  RANKINGS :<span>1/10</span>
                </p>
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="#home"
                      id="home-tab"
                      data-toggle="tab"
                      role="tab"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      className="nav-link active"
                      href="#profile"
                      id="profile-tab"
                      data-toggle="tab"
                      role="tab"
                    >
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2">
                <input type="submit" name="btn" value="Edit Profile" />
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div>
                    <p>Work Link</p>
                    <a href="google.com">Google</a>
                    <br />
                    <a href="google.com">Youtube</a>
                    <br />
                    <a href="google.com">Facebok</a>
                    <br />
                  </div>
                </div>
                <div className="col-md-8 pl-5">
                  <div id="myTabContent">
                    <div
                      id="home"
                      className=" tab-pane show active"
                      role="tabpanel"
                      ariea-labelledby="home-tab"
                    >
                      <div className="row text-primary">
                        <div className="col-md-6">
                          <label> User ID</label>
                        </div>
                        <div className="col-md-6">
                          <p >385434798</p>
                        </div>
                      <div className="row text-primary mt-3">
                        <div className="col-md-6">
                          <label> Name</label>
                        </div>
                        <div className="col-md-6">
                          <p >YoYo</p>
                        </div>
                        <div className="col-md-6"></div>
                        <div className="col-md-6"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
