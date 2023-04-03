import React, { Component } from 'react';
import './CONTACT.css'
class CONTACT  extends Component {
    render() {
        return (
            <>
            <section className='contact' id='contact'>
                <div className='container'>
                    <div className='all_start'>
                        <h2 class="head_text_prof text-light text-uppercase text-dark fw-bolder">contact me</h2>
                        <div className="prof_star prof2">
                            <i class="fa-solid fa-star fa-2x m-3 text-dark"></i>
                        </div>
                    </div>


                    <div className='row'>
                    <div className='cont_form'>
                        <form className='form'>
                            <div class="mb-3">
                                <input type="text" class="form-control" id="exampleFormControlInput1" required placeholder="Name" ></input>
                            </div>
                            <div class="mb-3">
                                <input type="email" class="form-control" id="exampleFormControlInput1" required placeholder="Email Address" ></input>
                            </div>
                            <div class="mb-3">
                                <input type="tel" class="form-control" id="exampleFormControlInput1"required placeholder="Phone Number" ></input>
                            </div>
                            <div class="mb-3">
                                <textarea class="form-control" id="exampleFormControlTextarea1"required placeholder='Message' rows="3"></textarea>
                            </div>
                            <button type="submit" class="btn btn-success btn-lg">Success</button>
                        </form>
                    </div>

                    </div>

                    
                </div>
            </section>
            </>
        );
    }
}

export default CONTACT ;