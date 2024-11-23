import React, { useState } from "react";
import { useAddDestinationMutation } from "../api/destinationApi";
const AddDestinaion = () => {
  const [city, setcity] = useState("");
  const [country, setcountry] = useState("");
  const [addDestination, result] = useAddDestinationMutation();
  const handleAddSubmit = (e) => {
    e.preventDefault();
    addDestination({
      id: Math.random() * 100,
      city: city,
      country: country,
      daysNeeded: parseInt(Math.random() * 10) + 1,
    });
    setcity("");
    setcountry("");
  };

  return (
    <div className="p-4 border">
      <form onSubmit={handleAddSubmit}>
        <div className="row col-8 offset-2">
          <h4>Enter a new Destination</h4>
          <div className="col-5 p-1"></div>
          <input
            type="text"
            placeholder="Enter city..."
            className="form-control"
            value={city}
            onChange={(e) => setcity(e.target.value.trim())}
          ></input>
          <div className="col-5 p-0 mt-1">
            <input
              type="text"
              placeholder="Enter country..."
              className="form-control"
              value={country}
              onChange={(e) => setcountry(e.target.value.trim())}
            ></input>
          </div>
          <div className="col-2 p-1">
            <button className="btn btn-success">Add Destination</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddDestinaion;
