import { useState } from "react";
import { Link } from "react-router-dom";
import "./PlannerForm.css";


export default function PlannerForm(props) {
  const [PlanName, setPlanName] = useState("");
  const [PlanPurpose, setPlanPurpose] = useState("");
  const [AmountToSave, setAmountToSave] = useState("");
  const [MonthlyContribution, setMonthlyContribution] = useState(1);
  const [date, setDate] = useState("");
  const [comments, setComments] = useState("");






  return (
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

      <div>
        <label>Plan Purpose</label> <br></br>
        <select
          id="planpurpose"
          value={PlanPurpose}
          onChange={(e) => setPlanPurpose(e.target.value)}
        >
          <option>HDB Purchase</option>
          <option>Car Purchase</option>
          <option>Others</option>
        </select>
      </div>
      { PlanPurpose==="HDB Purchase" &&
      <div>
      <Link className="action-button" to="/Viewhdbprices">
        View recent HDB prices here!
      </Link>
      </div>
      }
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
          id="date"
          required
          value={date}

          onChange={ (e) => {
            setDate(e.target.value);
            props.updateTimes(new Date(e.target.value));
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

      <div>
        <br></br>
        {
            PlanName.length>0 &&
            PlanPurpose.length>0 &&
            AmountToSave > 0 &&
            MonthlyContribution > 0 &&
        <Link className="action-button2" to="/confirmation">
          SAVE PLAN
        </Link>
        }
      </div>
    </form>
  );
}
