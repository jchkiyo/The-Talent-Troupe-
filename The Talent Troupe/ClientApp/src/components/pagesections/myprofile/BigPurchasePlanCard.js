import Modal from 'react-bootstrap/Modal';
import { React, useState } from 'react';
import Pic2 from "../../../assets/bigpurchasepic.png";

export default function BigPurchasePlanCard(props) {
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
                    amountToSave={props.amountToSave} monthlyContribution={props.monthlyContribution} comments={props.comments} planID={props.planID}
                />
            </div>
        </div>


        </>

    );
}


  function BigPurchaseViewPlans(props) {
    const [show, setShow] = useState(false);
    const [deleteConfirmation, setdeleteConfirmation] = useState(false);
  
    const handleClose = () =>{
        setShow(false);
        setdeleteConfirmation(false);
    }
    const handleShow = () => setShow(true);

    const handleDelete = () =>{
        setShow(false);
        setdeleteConfirmation(true); 
    }
    //Code to delete plan
    const deletePlan = () =>{
        setdeleteConfirmation(false); // set to true once done
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
            <Modal.Title>Created on {props.dateOfCreation}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Amount to save: {props.amountToSave}</p>
            <p>Monthly Contribution: {props.monthlyContribution}</p>            
            <p>Comments: {props.comments}</p>

          </Modal.Body>

          <Modal.Footer>
            <MyButton onClick={handleDelete} buttonMessage="Delete Plan"/>
            <MyButton onClick={handleClose} buttonMessage="Close"/>
          </Modal.Footer>

        </Modal>

        <Modal
          show={deleteConfirmation}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Are you sure you want to delete:</Modal.Title>
            <Modal.Title> {props.planName} </Modal.Title>

          </Modal.Header>

          <Modal.Body>
            <p> Once deleted it cannot be recovered !</p>

          </Modal.Body>

          <Modal.Footer>
            <MyButton onClick={handleClose} buttonMessage="Cancel"/>
            <MyButton onClick={deletePlan} buttonMessage="Confirm Delete"/>
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
        {props.buttonMessage}
      </button>
    );
  }