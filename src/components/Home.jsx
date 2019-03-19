import React, { Component } from 'react'

// Components
import Preloader from './Preloader';
import Header from "./Header";
import EmailSub from "./EmailSub";
import Footer from "./Footer";

export class Home extends Component {
  render() {
    return (
    <div>
        <Preloader />
        <Header />
        <EmailSub />
        <Footer />
      </div>
    );
  }
}

export default Home;
