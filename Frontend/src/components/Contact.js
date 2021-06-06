import React from "react";
import { Icon } from "rsuite";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./Contact.css";
const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="d-flex flex-wrap justify-content-around">
          <div className="p-5 mb-2 bg-primary ">NUMBER 1</div>
          <div className="p-5 mb-2 bg-warning ">NUMBER 2</div>
          <div className="p-5 mb-2 bg-primary">NUMBER 3</div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex flex-wrap justify-content-between mb-2">
              <div
                className="cont_height d-flex justify-content-start align-items-center rounded"
                style={{ backgroundColor: "whitesmoke" }}
              >
                <Icon
                  icon="phone-square"
                  size="2x"
                  className="ml-3 text-danger"
                />
                <div className="p-3">
                  <div className="font-weight-bolder font">Phone</div>
                  <div className="text-muted font_sub">+92-15478451</div>
                </div>
              </div>
              <div
                className="cont_height d-flex justify-content-start align-items-center rounded"
                style={{ backgroundColor: "whitesmoke" }}
              >
                <Icon
                  icon="phone-square"
                  size="2x"
                  className="ml-3 text-danger"
                />
                <div className="p-3">
                  <div className="font-weight-bolder font">Email</div>
                  <div className="text-muted font_sub">
                    k.global@hotmail.com
                  </div>
                </div>
              </div>
              <div
                className="cont_height d-flex justify-content-start align-items-center rounded"
                style={{ backgroundColor: "whitesmoke" }}
              >
                <Icon
                  icon="phone-square"
                  size="2x"
                  className="ml-3 text-danger"
                />
                <div className="p-3">
                  <div className="font-weight-bolder font">Address</div>
                  <div className="text-muted font_sub">
                    Andhi gali , Lalukhet Block #1 Switzerland, Pakistan
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* // /* form */}
      <div className="container">
        <div>
          <div className="title outer mt-3 p-4 font-weight-bolder">
            My Contact
            <div className="cont">
              <Form>
                <Row>
                  <Col>
                    <Form.Control
                      placeholder="First name"
                      id="contact_form_name"
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      type="email"
                      placeholder="Last name"
                      id="contact_form_email"
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      type="number"
                      placeholder="Last name"
                      id="contact_form_phone"
                    />
                  </Col>
                </Row>
                <div className="row">
                  <div className="col-12 pt-3">
                    {/* <label for="exampleFormControlTextarea1" className>Example textarea</label> */}
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Your Message"
                    ></textarea>
                    <Button className="but font-weight-bolder" type="submit">
                      Submit
                    </Button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
