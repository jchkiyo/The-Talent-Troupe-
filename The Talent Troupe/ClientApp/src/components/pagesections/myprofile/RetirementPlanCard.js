import { React, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Pic1 from "../../../assets/retirementplanpic.png";

export default function RetirementPlanCard(props) {
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

function RetirementViewPlans(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDelete = () =>{
      setShow(true);

      //Code to delete this plan

    }
  
    return (
      <>
        <button onClick={handleShow} class="px-4 py-1 text-sm text-purple-600 font-bold rounded-full border border-purple-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">View</button>
        <button onClick={handleDelete} class="px-4 py-1 text-sm text-purple-600 font-bold rounded-full border border-purple-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Delete Plan</button>
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

            <MyButton onClick={handleClose} >
              Close
            </MyButton>
          </Modal.Footer>

        </Modal>
      </>
    );
  }

  function MyButton(props) {
    const buttonStyles = {
      backgroundColor: 'red',
      color: 'white',
      borderRadius: '5px',
      padding: '10px 20px'
    };
  
    return (
      <button onClick={props.onClick}style={buttonStyles}>
        Close
      </button>
    );
  }