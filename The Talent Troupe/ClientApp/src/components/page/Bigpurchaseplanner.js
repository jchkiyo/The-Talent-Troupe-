import { useState,useEffect} from "react";
import { useLocation } from "react-router-dom";
import "./BigPurchasePlanner.css";
import {useNavigate} from 'react-router-dom';
// import { checkActionCode } from "firebase/auth";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function BigPurchasePlanner(props) {

  const [PlanName, setPlanName] = useState("");
  const [AmountToSave, setAmountToSave] = useState("");
  const [TimeToSave, setTimeToSave] = useState("");
  const [MonthlyContribution, setMonthlyContribution] = useState(1);
  const [creationDate, setcreationDate] = useState("");
  const [comments, setComments] = useState("");
  const [Calculations, setCalculations] = useState("");
  const [isLoadingButton, setisLoadingButton] = useState(true);
  const [LoadPage, setLoadPage] = useState(true);
  const [LoadFinal, setLoadFinal] = useState(false);
  //const [remainingamount, setRemainingAmount] = useState(0);

  let location = useLocation()
  const userID = location.state?.data;
  
  console.log("Hello ", userID);

  const navigate = useNavigate();
  useEffect(()=> {
    setisLoadingButton(true)
    setAmountToSave(() =>{
      if (location.state!=null)
        return location.state.value
      else return null;
    });
  }, [location.state]);

  const RenderButton = () => {
    if(isLoadingButton){
      return <button className="btn btn-primary" onClick={navigateTohdbprices}>ViewhdbPrices</button>
    }
  }
  
  const navigateTohdbprices = () =>{
    navigate('/Viewhdbprices');
  }

  const onHandleSubmit=() => {
    //e.preventDefault
    setLoadPage(false)
    setLoadFinal(true)
    doCalculations()
  }

  const onHandleRetry=() => {
    //e.preventDefault
    setLoadPage(true)
    setLoadFinal(false)
  }

  const doCalculations = () =>{
    let total_amount
    total_amount = parseInt(TimeToSave,10) * parseInt(MonthlyContribution,10);
    total_amount = total_amount.toString()
    setCalculations(total_amount)
  }

  const render_success = () =>{

    let remainingamount =  parseInt(Calculations,10) - parseInt(AmountToSave,10)
    console.log(remainingamount)
    let amountTopUp

    // Good Plan
    if(remainingamount>= 0){
      return(

        <div className="d-flex justify-content-center">
      <Card style={{ width: '18rem',
                      }}>
        <Card.Img variant="top" src={require("../../assets/happy_man.jpg")} />
        <Card.Body>
          <Card.Title>Congratulations!</Card.Title>
          <Card.Text>
            You are able to hit your target of
             {AmountToSave}  at your current monthly contribution
          </Card.Text>
          <Button variant="primary active"onClick={onHandleRetry}>Edit Plan</Button>
          <SendData
            userID={userID}
            planName = {PlanName}
            amountToSave = {AmountToSave}
            monthlyContribution = {MonthlyContribution}
            creationDate = {creationDate}
            comments = {comments}
            TimeToSave = {TimeToSave}
          />


        </Card.Body>
      </Card>

        </div>
      )
    }

  // Bad Plan
  if(remainingamount <0){
      amountTopUp = -(remainingamount) / parseInt(TimeToSave,10)
      return(

        <div className="d-flex justify-content-center">
            <Card style={{ width: '18rem',
                            }}>
              <Card.Img variant="top" src={require("../../assets/frustrated_man.jpg")} />
              <Card.Body>
                <Card.Title>Sorry!</Card.Title>
                <Card.Text>
                  You are required to top up {amountTopUp} to your monthly contribution
                  to hit your target of {AmountToSave}
                </Card.Text>
                <Button variant="primary active"onClick={onHandleRetry}>Retry</Button>
              </Card.Body>
            </Card>

            
        </div>
      )
  }
  }

  
  
  return (
    <div className="body1">
    {(LoadPage)?  

    <form style={{ width: '18rem',
                            }}className="planner-form">
    <div>
      <label>Plan Name</label> <br></br>
      <input
        type="text"
        id="PlanName"
        placeholder=" HDB Purchase Plan"
        required
        minLength={2}
        maxLength={50}
        value={PlanName}
        onChange={(e) => setPlanName(e.target.value)}
      ></input>
    </div>



    <div>
      <label>Amount to save</label> <br></br>
      <input

        type="number"
        id="amounttosave"
        placeholder="100 000"
        value={AmountToSave}
        required
        minLength={1}
        maxLength={25}
        onChange={(e) => setAmountToSave(e.target.value)}
      ></input>
    </div>

    
    {RenderButton()}
    
    <div className = "mt-3">
      <label>Months to Save</label> <br></br>
      <input
        type="text"
        id="timetosave"
        placeholder="100 000"
        value={TimeToSave}
        required
        minLength={1}
        maxLength={25}
        onChange={(e) => setTimeToSave(e.target.value)}
      ></input>
    </div>


    <div>
      <label>Monthly Contribution</label> <br></br>
      <input
        type="number"
        id="monthlycontribution"
        placeholder="5 000"
        value={MonthlyContribution}
        required
        min={1}
        max={100}
        onChange={(e) => setMonthlyContribution(e.target.value)}
      ></input>
    </div>


    

    <div>
      <label>Date Of Creation</label> <br></br>
      <input
        type="date"
        id="creationDate"
        required
        value={creationDate}

        onChange={ (e) => {
          setcreationDate(e.target.value);
        }}

      ></input>
    </div>

    <div>
      <label htmlFor="comments">Notes To Self</label> <br></br>
      <textarea
        id="comments"
        rows={8}
        cols={40}
        placeholder="Additional Comments"
        value={comments}
        onChange={(e) => setComments(e.target.value)}
      ></textarea>
    </div>

    {/* <div className="planner-form">
      <br></br>
      {
          PlanName.length>0 && AmountToSave > 0 && MonthlyContribution !== 1 &&
        <SendData
          userID={userID}
          planName = {PlanName}
          amountToSave = {AmountToSave}
          monthlyContribution = {MonthlyContribution}
          creationDate = {creationDate}
          comments = {comments}
        />
      }
    </div> */}


    
    <div>
    <button className="btn btn-primary" onClick={onHandleSubmit}>Submit !</button>
    </div>



    </form>
   
    : null}

      {(LoadFinal)? render_success() : null }

    </div>
  );
}


