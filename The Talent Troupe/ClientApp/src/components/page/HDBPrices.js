import React, { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { NavBtnLink} from "../navigationBar/NavbarElements";
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import 'primeflex/primeflex.css';
import "./HDBPrices.css";

export default function HDBPrices() {
  const [hdbPrices, sethdbPrices] = useState([]);
  const [value, setValue] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [hdbList, sethdbList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchHdbPrice();
  }, []);

  const fetchHdbPrice = () => {
    Axios.get(
      `https://data.gov.sg/api/action/datastore_search?resource_id=f1765b54-a209-4718-8d38-a39237f502b3&limit=1000`
    ).then((res) => {
      sethdbPrices(res.data.result.records);
      sethdbList(res.data.result.records);
    });
  };

  const handleFilter = (e) => {
    e.preventDefault();
    setFilterValue(value);

    const searchList =
      filterValue === ""
        ? hdbPrices
        : hdbPrices.filter((item) =>
            item.town.match(filterValue.toUpperCase())
          );

    sethdbList(searchList);
  };

  return (
    <div className="App">
      <div className="box">
        <div className = "box-left">
      <form
        onSubmit={(e) => {
          handleFilter(e);
        }}
      >
        <input
          type="text"
          classname="form-control"
          placeholder="Search"
          onChange={(e) => setValue(e.target.value)}
        />

        <Button variant="primary" className = "submitButton" type="submit">
          Submit
        </Button>

      
      </form>
      </div>
     
      <div className = "box-push">
      <NavBtnLink to = "/Bigpurchaseplanner" 
      state={{value:selectedProduct}}
      style={{ textDecoration: 'none' }}

      >
        Choose this resale price
      </NavBtnLink>

      </div>

      </div>

      <div style={{ marginTop: "10px" }}>
        <DataTable
          removableSort
          value={hdbList}
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 25, 50]}
          tableStyle={{ minWidth: "50rem" }}
          selectionMode ="single"
          selection={selectedProduct}
          onSelectionChange={(e) => setSelectedProduct(e.value.resale_price)}
        >
          <Column field="town" header="Town" sortable></Column>
          <Column field="flat_type" header="Flat Type" sortable></Column>
          <Column field="block" header="Block" sortable></Column>
          <Column
            field="floor_area_sqm"
            header="Floor Area Sq"
            sortable
          ></Column>
          <Column
            field="lease_commence_date"
            header="Lease Commence Date"
            sortable
          ></Column>
          <Column field="resale_price" header="Resale Price" sortable></Column>
        </DataTable>
      </div>
    </div>
  );
}
