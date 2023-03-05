
import './retirementplanner2.css';
import old from "../../assets/old.png";
import React, { useState } from 'react';






export default function Retirementplanner2() {
    const [data,setData] = useState(0)
    const [data2,setData2] = useState(0)
    const [data3,setData3] = useState(0)
    return (
      <>
      <div className="elderlyBanner">
        <div className="backgroundOverlayFx" />
            <div className="flexWrapperOne">
                <p className="planYourRetirementWithUs">
                Plan your retirement with us
                <br />
                </p>
                <p className="findOutHowMuchYouNeedForYourDesi">
                Find out how much you need for your desired
                retirement
                </p>
                <h1 class = "h1">How old are you?</h1>
                <input id = "slider" className={data>50?'heigh':'less'} type="range" min="18" max="100" step="1" value={data} onChange={(e)=>setData(e.target.value)} />
                <p class = "number">{data}</p>
                <h1 class = "h1">At what age do you plan to retire?</h1>
                <input id = "slider" className={data2>50?'heigh':'less'} type="range" min="18" max="100" step="1" value={data2} onChange={(e)=>setData2(e.target.value)} />
                <p class = "number">{data2}</p>
                <h1 class = "h1">How many years of income do you require during retirement?</h1>
                <input id = "slider" className={data3>50?'heigh':'less'} type="range" min="18" max="100" step="1" value={data3} onChange={(e)=>setData3(e.target.value)} />
                <p class = "number">{data3}</p>
                <h1 class = "h1">What is your desired retirement lifestyle?</h1>
            </div>
            <img
                alt=""
                className="vector1"
                src= {old}
            />
            
     </div>
      </>
    );
}