const SendData = ({ userID, planName, amountToSave, monthlyContribution, creationDate, comments, TimeToSave }) => {
  const [openModal, setOpenModal] = useState(false);

  <Confirmation 
    open={openModal} 
    onClose={() => setOpenModal(false)}
  />


  
  return (
      <button variant="primary active" onClick={event=>{
            fetch('https://localhost:7158/api/BigPurchase/CreatePlan', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
              },
              body: JSON.stringify({
                // Request data goes here
                userid: userID,
                planName: planName,
                amountToSave: amountToSave,
                monthlyContribution: monthlyContribution,
                dateOfCreation: creationDate,
                comments: comments,
                timeToSave: TimeToSave
              }),
            
              mode: 'cors'
            })
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
            .then(data => {
              
              // <ConfirmSave 
              //   planName = {planName}
              //   amountToSave =  {amountToSave}
              //   monthlyContribution = {monthlyContribution}
              //   dateOfCreation = {creationDate}
              //   comments = {comments}
              //   timeToSave = {TimeToSave}
              // />
            })
            .catch(error => {
              console.error('There was a problem with the fetch operation:', error);
            });

            setOpenModal(true);
            console.log("reached here");
            


      }}>
        Save plan
      </button>
  );
};

function Confirmation ({ open, onClose }){
  if (!open) return null;

  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >

        {/* <img src={nft} alt='/' /> */}
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          <div className='content'>
            <h1>Plan Saved !</h1>
          </div>

          <div className='btnContainer'>

            <button className='btnPrimary'>
              <span className='bold'>YES</span>, I love NFT's
            </button>

            <button className='btnOutline'>
              <span className='bold'>NO</span>, thanks
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

// function ConfirmSave(props) {
//   const [show, setShow] = useState(false);
//   const [deleteConfirmation, setdeleteConfirmation] = useState(false);

//   const handleClose = () =>{
//       setShow(false);
//       setdeleteConfirmation(false);
//   }
//   const handleShow = () => setShow(true);

//   const handleDelete = () =>{
//       setShow(false);
//       setdeleteConfirmation(true); 
      
//   }
//   return (
//     <>
//       <button onClick={handleShow} class="px-4 py-1 text-sm text-purple-600 font-bold rounded-full border border-purple-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">View</button>
//       <button onClick={handleDelete} class="px-4 py-1 text-sm text-purple-600 font-bold rounded-full border border-purple-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Delete Plan</button>

//       <Modal
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title> Plan Saved !</Modal.Title>
//         </Modal.Header>

//         <Modal.Body>
//           <p>Plan Name: {props.planName} </p>
//           <p>Amount to save: {props.amountToSave}</p>
//           <p> Months to Save: {props.timeToSave}</p>
//           <p>Date of Creation: {props.dateOfCreation} </p>
//           <p>Monthly Contribution: {props.monthlyContribution}</p>            
//           <p>Comments: {props.comments}</p>

//         </Modal.Body>

//         <Modal.Footer>
//           <MyButton onClick={handleDelete} buttonMessage="Delete Plan"/>
//           <MyButton onClick={handleClose} buttonMessage="Close"/>
//         </Modal.Footer>

//       </Modal>

//     </>
//   );
// }

// function MyButton(props) {
//   const buttonStyles = {
//     backgroundColor: 'red',
//     color: 'white',
//     borderRadius: '5px',
//     padding: '10px 20px'
//   };

//   return (
//     <button onClick={props.onClick}style={buttonStyles}>
//       {props.buttonMessage}
//     </button>
//   );
// }




