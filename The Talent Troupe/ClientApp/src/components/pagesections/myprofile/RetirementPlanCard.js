import { React, useState,useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Pic1 from "../../../assets/retirementplanpic.png";


export default function RetirementPlanCard(props) {
    return (    

        <>
        <br></br>
        <div class="m-4 py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={Pic1} alt="props.pic"></img>
            <div class="text-center space-y-2 sm:text-left">
                <RetirementViewPlans 
                    retirementage ={props.retirementage} 
                    amountToSave={props.amountToSave} amountToSaveMonth={props.amountToSaveMonth}
                    yearsOfRetirement = {props.yearsOfRetirement} percentageSave = {props.percentageSave}
                    id = {props.id}

                />

            </div>
        </div>


        </>

    );
}

function RetirementViewPlans(props) {
    const [show, setShow] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);
    const [deleteConfirmation, setdeleteConfirmation] = useState(false);
  
    const handleClose = () =>{
      setShow(false);
      setdeleteConfirmation(false);
  }
    const handleShow = () => setShow(true);

    const beforeDelete = ()=>{
      setdeleteConfirmation(true);
      setShow(false);
    }

    const handleDelete = () =>{

      //Code to delete this plan
      
      const response = fetch('https://localhost:7158/api/RetirementPlanner/RemoveRetire/' + props.id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      mode: 'cors'
    }).then(() => {
      console.log(props.id);
      console.log(response);
      setIsDeleted(true);
    });

   

    }

    useEffect(() => {
      if (isDeleted) {
        window.location.reload();
      }
    }, [isDeleted]);
  
    return (
      <>
        <button onClick={handleShow} class="px-4 py-1 text-sm text-purple-600 font-bold rounded-full border border-purple-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">View</button>
        <button onClick={beforeDelete} class="px-4 py-1 text-sm text-purple-600 font-bold rounded-full border border-purple-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Delete Plan</button>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          

          <Modal.Body>
            <p>Retirement Age: {props.retirementage}</p>
            <p>Amount to save: {props.amountToSave}</p>
            <p>Monthly Contribution: {props.amountToSaveMonth}</p>            
            <p>retirementyears: {props.yearsOfRetirement}</p>
            <p>percentageofincome: {props.percentageSave}</p>

    

          </Modal.Body>

          <Modal.Footer>
            <MyButton onClick={handleClose}  buttonMessage="Close"/>
            <MyButton onClick={handleDelete} buttonMessage="Delete Plan"/>
          </Modal.Footer>

        </Modal>

        
        <Modal
          show={deleteConfirmation}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Are you sure you want to delete?</Modal.Title>

          </Modal.Header>

          <Modal.Body>
            <p> Once deleted it cannot be recovered !</p>

          </Modal.Body>

          <Modal.Footer>
            <MyButton onClick={handleClose} buttonMessage="Cancel"/>
            <MyButton onClick={handleDelete} buttonMessage="Confirm Delete"/>
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