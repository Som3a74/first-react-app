import React, { Component } from 'react';
import'./PORTFOLIO.css'
import asa from '../img_project/img_project1.svg'

class PORTFOLIO extends Component {
    
    display(){
        let dplay =document.querySelector(".main_layer");
        dplay.classList.remove("d-none");
    }
    display2(){
        let dplay2 =document.querySelector(".main_layer2");
        dplay2.classList.remove("d-none");
    }
    display3(){
        let dplay3 =document.querySelector(".main_layer3");
        dplay3.classList.remove("d-none");
    }
    display4(){
        let dplay4 =document.querySelector(".main_layer4");
        dplay4.classList.remove("d-none");
    }
    display5(){
        let dplay5 =document.querySelector(".main_layer5");
        dplay5.classList.remove("d-none");
    }
    display6(){
        let dplay6 =document.querySelector(".main_layer6");
        dplay6.classList.remove("d-none");
    }
/////////////////////////////////////////////////////////////
    undisplay(){
        let unplay =document.querySelector(".main_layer");
        unplay.classList.toggle("d-none");
    }
    undisplay2(){
        let unplay2 =document.querySelector(".main_layer2");
        unplay2.classList.toggle("d-none");
    }
    undisplay3(){
        let unplay3 =document.querySelector(".main_layer3");
        unplay3.classList.toggle("d-none");
    }
    undisplay4(){
        let unplay4 =document.querySelector(".main_layer4");
        unplay4.classList.toggle("d-none");
    }
    undisplay5(){
        let unplay5 =document.querySelector(".main_layer5");
        unplay5.classList.toggle("d-none");
    }
    undisplay6(){
        let unplay6 =document.querySelector(".main_layer6");
        unplay6.classList.toggle("d-none");
    }

