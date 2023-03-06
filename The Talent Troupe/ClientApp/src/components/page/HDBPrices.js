import React, { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";

export default function HDBPrices() {
  const [hdbPrices, sethdbPrices] = useState([]);
  //const [column, setColumn] = useState([])

  useEffect(() => {
    fetchHdbPrice();
  }, []);

  const fetchHdbPrice = () => {
    Axios.get(
      "https://data.gov.sg/api/action/datastore_search?resource_id=f1765b54-a209-4718-8d38-a39237f502b3"
    ).then((res) => {
      sethdbPrices(res.data.result.records);
    });
  };

  return (
    <div className="App">
      <h1>HDB Prices</h1>
      <tbody>
        <tr>
          <th>Month</th>
          <th>Town</th>
          <th>Flat type</th>
          <th>Block</th>
          <th>Street name</th>
          <th>Storey Range</th>
          <th>Floor area sqm</th>
          <th>Flat model</th>
          <th>Lease commence date</th>
          <th>Remaining lease</th>
          <th>Resale price</th>
        </tr>
        {hdbPrices.map((item, i) => (
          <tr key={i}>
            <td>{item.month}</td>
            <td>{item.town}</td>
            <td>{item.flat_type}</td>
            <td>{item.block}</td>
            <td>{item.steet_name}</td>
            <td>{item.storey_range}</td>
            <td>{item.floor_area_sqm}</td>
            <td>{item.flat_model}</td>
            <td>{item.lease_commence_date}</td>
            <td>{item.remainin_lease}</td>
            <td>{item.resale_price}</td>
          </tr>
        ))}
      </tbody>
    </div>
  );
}
