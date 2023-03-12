import { React, useState, Link } from 'react';
import "./myplanner.css";
import Pic1 from "../../../assets/retirementplanpic.png";
import Pic2 from "../../../assets/bigpurchasepic.png";

export default function MyPlanners() {

    // This two useStates retirementPlans, bigPurchasePlans will be data pulled from API in the future

    const [retirementPlans, setretirementPlans] = useState(
        [
            {title: "My Retirement Plan", creationDate: "11/2/23"},
            {title: "Wife's Retirement Plan", creationDate: "12/2/23"},
        ]
    );

    const [bigPurchasePlans, setbigPurchasePlans] = useState(
        [
            {title: "Punggol HDB Plan", creationDate: "21/2/23"},
            {title: "Sengkang HDB Plan", creationDate: "12/3/23"}
        ]
    );


    return(
        <div>
            
            <article className="retirementplans">
                <h1>Your Retirement Plans</h1>
            </article>



            <div className = "flex flex-wrap">
                {retirementPlans.map( (retirementPlans) => {return(
                    <RetirementPlanCard key={retirementPlans.name+retirementPlans.creationDate+"key"} title={retirementPlans.title} creationDate={retirementPlans.creationDate} />
                );})}
            </div>

            

            <article className="bigpurchaseplans">
                <h1>Your Big Purchase Plans</h1>
            </article>

            <div className = "flex flex-wrap">
                {bigPurchasePlans.map( (bigPurchasePlans) => {return(
                    <BigPurchasePlanCard key={bigPurchasePlans.name+bigPurchasePlans.creationDate+"key"} title={bigPurchasePlans.title} creationDate={bigPurchasePlans.creationDate} />
                );})}
            </div>
            


        </div>
        
    );


}



function RetirementPlanCard(props) {
    return (    

        <>
        <br></br>
        <div class="m-4 py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={Pic1} alt="props.pic"></img>
            <div class="text-center space-y-2 sm:text-left">
                <div class="space-y-0.5">
                <p class="text-lg text-black font-semibold">
                    {props.title}
                </p>
                <p class="text-slate-500 font-medium">
                    created: {props.creationDate}
                </p>
                </div>
                <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">View</button>
            </div>
        </div>


        </>

    );
}

function BigPurchasePlanCard(props) {
    return (    

        <>
        <br></br>
        <div class="m-4 py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={Pic2} alt="props.pic"></img>
            <div class="text-center space-y-2 sm:text-left">
                <div class="space-y-0.5">
                <p class="text-lg text-black font-semibold">
                    {props.title}
                </p>
                <p class="text-slate-500 font-medium">
                    created: {props.creationDate}
                </p>
                </div>
                <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">View</button>
            </div>
        </div>


        </>

    );
}



