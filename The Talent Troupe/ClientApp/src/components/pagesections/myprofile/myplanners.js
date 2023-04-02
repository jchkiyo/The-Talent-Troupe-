import { React, useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./myplanner.css";
import RetirementPlanCard from "./RetirementPlanCard";
import BigPurchasePlanCard from "./BigPurchasePlanCard";
// import { AuthContext } from '../AuthProvider';
import { useLocation, Link } from "react-router-dom";


export default function MyPlanners() {

    // const [currentUser, setCurrentUser ] = useState(null);
    // setCurrentUser(useContext(AuthContext));

  let location = useLocation()
  const userID = location.state?.data;
  const [retirementPlans, setretirementPlans] = useState([]);
  const [bigPurchasePlans, setbigPurchasePlans] = useState([]);
  console.log("Hello: ", userID);

    useEffect(() => {

        
        // const userID2 = currentUser.uid;
        // console.log(userID2);
        
        async function fetchPlans() {
            try {
                const response = await fetch('https://localhost:7158/api/BigPurchase/GetUserPlans/' + userID);
                const data = await response.json();
                setbigPurchasePlans(data);

                const response2 = await fetch('https://localhost:7158/api/RetirementPlanner/GetUserRetirements/' + userID);
                const retirementplanData = await response2.json();
                setretirementPlans(retirementplanData);
                console.log(retirementplanData);
                console.log("Successfully updated plans with API");
                


            } catch (error) {
                console.error('Error fetching plans:', error);
            }
        }

        fetchPlans();
    }, [userID]);
    
    
    return(
        <div className="body">
            
            <article className="retirementplans">
                <h1>Your Retirement Plans</h1>

            </article>
            {retirementPlans.length===0 && 
              <div className="emptyretirementplans">
                  <h3> You have no retirement plans currently </h3>
                  <Link className="emptyretirementplans-button" to="/retirementplanner2"> Create new Retirement Plan !</Link>

              </div>
            } 
            


            <div className = "flex flex-wrap">
                { retirementPlans.length!==0 &&
                    retirementPlans.map( (retirementPlans) => {return(
                    <RetirementPlanCard key = {retirementPlans.id}
                                        planName = {retirementPlans.planName}
                                        retirementage ={retirementPlans.retirementage} 
                                        amountToSave={retirementPlans.amountToSave} amountToSaveMonth ={retirementPlans.amountToSaveMonth}
                                        yearsOfRetirement = {retirementPlans.yearsOfRetirement} percentageSave = {retirementPlans.percentageSave}
                                        id = {retirementPlans.id}
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









