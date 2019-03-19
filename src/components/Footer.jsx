import React, { Component } from 'react';
import {
    Container,
    Row
} from 'reactstrap';

export class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <Container>
            <Row className="rel-10">
                <div className="col-md-6 text-left">
                    <a href="#" className="">Privacy Policy</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="#" className="">Terms &amp; Conditions</a>
                </div>
                <div className="col-md-6 text-right">
                    <p>Designed by Kristijan Popchev. <strong>&copy; Playeefy Music INC.</strong></p>
                </div>
            </Row>
        </Container>
      </div>
    )
  }
}

export default Footer;
