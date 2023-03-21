import { useState } from "react";
import { useLocation } from "react-router-dom";
// import Axios from "axios";
import "./BigPurchasePlanner.css";

// const style = {
//     form: `h-14 w-full max-w-[40%] flex text-xl flex bottom-0`,
//     button: `w-[20%] bg-green-500`,
//   };

export default function PlannerForm(props) {

  const [PlanName, setPlanName] = useState("");
  const [AmountToSave, setAmountToSave] = useState("");
  const [TimeToSave, setTimeToSave] = useState("");
  const [MonthlyContribution, setMonthlyContribution] = useState(1);
  const [creationDate, setcreationDate] = useState("");
  const [comments, setComments] = useState("");
  

  let location = useLocation()
  const userID = location.state?.data;

  // useEffect(()=> {
  //   setAmountToSave(() =>{
  //     if (location.state!=null)
  //       return location.state.value
  //     else return null;
  //   });
  // }, []);
  
  return (
    <>
    <form className="planner-form">
      <div>
        <label>Plan Name</label> <br></br>
        <input
          type="text"
          id="PlanName"
          placeholder=" Car Purchase Plan"
          required
          minLength={2}
          maxLength={50}
          value={PlanName}
          onChange={(e) => setPlanName(e.target.value)}
        ></input>
      </div>

      {/* <div>
        <label>Big Purchase Type</label> <br></br>
        <select
          id="bigpurchasetype"
          value={setPurchaseType}
          onChange={(e) => setPurchaseType(e.target.value)}
        >
          <option>Car Purchase</option>
          <option>HDB Purchase</option>
          <option>Others</option>
        </select>
      </div>
      { PurchaseType==="HDB Purchase" &&
      <div>
      <Link className="action-button" to="/Viewhdbprices">
        View recent HDB prices here!
      </Link>
      </div>
      } */}

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
      
      <div>
        <label>Time to save</label> <br></br>
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

      
    </form>

    <div className="planner-form">
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
      </div>
    </>
  );
}




const SendData = ({ userID, planName, amountToSave, monthlyContribution, creationDate, comments, url }) => {
  
  const handleFormSubmit = (event) => {

    event.preventDefault();
    console.log("Inside SendData, userID: ", userID);

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
      console.log(data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {/* Your form fields here */}
      <button type="submit">Submit</button>
    </form>
  );
};

