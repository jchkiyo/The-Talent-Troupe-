
import './retirementplanner2.css';
import old from "../../assets/old.png";
import React, { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Button from 'react-bootstrap/Button';




export default function Retirementplanner2() {

    const radiovalues = [2300,2900,5200];

    const [data,setData] = useState(0)
    const [data2,setData2] = useState(0)
    const [data3,setData3] = useState(0)
    const [radioValue, setRadioValue] = useState(0);
    const [income, setIncome] = useState(0);

    const click = () =>{
        alert(income)
    }
    const radioclick = () =>{
        alert(radioValue)
    }
    const radiochange = event =>{
        const newvalue = event.target.value
        setRadioValue(newvalue)
    }

    const change = event =>{
        const newvalue = event.target.value
        setIncome(newvalue)
    }


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
                <h1 class = "h1">How much income are you saving per month?</h1>
                <input onChange = {change} type="text" />
                <br></br>
                <Button as="input" variant="success" type="submit" value="Submit" onClick = {click} />{' '}

                <h1 class = "h1">What is your desired retirement lifestyle?</h1>
                <br></br>
                <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                    <ToggleButton id="tbg-radio-1" value={radiovalues[0]} onChange= {radiochange}>
                        Modest - 2,300
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-2" value={radiovalues[1]} onChange= {radiochange}>
                        Comfortable - 2,900
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={radiovalues[2]} onChange= {radiochange}>
                        Premier - 5,200
                    </ToggleButton>
                </ToggleButtonGroup>
                <br></br>
                <Button as="input" variant="success" type="submit" value="Submit" onClick = {radioclick} />{' '}
                <br></br>
                <Button size="lg" id = "button">
                  Calculate
                </Button>{' '}
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
