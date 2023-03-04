import React from 'react'
import './Bigpurchaseplanner.css'
import Pic1 from '../../assets/hdb.jpg'
import Pic2 from '../../assets/carpic.jpeg'
import {Link} from 'react-router-dom'


export default function BigPurchasePlanner () {
	return (
		<div className='BigPurchasePlanner_BigPurchasePlanner'>

			<Link to='/viewhdbprices'>
				<div className='OtherBigPurchases'>
					<img className='Rectangle1' src = {Pic1} alt="Pic1" />
					<span className='BuyingHDB'>Buying HDB</span>
				</div>

			</Link>
			<div className='BuyingHDB_1'>
				<img className='Rectangle2' src = {Pic2} alt="Pic2" />
				<span className='OtherBigPurchases_1'>Other Big Purchases</span>
			</div>

		</div>
	)
}