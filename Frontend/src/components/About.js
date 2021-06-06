import React from "react";

const About = () => {
  return (
    <>
      <div className="container">
        <form method="">
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.insider.com%2F5dc5e5fc79d7571f2e56d124%3Fwidth%3D750%26format%3Djpeg%26auto%3Dwebp&imgrefurl=https%3A%2F%2Fwww.insider.com%2Fdoodle-boy-draws-wall-restaurant-photos-2019-11&tbnid=X3yHqKxBvP7JaM&vet=12ahUKEwim69jg64PxAhUE2xoKHSlCChgQMygRegUIARCIAg..i&docid=x_jTQE3yUbkJ8M&w=750&h=562&q=boy%20doodle&ved=2ahUKEwim69jg64PxAhUE2xoKHSlCChgQMygRegUIARCIAg"
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
                    <a className="nav-link active" href="#home" id="home-tab" data-toggle="tab" role="tab">About</a>
                  </li>
                  <li>
                  <a className="nav-link active" href="#home" id="home-tab" data-toggle="tab" role="tab">Timeline</a></li>
                  
                </ul>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
