import React from 'react'
import Footer from '../images/play_store.svg'

const Foot = () => {
    return (
        <div>
            <div className='row text-light py-5 text-center' style={{ backgroundColor: 'black' }} >
                <div className='col-12 col-lg-4 '>
                    <h3 className='mb-4'>Download App</h3>
                    <a href="/"><img src={Footer} alt="" /></a>

                </div>
                <div className='col-12 col-lg-4 mt-3'>
                    <ul className='navbar-nav '>
                        <li className="nav-item">
                            <a className="nav-link rounded-2" href='/'>Home</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link rounded-2" href='/'>About us</a>
                        </li> <li className="nav-item">
                            <a className="nav-link rounded-2" href='/'>Contact us</a>
                        </li> </ul>

                </div>
                <div className='col-12 col-lg-4 '>
  <div className="container p-4 pb-0 d-flex justify-content-around">     
   <a className="btn text-white btn-floating m-1"
        style={{backgroundColor: '#3b5998'}}
        href="#!"
        role="button"
        ><i className="fab fa-facebook-f"></i></a>

      <a className="btn text-white btn-floating m-1"
        style={{backgroundColor: '#55acee'}}
        href="#!"
        role="button"
        ><i className="fab fa-twitter"></i></a>

      <a className="btn text-white btn-floating m-1"
        style=  {{backgroundColor: '#dd4b39'}}
        href="#!"
        role="button"
        ><i className="fab fa-google"></i></a>

      <a
        className="btn text-white btn-floating m-1"
        style=  {{backgroundColor: '#ac2bac'}}
        href="#!"
        role="button"
        ><i className="fab fa-instagram"></i></a>

  </div>
                </div>

            </div>
        </div>
    )
}

export default Foot