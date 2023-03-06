import React, { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { InputText } from "primereact/inputtext";
import { FilterMatchMode } from "primereact/api";

export default function HDBPrices() {
  const [hdbPrices, sethdbPrices] = useState([]);
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  useEffect(() => {
    fetchHdbPrice();
  }, []);

  const fetchHdbPrice = () => {
    Axios.get(
      "https://data.gov.sg/api/action/datastore_search?resource_id=f1765b54-a209-4718-8d38-a39237f502b3&limit=1000"
    ).then((res) => {
      sethdbPrices(res.data.result.records);
    });
  };

  return (
    <div className="App">
      <InputText
        onInput={(e) =>
          setFilters({
            global: {
              value: e.target.value,
              matchMode: FilterMatchMode.CONTAINS,
            },
          })
        }
      />

      <DataTable
        value={hdbPrices}
        tableStyle={{ minWidth: "50rem" }}
        sortMode="multiple"
        filter={filters}
      >
        <Column
          field="town"
          header="Town"
          sortable
          style={{ width: "25%" }}
        ></Column>
        <Column
          field="flat_type"
          header="Flat Type"
          sortable
          style={{ width: "25%" }}
        ></Column>
        <Column
          field="floor_area_sqm"
          header="Floor Area"
          sortable
          style={{ width: "25%" }}
        ></Column>
        <Column
          field="lease_commence_date"
          header="Lease Commence Date"
          sortable
          style={{ width: "25%" }}
        ></Column>
        <Column
          field="resale_price"
          header="Resale Price"
          sortable
          style={{ width: "25%" }}
        ></Column>
      </DataTable>
    </div>
  );
}
