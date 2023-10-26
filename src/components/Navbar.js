import React from 'react'
import '../App.css'
import logo from '../images/logo.png'

const Navbar = ({search, setSearch, handleSubmit}) => {

    return (
        <nav id='navbar' className="navbar my-1  navbar-dark"  >
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <a href="/" className="navbar-brand" >
                    <img src={logo} width="180" alt="Icon" />
                </a>

                <div className='d-none d-md-flex d-flex justify-content-end w-50'>
                <form  className="w-50 mx-1" onSubmit={handleSubmit}>  
                 <input value={search} onChange={(e)=>setSearch(e.target.value)} type="search" name="search" placeholder='Search city..' autoComplete='off' data-search-field style={{ border: 'none', color: 'white', background:'hsla(0, 0%, 100%, 0.18)' }} className=' mx-1  form-control m-0 px-3 py-2 rounded-4' />
                 </form>  <button data-search-toggler className='text-light mx-1 rounded-4 px-3 py-1' style={{ fontSize: '0.9rem', border: 'none', background:'hsla(0, 0%, 100%, 0.18)'  }}>
                        <i className="fa-solid fa-location-crosshairs" style={{ padding: '0 10px', color: 'white', fontSize: 'medium' }}></i>
                        Current Location</button>

                </div>

                <div className='d-md-none d-flex justify-content-end'>
                    <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" style={{ background: 'none' }}> <i className="fas fa-search icon" style={{ color: 'white', fontSize: 'medium' }}></i></button>
                    <i className="fa-solid fa-location-crosshairs icon" style={{ color: 'white', fontSize: 'medium' }}></i>
                </div>

                {/* offCanvas */}

                <div  className="offcanvas offcanvas-end " tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header border-bottom">                       
                        <i type="button" data-bs-dismiss="offcanvas" aria-label="Close" className="fa-solid fa-arrow-left icon" style={{ color: 'white', fontSize: 'medium' }}></i>
                      <form  className="w-100" onSubmit={handleSubmit}> <input value={search} onChange={(e)=>setSearch(e.target.value)} type="search" name="search" placeholder='Search city..' autoComplete='off' data-search-field style={{ border: 'none', color: '#B9B6BF', background:'hsla(0, 0%, 100%, 0.08)' }} className=' mx-1 w-100 form-control m-0 px-3 py-2 rounded-4' />
                      </form> 
                    </div>
                    <div className="offcanvas-body">
                        <div className='d-flex align-items-center' >
                        <i className="fa-solid fa-location-dot" style={{ color: 'white', fontSize: 'medium' }}></i>
                        <div className='mx-2' style={{fontSize:'10px'}}>
                            <p style={{fontSize:'12px'}} className='m-0'>London</p>
                            <p style={{color:'#7B7980'}} className='m-0'>State of London, GB</p>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar