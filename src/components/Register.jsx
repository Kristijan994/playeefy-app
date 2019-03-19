import React, { Component } from 'react'
// Preloader
import Preloader from './Preloader';

export class Register extends Component {
  render() {
    return (
      <div>
        <Preloader />
        <div className="jumbotron auto-spacing">
            <h1 className="text-center">Register</h1>
        </div>
      </div>
    )
  }
}

export default Register;
