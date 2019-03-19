import React, { Component } from 'react';
import {
    Container,
    Row,
    Button
} from 'reactstrap';
// import Background from '../assets/img/playeefy-bg.svg';

// var headerStyle = {
//   width: "100%",
//   height: "100vh",
//   backgroundImage: `url(${Background})`,
//   backgroundPosition: '0 0',
//   backgroundSize: '100%',
//   backgroundRepeat: 'no-repeat'
// };

export class Header extends Component {
  render() {
    return (
      <div className="Header column-flex-center">
        <h1 className="text-center size-35 bold txt-shadow">
          Playeefy is a music streaming website <br/> designed & developed with love.
        </h1>
        <p className="text-center light mt-1">Don't hesitate to create an account and feel free to use our <br/> free music service world wide!</p>
        <Button color="danger" className="btn danger">Create an Account</Button>
      </div>
    )
  }
}

export default Header;
