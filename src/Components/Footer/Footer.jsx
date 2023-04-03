import React, { Component } from 'react';
import'./footer.css'

class Footer extends Component {
    render() {
        return (
            <>
                <section className='footer'>
                    <div className='container'>

                        <div className='cont_footer'>
                            <div>
                                <h4>Location</h4>  
                                <p>2215 John Daniel Drive</p>
                                <br/> 
                                <p>Clark, MO 65243</p> 
                            </div>
                            <div>
                            <h4>Around the Web</h4> 
                            <div className='social'>
                                <a href=""><i class="fa-brands fa-facebook-f"></i></a>
                                <a href=""><i class="fa-brands fa-instagram"></i></a>                             
                                <a href=""><i class="fa-brands fa-twitter"></i></a>   
                                <a href=""><i class="fa-brands fa-line"></i></a>                             
                            </div>
                            </div>
                            <div>
                            <h4 class="text-uppercase mb-4">About Freelancer</h4>
                            <p class="lead mb-0">Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
                            </div>
                        </div>
                        
                    </div>
                </section>


                <section className='footer_2'>
                    <small>Copyright © Your Website 2021</small>
                </section>
            </>
        );
    }
}

export default Footer;