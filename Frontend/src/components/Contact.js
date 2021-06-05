import React from "react";
import { Icon } from "rsuite";

const Contact = () => {
  return (
    <div className="container mx-auto">
      <div className="d-flex flex-wrap justify-content-around">
        <div className="p-5 mb-2 bg-primary ">NUMBER 1</div>
        <div className="p-5 mb-2 bg-warning ">NUMBER 2</div>
        <div className="p-5 mb-2 bg-primary">NUMBER 3</div>
      </div>

      <div className="rounded-pill" >
        <div className="row">
          <div className="m-3 col-md-5 offset-md-1">
            <div className="d-flex justify-content-start align-items-center rounded-pill" style={{backgroundColor:"whitesmoke"}}>
              <Icon icon="phone-square" size="3x" className="m-5 text-danger" />
              <div className="p-2">
                <div className="h5">Phone</div>
                <div className="text-muted">+92-15478451</div>
              </div>
            </div>
            <div className="d-flex justify-content-start align-items-center rounded-pill" style={{backgroundColor:"whitesmoke"}}>
              <Icon icon="phone-square" size="3x" className="m-5 text-danger" />
              <div className="p-2">
                <div className="h5">Email</div>
                <div className="text-muted">k.company@hotmail.com</div>
              </div>
            </div>
            <div className="d-flex justify-content-start align-items-center rounded-pill" style={{backgroundColor:"whitesmoke"}}>
              <Icon icon="phone-square" size="3x" className="m-5 text-danger" />
              <div className="p-2">
                <div className="h5">Address</div>
                <div className="text-muted">Andhi Gali , Kati Pahari Block #2 Switzerland Pakistan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
