import React from 'react'
import './Viewhdbprices.css'
import Pic1 from '../../assets/hdblogo.png'

export default function ViewHDBPrices () {
	return (
		<div className='ViewHDBPrices_ViewHDBPrices'>
			<div className='Results'>
				<div className='Example5'>
					<img className='Logo_1' src = {Pic1} alt = "Pic1" />
					<div className='TOWN_1'>
						<span className='WOODLANDS_1'>WOODLANDS</span>
					</div>
					<div className='FLATTYPE_1'>
						<span className='FLATType_1'>2-ROOM</span>
					</div>
					<div className='FLOORAREA_1'>
						<span className='FloorArea_1'>1000</span>
					</div>
					<div className='REMAININGLEASE_1'>
						<span className='_87years_1'>87 years</span>
					</div>
					<div className='PRICE_1'>
						<span className='_500000_1'>$500 000</span>
					</div>
				</div>
			</div>
			<div className='FilterBox'>
				<img className='Logo_6' src = {Pic1} alt = "Pic1" />
				<div className='TOWN_6'>
					<span className='Town'>Town</span>
				</div>
				<div className='FLATTYPE_6'>
					<span className='FLATType_6'>FLAT TYpe</span>
				</div>
				<div className='FLOORAREA_6'>
					<span className='FloorArea_6'>FlOOR AREA</span>
				</div>
				<div className='REMAININGLEASE_6'>
					<span className='Remaininglease'>Remaining lease</span>
				</div>
				<div className='PRICE_6'>
					<span className='PRICE_7'>PRICE</span>
				</div>
			</div>
			<div className='Header'>
				<span className='Findyourdesiredhdbaccordingtoyourneeds'>Find your desired hdb according to your needs</span>
				<div className='Filter'>
					<span className='Filter_1'>Filter: </span>
					<div className='FilterTown'>
						<span className='TOWN_7'>TOWN</span>
					</div>
					<div className='FilterType'>
						<span className='FLATTYPE_7'>FLAT TYPE</span>
					</div>
					<div className='FilterArea'>
						<span className='FLOORAREA_7'>floor area</span>
					</div>
					<div className='FilterLease'>
						<span className='REMAININGLEASE_7'>REMAINING LEASE</span>
					</div>
				</div>
			</div>
		
    </div>
	)
}