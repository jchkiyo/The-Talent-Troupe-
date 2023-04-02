import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./BigPurchasePlanner.css";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import chatbot from "../../assets/ChatbotBigPurchase.png";
import { AuthProvider, AuthContext } from "../AuthProvider";
import React from "react";

export default function BigPurchasePlanner() {
  return (
    <React.Fragment>
      <AuthProvider>
        <BigPurchasePlanner2 />
      </AuthProvider>
    </React.Fragment>
  );
}

function BigPurchasePlanner2(props) {
  const [userID, setuserID] = useState(0);

  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  setTimeout(() => {
    setuserID(currentUser.uid);
  }, 3000);
  console.log("Hello from LEGEND: ", userID);

  const [PlanName, setPlanName] = useState("");
  const [AmountToSave, setAmountToSave] = useState("");
  const [TimeToSave, setTimeToSave] = useState("");
  const [MonthlyContribution, setMonthlyContribution] = useState(1);
  const [creationDate, setcreationDate] = useState("");
  const [comments, setComments] = useState("");
  const [Calculations, setCalculations] = useState("");
  const [isLoadingButton] = useState(true);
  // const [isLoadingButton, setisLoadingButton] = useState(true);

  const [LoadPage, setLoadPage] = useState(true);
  const [LoadFinal, setLoadFinal] = useState(false);

  const navigate = useNavigate();

  const RenderButton = () => {
    if (isLoadingButton) {
      return (
        <button className="btn btn-primary" onClick={navigateTohdbprices}>
          ViewhdbPrices
        </button>
      );
    }
  };

  const navigateTohdbprices = () => {
    navigate("/Viewhdbprices");
  };

  const onHandleSubmit = () => {
    //e.preventDefault
    setLoadPage(false);
    setLoadFinal(true);
    doCalculations();
  };

  const onHandleRetry = () => {
    //e.preventDefault
    setLoadPage(true);
    setLoadFinal(false);
  };

  const doCalculations = () => {
    let total_amount;
    total_amount = parseInt(TimeToSave, 10) * parseInt(MonthlyContribution, 10);
    total_amount = total_amount.toString();
    setCalculations(total_amount);
  };

  const render_success = () => {
    let remainingamount =
      parseInt(Calculations, 10) - parseInt(AmountToSave, 10);
    console.log(remainingamount);
    let amountTopUp;

    // Good Plan
    if (remainingamount >= 0) {
      return (
        <div className="d-flex justify-content-center">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={require("../../assets/happy_man.jpg")}
            />
            <Card.Body>
              <Card.Title>Congratulations!</Card.Title>
              <Card.Text>
                You are able to hit your target of
                {AmountToSave} at your current monthly contribution
              </Card.Text>
              <Button variant="primary active" onClick={onHandleRetry}>
                Edit Plan
              </Button>
              <SendData
                userID={userID}
                planName={PlanName}
                amountToSave={AmountToSave}
                monthlyContribution={MonthlyContribution}
                creationDate={creationDate}
                comments={comments}
                TimeToSave={TimeToSave}
              />
            </Card.Body>
          </Card>
        </div>
      );
    }

    // Bad Plan
    if (remainingamount < 0) {
      amountTopUp = -remainingamount / parseInt(TimeToSave, 10);
      return (
        <div className="d-flex justify-content-center">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={require("../../assets/frustrated_man.jpg")}
            />
            <Card.Body>
              <Card.Title>Sorry!</Card.Title>
              <Card.Text>
                You are required to top up ${amountTopUp} to your monthly
                contribution to hit your target of ${AmountToSave}
              </Card.Text>
              <Button variant="primary active" onClick={onHandleRetry}>
                Retry
              </Button>
            </Card.Body>
          </Card>
        </div>
      );
    }
  };

  return (
    <div>
      {LoadPage ? (
        <form className="planner-form">
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

          <div className="mt-3">
            <label>Months to Save</label> <br></br>
            <input
              type="text"
              id="timetosave"
              placeholder="10"
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
              onChange={(e) => {
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
          {PlanName !== "" &&
            AmountToSave !== "" &&
            MonthlyContribution > 1 &&
            creationDate !== "" &&
            TimeToSave.length !== "" && (
              <div>
                <button className="btn btn-primary" onClick={onHandleSubmit}>
                  Submit !
                </button>
              </div>
            )}

          <div>
            <Link to="/Viewhdbprices">
              <img
                src={chatbot}
                alt="chatbot"
                style={{
                  position: "absolute",
                  top: "50%",
                  right: 100,
                  transform: "translateY(-50%)",
                  width: "20%",
                  height: "30%",
                }}
              />
            </Link>
          </div>
        </form>
      ) : null}

      {LoadFinal ? render_success() : null}
    </div>
  );
}

const SendData = ({
  userID,
  planName,
  amountToSave,
  monthlyContribution,
  creationDate,
  comments,
  TimeToSave,
}) => {
  const [openModal, setOpenModal] = useState(false);

  <Confirmation open={openModal} onClose={() => setOpenModal(false)} />;

  return (
    <button
      variant="primary active"
      onClick={(event) => {
        fetch("https://localhost:7158/api/BigPurchase/CreatePlan", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            // Request data goes here
            userid: userID,
            planName: planName,
            amountToSave: amountToSave,
            monthlyContribution: monthlyContribution,
            dateOfCreation: creationDate,
            comments: comments,
            timeToSave: TimeToSave,
          }),

          mode: "cors",
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {})
          .catch((error) => {
            console.error(
              "There was a problem with the fetch operation:",
              error
            );
          });

        setOpenModal(true);
        alert("Plan Saved !");
      }}
    >
      Save plan
    </button>
  );
};

function Confirmation({ open, onClose }) {
  if (!open) return null;

  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        {/* <img src={nft} alt='/' /> */}
        <div className="modalRight">
          <p className="closeBtn" onClick={onClose}>
            X
          </p>
          <div className="content">
            <h1>Plan Saved !</h1>
          </div>

          <div className="btnContainer">
            <button className="btnPrimary">
              <span className="bold">YES</span>, I love NFT's
            </button>

            <button className="btnOutline">
              <span className="bold">NO</span>, thanks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
