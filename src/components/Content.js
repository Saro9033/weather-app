import React, { useState } from 'react'
import Safety from '../images/safety_guideline.png'
import whoWe1 from '../images/who_we_1.webp'
import whoWe2 from '../images/who_we_2.webp'
import C1 from '../images/CCcare_1.webp'
import C2 from '../images/CCcare_2.webp'
import C3 from '../images/CCcare_3.webp'
import C4 from '../images/captain_care_1.webp'
import C5 from '../images/captain_care_2.webp'
import C6 from '../images/captain_care_3.webp'
import Header from './Header'



const Content = () => {
	const [but1, setBut1] = useState(true)


  return (
  <>	
  <Header/>

    <div className='container'>
        <div className='row'>
                <img src={Safety} alt="Images" />
            </div>

            <div className='row my-4'>
                <div className='col-12 col-lg-6 d-flex justify-content-around align-items-center' >
                    <img style={{ boxShadow:'2px 5px 8px 1px #888888',borderTopLeftRadius:'20%', borderTopRightRadius:'20%', borderBottomLeftRadius:'20%'}} width='206px' src={whoWe1} alt="Personimg1" /> 
                    <img  style={{boxShadow:'2px 5px 8px 1px #888888',borderBottomRightRadius:'20%', borderTopRightRadius:'20%', borderBottomLeftRadius:'20%'}} width='190px'  src={whoWe2} alt="Personimg2" />

                     </div>
                <div className='col-12 col-lg-6 my-3' style={ (window.innerWidth < 574) ? {textAlign:'center'} : null}>
                    <h2 style={{fontSize:'40px', color:'black'}}>Know Us Better</h2>
                    <p>We have crossed 10 million happy customers and 100 million rides. Rapido is here to revolutionize intra-city travel as we bring you redefined comfort & convenience with our disruptive service model.</p>
                    <button className='p-2 btn btn-warning rounded-4 shadow text-center'>Read more..</button>
                </div>
            </div>


            <div className="row my-5">
                <h2 className='text-center my-2' style={{fontSize:'40px', color:'black'}}>What's in it for you</h2>
				<div className='mt-3 mb-5 d-flex align-items-center justify-content-center'>
					<button id='btn1'  style={((but1) ? {background:'rgb(255, 193, 7)'} : {background:'none'})}   onClick={()=>setBut1(true)}>Customers</button>
				<button id='btn2' style={ (!but1) ? {background:'rgb(255, 193, 7)'} : {background:'none'} }   onClick={()=>setBut1(false)}>Captains</button>
				</div>
				{but1 && <>
		<div className="col-12 col-lg-4 mb-3">
			<div className="rounded-4 d-flex flex-column align-items-center justify-content-center" >
				<img className="rounded-4 card-img-top" style={{width:'100px'}} src={C1} alt="image1"/>
				<div className="card-body text-center">
					<h3 className="card-title">Doorstep Pick-Up</h3>
					<p className="card-text mt-3">We will pick you up from where you are and drop you exactly where you need to be. </p>
				</div>
			</div>
		</div>

		<div className="col-12 col-lg-4 mb-3">
			<div className=" rounded-4 d-flex flex-column align-items-center justify-content-center" >
				<img className="card-img-top" style={{width:'100px'}} src={C2} alt="image2"/>
				<div className="card-body text-center">
					<h3 className="card-title">Affordability</h3>
					<p className="card-text  mt-3">No more latent prices and shocked reactions after seeing the final ride cost. We're here with the most affordable rides for all. </p>
				</div>
			</div>
		</div>

		<div className="col-12 col-lg-4 mb-3">
			<div className=" rounded-4 d-flex flex-column align-items-center justify-content-center" >
				<img className="rounded-4 card-img-top" style={{width:'100px'}} src={C3} alt="image3"/>
				<div className="card-body text-center">
					<h3 className="card-title">Quick Ride</h3>
					<p className="card-text  mt-3">Trend setters of smart commute be it traffic or rush hours.</p>
				</div>
			</div>
		</div>
		</>}
		{!but1 && <>
		<div className="col-12  col-lg-4 mb-3">
			<div className=" rounded-4 d-flex flex-column align-items-center justify-content-center" >
				<img className="rounded-4 card-img-top " style={{width:'100px'}} src={C4} alt="image4"/>
				<div className="card-body text-center">
					<h3 className="card-title">Zero Pressure Rides</h3>
					<p className="card-text  mt-3">Gives a Captain more room in a day without hampering their daily activities. </p>
				</div>
			</div>
		</div>

		<div className="col-12 col-lg-4 mb-3">
			<div className=" rounded-4 d-flex flex-column align-items-center justify-content-center" >
				<img  className="card-img-top"style={{width:'100px'}} src={C5} alt="image5"/>
				<div className="card-body text-center">
					<h3 className="card-title">Redeemable Earnings</h3>
					<p className="card-text px-3   mt-3">Redeems can be transferred from Rapido wallet to your bank account at your convenience. </p>
				</div>
			</div>
		</div>

		<div className="col-12 col-lg-4 mb-3">
			<div className=" rounded-4 d-flex flex-column align-items-center justify-content-center" >
				<img className="rounded-4 card-img-top" style={{width:'100px'}} src={C6} alt="image6"/>
				<div className="card-body text-center">
					<h3 className="card-title">Insured Rides</h3>
					<p className="card-text px-3  mt-3">Accidental coverage and medical benefits covered up to Rs 5.</p>
				</div>
			</div>
		</div>
		</>}
</div>


    </div>  </>
  )
}

export default Content