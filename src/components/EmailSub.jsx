import React, { Component } from 'react';
import {
    Container,
    Row,
    Form, 
    FormGroup, 
    Label, 
    Input, 
    FormText,
    Button
} from 'reactstrap';

export class EmailSub extends Component {
  render() {
    return (
      <div className="EmailSub">
          <Container>
              <Row>
                  <div className="col-md-5">
                    <h4 className="bold">Your support means <br/> everything!</h4>
                    <p>Subscribe and never miss a song.</p>
                  </div>
                  <div className="col-md-7">
                    <Form>
                        <FormGroup>
                            <Row className="p-tb-20">
                                <div className="col-md-8"><Input type="email" name="email" placeholder="Email address" className="subs-input" required/></div>
                                <div className="col-md-4"><Button className="btn info">Subscribe</Button></div>
                            </Row>
                        </FormGroup>
                    </Form>
                  </div>
              </Row>
          </Container>
      </div>
    )
  }
}

export default EmailSub;
