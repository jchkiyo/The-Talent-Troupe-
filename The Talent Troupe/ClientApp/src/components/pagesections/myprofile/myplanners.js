import { React, useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./myplanner.css";
import RetirementPlanCard from "./RetirementPlanCard";
import BigPurchasePlanCard from "./BigPurchasePlanCard";

import { useLocation, Link } from "react-router-dom";


export default function MyPlanners() {

    // This two useStates retirementPlans, bigPurchasePlans will be data pulled from API in the future

   /* const [retirementPlans] = useState(
        [
            {planName: "My Retirement Plan", creationDate: "11/2/23", amountToSave: 1000000, monthlyContribution: 2000, comments: "NIL"},
            {planName: "Wife's Retirement Plan", creationDate: "12/2/23", amountToSave: 800000, monthlyContribution: 1400, comments: "Did by husband"}
        ]
    );*/

    // const [bigPurchasePlans] = useState(
    //     [
    //         {planName: "Punggol HDB Plan", creationDate: "21/2/23", amountToSave: 500000, monthlyContribution: 2000, comments: "Low Floor"},
    //         {planName: "Sengkang HDB Plan", creationDate: "12/3/23", amountToSave: 560000, monthlyContribution: 2000, comments: "High Floor"}
    //     ]
    // );

  let location = useLocation()
  const userID = location.state?.data;
  const [retirementPlans, setretirementPlans] = useState([]);
  const [bigPurchasePlans, setbigPurchasePlans] = useState([]);

    useEffect(() => {
        async function fetchPlans() {
            try {
                const response = await fetch('https://localhost:7158/api/BigPurchase/GetUserPlans/' + userID);
                const data = await response.json();
                setbigPurchasePlans(data);

                const response2 = await fetch('https://localhost:7158/api/RetirementPlanner/GetUserRetirements/' + userID);
                const retirementplanData = await response2.json();
                setretirementPlans(retirementplanData);
                console.log(data);
                console.log(retirementplanData);
                console.log("Successfully updated plans with API");
                


            } catch (error) {
                console.error('Error fetching plans:', error);
            }
        }

        fetchPlans();
    }, [userID]);
    

    return(
        <div>
            
            <article className="retirementplans">
                <h1>Your Retirement Plans</h1>

            </article>
            {retirementPlans.length===0 && 
              <div className="emptyretirementplans">
                  <h3> You have no retirement plans currently </h3>
                  <Link className="emptyretirementplans-button" to="/retirementplanner"> Create new Retirement Plan !</Link>

              </div>
            } 
            


            <div className = "flex flex-wrap">
                { retirementPlans.length!==0 &&
                    retirementPlans.map( (retirementPlans) => {return(
                    <RetirementPlanCard key={retirementPlans.PlanName+retirementPlans.creationDate+"key"} planName={retirementPlans.planName} creationDate={retirementPlans.creationDate} 
                                        amountToSave={retirementPlans.amountToSave} monthlyContribution={retirementPlans.monthlyContribution} comments={retirementPlans.comments}
                    />
                );})}
            </div>

        
            <article className="bigpurchaseplans">
                <h1>Your Big Purchase Plans</h1>

            </article>

            {bigPurchasePlans.length===0 &&       
              <div className="emptyretirementplans">
                  <h3> You have no big purchase plans currently </h3>
                  <Link className="emptyretirementplans-button" to="/bigpurchaseplanner"> Create new Big Purchase Plan !</Link>

              </div>
            }
            { <div className = "flex flex-wrap">
                {bigPurchasePlans.map( (bigPurchasePlans) => {return(
                    <BigPurchasePlanCard key={bigPurchasePlans.planName+bigPurchasePlans.comments+"key"} planName={bigPurchasePlans.planName} creationDate={bigPurchasePlans.creationDate} 
                                        amountToSave={bigPurchasePlans.amountToSave} monthlyContribution={bigPurchasePlans.monthlyContribution} comments={bigPurchasePlans.comments}
                                        planID={bigPurchasePlans.id}
                    />
                );})}
            </div> }
            
            


        </div>
        
    );


}









