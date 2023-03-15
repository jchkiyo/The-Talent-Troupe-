import React, { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { InputText } from "primereact/inputtext";
import { FilterMatchMode } from "primereact/api";
import {
  MDBBtn,
  MDBBtnGroup,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";

export default function HDBPrices() {
  const [hdbPrices, sethdbPrices] = useState([]);
  const [value, setValue] = useState("");
  const [hdbList, sethdbList] = useState([]);

  useEffect(() => {
    fetchHdbPrice();
  }, [hdbList, hdbPrices]);

  const fetchHdbPrice = () => {
    Axios.get(
      `https://data.gov.sg/api/action/datastore_search?resource_id=f1765b54-a209-4718-8d38-a39237f502b3&limit=1000`
    ).then((res) => {
      sethdbPrices(res.data.result.records);
      sethdbList(res.data.result.records);
    });
  };
  const handleFilter = () => {
    value === ""
      ? sethdbList([...hdbPrices])
      : sethdbList([
          ...hdbPrices.filter((item) => item.town.match(value.toUpperCase())),
        ]);
  };

  console.log(hdbList);
  return (
    <MDBContainer>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        className="d-flex input-group w-auto"
        onSubmit={handleFilter}
      >
        <input
          type="text"
          classname="form-control"
          placeholder="Search"
          onChange={(e) => setValue(e.target.value)}
        />
        <MDBBtn type="submit" color="dark">
          Submit
        </MDBBtn>
      </form>

      <div style={{ marginTop: "100px" }}>
        <MDBRow>
          <MDBCol size="12">
            <MDBTable>
              <MDBTableHead dark>
                <tr>
                  <th scope="col">Index</th>
                  <th scope="col">Town</th>
                  <th scope="col">Flat Type</th>
                  <th scope="col">Block</th>
                  <th scope="col">Floor Area Sq</th>
                  <th scope="col">Lease Commence Date</th>
                  <th scope="col">Item Resale Price</th>
                </tr>
              </MDBTableHead>
              {hdbList.length === 0 ? (
                <MDBTableBody className="align-center mb-0">
                  <tr>
                    <td colSpan={8} className="text-center mb-0">
                      No data found
                    </td>
                  </tr>
                </MDBTableBody>
              ) : (
                hdbList.map((item, index) => (
                  <MDBTableBody key={index}>
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{item.town}</td>
                      <td>{item.flat_type}</td>
                      <td>{item.block}</td>
                      <td>{item.floor_area_sqm}</td>
                      <td>{item.lease_commence_date}</td>
                      <td>{item.resale_price}</td>
                    </tr>
                  </MDBTableBody>
                ))
              )}
            </MDBTable>
          </MDBCol>
        </MDBRow>
      </div>
    </MDBContainer>
  );
}
