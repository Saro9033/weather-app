import React from 'react'
import '../App.css'
import Logo from '../images/logo.svg'


const Navbar = ({openModal, openOutModal}) => {

    return (
        <nav id='navbar' className="navbar navbar-expand-sm px-1 navbar-light"  style={{backgroundColor:'white'}  } >
            <div className="container-fluid"> 
            <a href="/" className="navbar-brand text-info" >
		  <img width='100px' src={Logo} alt="Logo" /> 
	    </a>   
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item px-3">
                            <a className="nav-link " style={(window.innerWidth > 574) ? {backgroundColor:'black', color:'white', borderRadius:'5px'} : null } href='/'>Home</a>
                        </li>
                        <li className="nav-item  px-3">
                            <a className="nav-link rounded-2" href='/'>About</a>
                        </li>
                        <li className="nav-item  px-3">
                            <button onClick={openOutModal} className="nav-link btn btn-dark rounded-2" >Sign In</button>
                        </li>
                        <li className="nav-item  px-3">
                            <button onClick={openModal} className="nav-link btn btn-dark rounded-2" >Sign Up</button>
                        </li>            
                    </ul>
                </div>               
            </div>
        </nav>
    )
}

export default Navbar