import React, { Component } from 'react';
import ABOUT from './Components/ABOUT/ABOUT';
import CONTACT from './Components/CONTACT/CONTACT ';
import PORTFOLIO from './Components/PORTFOLIO/PORTFOLIO';
import Footer from './Components/Footer/Footer';
import { Link } from 'react-router-dom';


window.onscroll = function(){
  let prof1 =document.querySelector("#prp");
  let prof2 =document.querySelector("#pra");
  let prof3 =document.querySelector("#prc");

  if (this.scrollY >= 800 && this.scrollY <= 1450) {
    prof1.classList.add("scrool_active");
    prof2.classList.remove("scrool_active");
    prof3.classList.remove("scrool_active");
  }else if(this.scrollY >= 1500 && this.scrollY <= 2340){
    prof2.classList.add("scrool_active");
    prof1.classList.remove("scrool_active");
    prof3.classList.remove("scrool_active");

  }else if (this.scrollY >= 2350) {
    prof3.classList.add("scrool_active");
    prof1.classList.remove("scrool_active");
    prof2.classList.remove("scrool_active");
  }
};


class App extends Component {
  
  topv(){
    window.scrollTo({
        top:0,
        behavior: "smooth",
    });    
  }
  topa(){
    window.scrollTo({
        top:1650,
        behavior: "smooth",
    });    
  }
  topc(){
    window.scrollTo({
        top:2350,
        behavior: "smooth",
    });    
  }




  render() {
    return (
      <>
        <nav class="navbar navbar-expand-lg bg-secondary  bg-body-tertiary text-uppercase main_nav fixed-top">
          <div class="container">
            <Link class="navbar-brand text-uppercase" to="#">Start React</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            Menu<span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link onClick={this.topv} class="text-light nav-Link active" id='prp' aria-current="/page" htmlFor='Portfolio'  to="/Portfolio">Portfolio</Link>
                </li>
                <li class="nav-item">
                  <Link onClick={this.topa} class="text-light nav-Link" id='pra' to="/About">About</Link>
                </li>
                <li class="nav-item">
                  <Link onClick={this.topc} class="text-light nav-Link" id='prc' to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      


      <PORTFOLIO/>
      <ABOUT/>
      <CONTACT/>
      <Footer/>
      </>
    );
  }
}

export default App;