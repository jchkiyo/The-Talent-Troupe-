import { React, useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./myplanner.css";
import Pic1 from "../../../assets/retirementplanpic.png";
import Pic2 from "../../../assets/bigpurchasepic.png";
import { useLocation } from "react-router-dom";
export default function MyPlanners() {

    // This two useStates retirementPlans, bigPurchasePlans will be data pulled from API in the future

    const [retirementPlans] = useState(
        [
            {planName: "My Retirement Plan", creationDate: "11/2/23", amountToSave: 1000000, monthlyContribution: 2000, comments: "NIL"},
            {planName: "Wife's Retirement Plan", creationDate: "12/2/23", amountToSave: 800000, monthlyContribution: 1400, comments: "Did by husband"}
        ]
    );

    // const [bigPurchasePlans] = useState(
    //     [
    //         {planName: "Punggol HDB Plan", creationDate: "21/2/23", amountToSave: 500000, monthlyContribution: 2000, comments: "Low Floor"},
    //         {planName: "Sengkang HDB Plan", creationDate: "12/3/23", amountToSave: 560000, monthlyContribution: 2000, comments: "High Floor"}
    //     ]
    // );
  let location = useLocation()
  const userID = location.state?.data;
    const [bigPurchasePlans, setBigPurchasePlans] = useState([]);
   console.log(userID);
    useEffect(() => {
        async function fetchPlans() {
            try {
                const response = await fetch('https://localhost:7158/api/BigPurchase/GetUserPlans/' + userID);
                const data = await response.json();
                
                //setRetirementPlans(data.retirementPlans);
                setBigPurchasePlans(data);
                
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

   

            <div className = "flex flex-wrap">
                {retirementPlans.map( (retirementPlans) => {return(

                    <RetirementPlanCard key={retirementPlans.PlanName+retirementPlans.creationDate+"key"} planName={retirementPlans.planName} creationDate={retirementPlans.creationDate} 
                                        amountToSave={retirementPlans.amountToSave} monthlyContribution={retirementPlans.monthlyContribution} comments={retirementPlans.comments}
                    />
                );})}
            </div>

            

            <article className="bigpurchaseplans">
                <h1>Your Big Purchase Plans</h1>
            </article>

            { <div className = "flex flex-wrap">
                {bigPurchasePlans.map( (bigPurchasePlans) => {return(
                    <BigPurchasePlanCard key={bigPurchasePlans.planName+bigPurchasePlans.dateOfCreation+"key"} planName={bigPurchasePlans.planName} creationDate={bigPurchasePlans.creationDate} 
                                        amountToSave={bigPurchasePlans.amountToSave} monthlyContribution={bigPurchasePlans.monthlyContribution} comments={bigPurchasePlans.comments}
                    />
                );})}
            </div> }
            
            


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
                    {props.planName}
                </p>
                <p class="text-slate-500 font-medium">
                    created: {props.creationDate}
                </p>
                </div>
                <RetirementViewPlans 
                    planName={props.planName} creationDate={props.creationDate} 
                    amountToSave={props.amountToSave} monthlyContribution={props.monthlyContribution} comments={props.comments}
                />

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
                    {props.planName}
                </p>
                <p class="text-slate-500 font-medium">
                    created: {props.dateOfCreation}
                </p>
                </div>
                <BigPurchaseViewPlans 
                    planName={props.planName} dateOfCreation={props.dateOfCreation} 
                    amountToSave={props.amountToSave} monthlyContribution={props.monthlyContribution} comments={props.comments}
                />
            </div>
        </div>


        </>

    );
}

function RetirementViewPlans(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <button onClick={handleShow} class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">View</button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>{props.planName} Details</Modal.Title>
            <Modal.Title>Created on {props.creationDate}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Retirement Age: {props.amountToSave}</p>
            <p>Amount to save: {props.amountToSave}</p>
            <p>Monthly Contribution: {props.monthlyContribution}</p>            
            <p>Comments: {props.comments}</p>

          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>

        </Modal>
      </>
    );
  }


  function BigPurchaseViewPlans(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <button onClick={handleShow} class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">View</button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>{props.planName} Details</Modal.Title>
            <Modal.Title>Created on {props.dateOfCreation}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Amount to save: {props.amountToSave}</p>
            <p>Monthly Contribution: {props.monthlyContribution}</p>            
            <p>Comments: {props.comments}</p>

          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>

        </Modal>
      </>
    );
  }
  



