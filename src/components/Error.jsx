import React, { Component } from 'react'
import Preloader from './Preloader';

export class Error extends Component {
  render() {
    return (
      <div>
        <Preloader />
        <div className="jumbotron error auto-spacing">
            <h1 className="text-center">404 Error. The page does not exist.</h1>
        </div>
      </div>
    )
  }
}

export default Error;
