import React from "react";
import './error.css'
const error = () => {
  return (
    <>
      <div id="notfound" className="container-fluid">
        <div className="row mx-auto">PAge not found 404</div>
        <div className="row mx-auto">GO to the home page</div>
        <div className="row mx-auto">
            <nav className="one">
              <ul className="two">
                <li className='three'>
                <a href="/" className="four">home
                    </a> 
                  <span className="five"></span>
                </li>
              </ul>
            </nav>
        </div>
      </div>
    </>
  );
};

export default error;
