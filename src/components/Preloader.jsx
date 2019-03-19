import React, { Component } from 'react';
// Preloader
import PreloaderSVG from '../assets/img/logo-preloader.svg';

export class Preloader extends Component {
  render() {
    return (
      <div className="Preloader column-flex-center">
        <img id="preloader" src={PreloaderSVG} alt="Preloader"/>
      </div>
    )
  }
}

export default Preloader;
