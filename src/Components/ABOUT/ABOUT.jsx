import React, { Component } from 'react';
import './ABOUT.css'
class ABOUT extends Component {
    
    render() {
        return (
            <>
            <section className='about'>
                <div className='container d-flex justify-content-center align-items-center flex-column'>
                <h1 class="head_text_prof text-light text-uppercase">Start React</h1>    
                <div className="prof_star">
                    <i class="fa-solid fa-star fa-2x m-3"></i>
                </div>

                <div class="row justify-content-center">
                    <div class="col-lg-4 ml-auto"><p class="lead">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
                    <div class="col-lg-4 mr-auto"><p class="lead">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p></div>
                </div>

                </div>
            </section>
            </>
        );
    }
}

export default ABOUT;