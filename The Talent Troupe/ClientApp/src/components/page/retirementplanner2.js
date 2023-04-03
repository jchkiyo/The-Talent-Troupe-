import "./retirementplanner2.css";
import old from "../../assets/old.png";
import React, { useState, useEffect, useCallback } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Retirementplanner2() {
  //input values
  const radiovalues = [2300, 2900, 5200];
  const [data, setData] = useState(0);
  const [planName, setplanName] = useState("");
  const [data2, setData2] = useState(0);
  const [data3, setData3] = useState(0);
  const [radioValue, setRadioValue] = useState(2300);
  const [income, setIncome] = useState(800);
  const [savings, setSavings] = useState(0);
  const [cpfPrices, setcpfPrices] = useState([]);

  //output values
  const [retirementSum, setRetirementSum] = useState(0);
  const [needsave, setneedsave] = useState(0);
  const [monthlysave, setmonthlysave] = useState(0);
  const [cpfincome, setcpfincome] = useState(0);
  const [cpfpercent, setcpfpercent] = useState(0);

  let location = useLocation();
  const userID = location.state?.data;
  console.log(userID);

  const radiochange = (event) => {
    const newvalue = event.target.value;
    setRadioValue(newvalue);
  };

  const newchange = (event) => {
    const newvalue2 = event.target.value;
    setSavings(newvalue2);
  };

  const [showTextBox, setShowTextBox] = useState(false);
  const [showCustom, setShowCustom] = useState(false);

  const handleShowCustom = () => {
    setShowCustom(true);
  };

  const handleShowTextBox = () => {
    setShowTextBox(true);
    calculateRetirementSum();
    calculateSavingSum();
    calculatecpfincome();
    console.log(userID);
  };

  const handleChange = (event) => {
    const input = event.target.value;
    setIncome(input);
  };

  let timeout;
  const handleBlur = () => {
    clearTimeout(timeout);
    if (income < 800) {
      timeout = setTimeout(() => {
        alert("Please enter a valid income of at least 800");
      }, 500);
    }
  };

  const handleReset = () => {
    setShowTextBox(false);
    setData(0);
    setData2(0);
    setData3(0);
    setRadioValue(2300);
    setIncome(800);
    setplanName("");
    setSavings(2000);
  };
  useEffect(() => {
    fetchCpf();
  }, []);

  const fetchCpf = () => {
    Axios.get(
      `https://data.gov.sg/api/action/datastore_search?resource_id=ca512365-7f3a-4e5c-a7cd-8ea2807931b7&limit=100000`
    ).then((res) => {
      setcpfPrices(res.data.result.records);
    });
  };

  //output functions

  useEffect(() => {
    if (retirementSum !== 0 && savings !== 0) {
      const save = retirementSum - savings;
      if (save < 0) {
        setneedsave(0);
      } else {
        setneedsave(save);
      }
    }
  }, [retirementSum, savings]);

  const calculateRetirementSum = () => {
    const sum = 12 * data3 * radioValue;
    setRetirementSum(sum);
    const save = retirementSum - savings;
    setneedsave(save);
  };
  useEffect(() => {
    if (needsave !== 0 && retirementSum !== 0 && savings !== 0) {
      const monthsave = needsave / ((data2 - data) * 12);
      if (monthsave < 0) {
        setmonthlysave(0);
      } else {
        setmonthlysave(monthsave);
      }
    }
  }, [monthlysave, retirementSum, savings, data2, data, needsave]);

  const calculateSavingSum = () => {
    const monthsave = needsave / ((data2 - data) * 12);
    setmonthlysave(monthsave);
  };
  //In this example, cpfPrices is listed as a dependency for useCallback.
  //This means that getCpf will only be recreated if cpfPrices changes.
  // Otherwise, the memoized version of getCpf will be returned, preventing unnecessary re-renders.
  const getCpf = useCallback(() => {
    // get the last 5 items in the array of objects
    const numOfItems = 5;
    const lastItems = cpfPrices.slice(-numOfItems);
    // console.log(lastItems);
    const dataitems = lastItems.map((lastItems) => [
      lastItems.account_type,
      lastItems.interest_rate,
    ]);
    console.log(dataitems);

    // reverse order of array and find the array with account_type = retirement and interest_rate is not Na
    const targetCpf = dataitems.reverse().find((dataitems) => {
      return dataitems[0] === "Retirement" && !isNaN(dataitems[1]);
    });

    return targetCpf[1];
  }, [cpfPrices]);

  useEffect(() => {
    if (income !== 0 && monthlysave !== 0) {
      const realincome = income * (1 - getCpf() / 100);
      setcpfincome(realincome);
      const percent = (monthlysave / realincome) * 100;
      setcpfpercent(percent);
    }
  }, [income, monthlysave, getCpf]);

  const calculatecpfincome = () => {
    const realincome = income * (1 - getCpf() / 100);
    setcpfincome(realincome);
    const percent = (monthlysave / realincome) * 100;
    setcpfpercent(percent);
  };

  const SendData = ({
    userID,
    planName,
    age,
    amountToSave,
    monthlyContribution,
    retirementyears,
    percent,
  }) => {
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleFormSubmit = (event) => {
      event.preventDefault();
      setIsLoading(true);

      fetch("https://localhost:7158/api/RetirementPlanner/CreateRetirement", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // Request data goes here
          userid: userID,
          planName: planName,
          retirementage: age,
          amountToSave: amountToSave,
          amountToSaveMonth: monthlyContribution,
          yearsOfRetirement: retirementyears,
          percentageSave: percent,
        }),

        mode: "cors",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setTimeout(() => {
            setIsLoading(false);
          }, 3000);
          navigate("/MyProfile", { state: { data: userID } });
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
    };
    return (
      <form onSubmit={handleFormSubmit}>
        <Button id="submitbutton" type="submit">
          {isLoading ? "Loading..." : "Submit"}
        </Button>
      </form>
    );
  };

  console.log("planName: ", planName);

  return (
    <>
      <div className="elderlyBanner">
        <div className="backgroundOverlayFx" />
        <div className="flexWrapperOne">
          <p className="planYourRetirementWithUs">
            Plan your retirement with us
            <br />
          </p>
          <p className="findOutHowMuchYouNeedForYourDesi">
            Find out how much you need for your desired retirement
          </p>
          <br></br>
          <h1 class="h1">Name your plan!</h1>
          <div className="mt-3">
            <input
              type="text"
              id="planName"
              placeholder="Retirement Plan X"
              value={planName}
              required
              minLength={1}
              maxLength={25}
              onChange={(e) => setplanName(e.target.value)}
            ></input>
          </div>
          <br></br>
          <h1 class="h1">How old are you?</h1>
          <input
            id="slider"
            className={data > 50 ? "heigh" : "less"}
            type="range"
            min="18"
            max="100"
            step="1"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
          <p class="number">{data}</p>
          <h1 class="h1">At what age do you plan to retire?</h1>
          <input
            id="slider"
            className={data2 > 50 ? "heigh" : "less"}
            type="range"
            min="18"
            max="100"
            step="1"
            value={data2}
            onChange={(e) => {
              const newValue = parseInt(e.target.value);
              if (newValue <= data) {
                setData2(parseInt(data) + 1);
              } else {
                setData2(newValue);
              }
            }}
          />
          <p class="number">{data2}</p>
          <h1 class="h1">
            How many years of income do you require during retirement?
          </h1>
          <input
            id="slider"
            className={data3 > 50 ? "heigh" : "less"}
            type="range"
            min="0"
            max="100"
            step="1"
            value={data3}
            onChange={(e) => setData3(e.target.value)}
          />
          <p class="number">{data3}</p>
          <h1 class="h1">How much do you have in all your savings?</h1>
          <input onChange={newchange} type="number" placeholder="2000" />
          <br></br>
          <h1 class="h1">How much income do you earn per month? (min {800})</h1>
          <input
            type="number"
            min="800"
            value={income}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="800"
          />

          <br></br>

          <h1 class="h1">What is your desired retirement lifestyle?</h1>
          <br></br>
          <ToggleButtonGroup type="radio" name="options" size="sm">
            <ToggleButton
              id="tbg-radio-1"
              value={radiovalues[0]}
              onChange={radiochange}
              style={{ marginRight: "10px" }}
            >
              Modest - 2,300
            </ToggleButton>
            <ToggleButton
              id="tbg-radio-2"
              value={radiovalues[1]}
              onChange={radiochange}
              style={{ marginRight: "10px" }}
            >
              Comfortable - 2,900
            </ToggleButton>
            <ToggleButton
              id="tbg-radio-3"
              value={radiovalues[2]}
              onChange={radiochange}
              style={{ marginRight: "10px" }}
            >
              Premier - 5,200
            </ToggleButton>
            <ToggleButton
              id="tbg-radio-4"
              value="custom"
              onClick={handleShowCustom}
              style={{ marginRight: "10px" }}
            >
              Custom
            </ToggleButton>
            {showCustom && (
              <div style={{ marginLeft: "10px" }}>
                <input
                  type="number"
                  onChange={radiochange}
                  placeholder="2300"
                />
              </div>
            )}
          </ToggleButtonGroup>
          <br></br>
          <br></br>
          <div className="buttongroup">
            <Button
              size="lg"
              id="button"
              onClick={handleShowTextBox}
              disabled={
                data === 0 ||
                data2 === 0 ||
                data3 === 0 ||
                income < 800 ||
                radioValue <= 0
              }
            >
              Calculate
            </Button>
            <Button size="lg" id="reset" onClick={handleReset}>
              Reset
            </Button>
          </div>
          <br></br>
          {showTextBox && (
            <Container fluid className="input-container">
              <Row className="justify-content-md-center">
                <h1 class="h1">Here are your estimated retirement funds</h1>
              </Row>
              <Row>
                <Col>
                  <h1>
                    Your are currently <p className="retirementdata">{data} </p> years old
                  </h1>
                </Col>
                <Col>
                  <h1>
                    You plan to retire at{" "}
                    <p className="retirementdata">{data2}</p>  years old
                  </h1>
                </Col>
                <Col>
                  <h1>
                    You are planning for{" "}
                    <p className="retirementdata">{data}</p> years of retirement
                  </h1>
                </Col>
              </Row>
              <Row style={{ marginLeft: "30px" }}>
                <h1>
                  The amount you need at your retirement age is{" "}
                  <span className="retirementdata">${retirementSum}</span>
                </h1>
              </Row>
              <br></br>
              <Row style={{ marginLeft: "30px" }}>
                <Col md="auto">
                  <h1>
                    You need to save{" "}
                    <span className="retirementdata">
                      ${needsave < 0 ? 0 : needsave}
                    </span>
                  </h1>
                </Col>
                <Col md="auto">
                  <h1>
                    Every month u have to save{" "}
                    <span className="retirementdata">
                      ${monthlysave < 0 ? 0 : Math.round(monthlysave)}
                    </span>
                  </h1>
                </Col>
              </Row>
              <br></br>
              <Row style={{ marginLeft: "30px" }}>
                <Col md="auto">
                  <h1>
                    Adjusted for cpf your current income is{" "}
                    <span className="retirementdata">${cpfincome}</span>
                  </h1>
                </Col>

                <Col md="auto">
                  <h1>
                    You need to save{" "}
                    <span className="retirementdata">
                      {Math.round(cpfpercent) < 0 ? 0 : Math.round(cpfpercent)}{" "}
                      %
                    </span>{" "}
                    of your income
                  </h1>
                </Col>
              </Row>
              <br></br>

              <SendData
                userID={userID}
                planName={planName}
                age={Math.floor(data)}
                amountToSave={Math.floor(needsave)}
                monthlyContribution={Math.floor(monthlysave)}
                retirementyears={Math.floor(data3)}
                percent={Math.floor(cpfpercent)}
              />
            </Container>
          )}
        </div>
        <div className="image">
          <img alt="" className="vector1" src={old} />
        </div>
      </div>
    </>
  );
}