    render() {
        return (
            <>
                <section  className='prof' id='p'>
                    <div class="container d-flex align-items-center flex-column">
                        <div className='img_prof'>
                        <img src={asa} alt="" />
                        </div>
                        <h1 class="head_text_prof text-light text-uppercase">Start React</h1>
                        <div className="prof_star">
                        <i class="fa-solid fa-star fa-2x m-3"></i>
                        </div>
                        <p class="fs-4 text text-light">Graphic Artist - Web Designer - Illustrator</p>
                    </div>
               </section>

               <section>
                    <div className='container cont_layer'>
                        <div className='all_start'>
                            <h2  class="head_text_prof text-light text-uppercase text-dark fw-bolder">PORTFOLIO</h2>
                            <div className="prof_star prof2">
                                <i class="fa-solid fa-star fa-2x m-3 text-dark"></i>
                            </div>
                        </div>




                        <div className='d-flex justify-content-center main_layer d-none'>
                            <div className='layer_img_all w-75 text-center d-flex justify-content-center align-items-center flex-column'>
                                <h2 className='text-dark'>LOG CABIN</h2>
                                <div className="prof_star prof2">
                                    <i class="fa-solid fa-star fa-2x m-3 text-dark"></i>
                                </div>
                                <div className='w-75'>
                                <img className='im_layer' src={require('../img_project/img_project2.png')} alt="" />
                                </div>
                                <p className='w-75'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                <i onClick={this.undisplay} class="fa-solid fa-xmark fa-beat-fade fa-2xl layer_i"></i>
                            </div>    
                        </div>
                        <div className='d-flex justify-content-center main_layer2 d-none'>
                            <div className='layer_img_all w-75 text-center d-flex justify-content-center align-items-center flex-column'>
                                <h2 className='text-dark'>TASTY CAKE</h2>
                                <div className="prof_star prof2">
                                    <i class="fa-solid fa-star fa-2x m-3 text-dark"></i>
                                </div>
                                <div className='w-75'>
                                <img className='im_layer' src={require('../img_project/img_project3.png')} alt="" />
                                </div>
                                <p className='w-75'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                <i onClick={this.undisplay2} class="fa-solid fa-xmark fa-beat-fade fa-2xl layer_i"></i>
                            </div>    
                        </div>
                        <div className='d-flex justify-content-center main_layer3 d-none'>
                            <div className='layer_img_all w-75 text-center d-flex justify-content-center align-items-center flex-column'>
                                <h2 className='text-dark'>CIRCUS TENT</h2>
                                <div className="prof_star prof2">
                                    <i class="fa-solid fa-star fa-2x m-3 text-dark"></i>
                                </div>
                                <div className='w-75'>
                                <img className='im_layer' src={require('../img_project/img_project4.png')} alt="" />
                                </div>
                                <p className='w-75'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                <i onClick={this.undisplay3} class="fa-solid fa-xmark fa-beat-fade fa-2xl layer_i"></i>
                            </div>    
                        </div>
                        <div className='d-flex justify-content-center main_layer4 d-none'>
                            <div className='layer_img_all w-75 text-center d-flex justify-content-center align-items-center flex-column'>
                                <h2 className='text-dark'>CONTROLLER</h2>
                                <div className="prof_star prof2">
                                    <i class="fa-solid fa-star fa-2x m-3 text-dark"></i>
                                </div>
                                <div className='w-75'>
                                <img className='im_layer' src={require('../img_project/img_project5.png')} alt="" />
                                </div>
                                <p className='w-75'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                <i onClick={this.undisplay4} class="fa-solid fa-xmark fa-beat-fade fa-2xl layer_i"></i>
                            </div>    
                        </div>
                        <div className='d-flex justify-content-center main_layer5 d-none'>
                            <div className='layer_img_all w-75 text-center d-flex justify-content-center align-items-center flex-column'>
                                <h2 className='text-dark'>LOCKED SAFE</h2>
                                <div className="prof_star prof2">
                                    <i class="fa-solid fa-star fa-2x m-3 text-dark"></i>
                                </div>
                                <div className='w-75'>
                                <img className='im_layer' src={require('../img_project/img_project6.png')} alt="" />
                                </div>
                                <p className='w-75'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                <i onClick={this.undisplay5} class="fa-solid fa-xmark fa-beat-fade fa-2xl layer_i"></i>
                            </div>    
                        </div>
                        <div className='d-flex justify-content-center main_layer6 d-none'>
                            <div className='layer_img_all w-75 text-center d-flex justify-content-center align-items-center flex-column'>
                                <h2 className='text-dark'>SUBMARINE</h2>
                                <div className="prof_star prof2">
                                    <i class="fa-solid fa-star fa-2x m-3 text-dark"></i>
                                </div>
                                <div className='w-75'>
                                <img className='im_layer' src={require('../img_project/img_project7.png')} alt="" />
                                </div>
                                <p className='w-75'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                <i onClick={this.undisplay6} class="fa-solid fa-xmark fa-beat-fade fa-2xl layer_i"></i>
                            </div>    
                        </div>
                        

                        <div className='cont_img row'>
                            <div className='all_img_prof col-md-6 col-lg-4 mb-5'>
                                <img src={require('../img_project/img_project2.png')} alt="" />
                                <div onClick={this.display} className='layer_img'>
                                    <i class="fa-solid fa-plus fa-10x"></i>
                                </div>
                                <div onClick={this.display} className='layer_img'>
                                    <i class="fa-solid fa-plus fa-10x"></i>
                                </div>
                            </div>

                            <div className='all_img_prof col-md-6 col-lg-4 mb-5'>
                                <img src={require('../img_project/img_project3.png')} alt="" />
                                <div onClick={this.display2} className='layer_img'>
                                    <i class="fa-solid fa-plus fa-10x"></i>
                                </div>
                            </div>
                            <div className='all_img_prof col-md-6 col-lg-4 mb-5'>
                                <img src={require('../img_project/img_project4.png')} alt="" />
                                <div onClick={this.display3} className='layer_img'>
                                    <i class="fa-solid fa-plus fa-10x"></i>
                                </div>
                            </div>
                            <div className='all_img_prof col-md-6 col-lg-4 mb-5'>
                                <img src={require('../img_project/img_project5.png')} alt="" />
                                <div onClick={this.display4} className='layer_img'>
                                    <i class="fa-solid fa-plus fa-10x"></i>
                                </div>
                            </div>
                            <div className='all_img_prof col-md-6 col-lg-4 mb-5'>
                                <img src={require('../img_project/img_project6.png')} alt="" />
                                <div onClick={this.display5} className='layer_img'>
                                    <i class="fa-solid fa-plus fa-10x"></i>
                                </div>
                            </div>
                            <div className='all_img_prof col-md-6 col-lg-4 mb-5'>
                                <img src={require('../img_project/img_project7.png')} alt="" />
                                <div onClick={this.display6} className='layer_img'>
                                    <i class="fa-solid fa-plus fa-10x"></i>
                                </div>
                            </div>

                        </div>
                    </div>
               </section>
            </>
        );
    }
}
export default PORTFOLIO;



// let prof =document.querySelector("#p");

// window.onscroll = function(){
//     console.log(this.scrollY);
//     if (this.scrollY >= 800) {
//         prof.classList.add("scrool_active")
//     }else{
//         prof.classList.remove("scrool_active")
//     }
// };

// console.log(prof);

// prof.onclick =function(){
    //     window.scrollTo({
        //         top:0,
        //         behavior: "smooth",
        //     });
        // };
        