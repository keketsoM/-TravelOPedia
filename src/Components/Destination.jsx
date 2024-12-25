import React, { useState } from "react";
import {
  useDeleteDestinationMutation,
  useUpdateDestinationMutation,
} from "../api/destinationApi";
function Destination({ destination }) {
  const [setDeleteDestination] = useDeleteDestinationMutation();
  const [setUpdateDestination] = useUpdateDestinationMutation();
  const [isUpdating, setIsUpdating] = useState(false);
  const [newCity, setNewCity] = useState("");
  const [newCountry, setNewCountry] = useState("");

  function handleDeleteDestination(id) {
    setDeleteDestination({
      id: id,
    });
  }
  function handleUpdateDestination() {
    let city = "";
    let country = "";
    if (newCountry == "") {
      country = destination.country;
    } else {
      country = newCountry;
    }
    if (newCity == "") {
      city = destination.city;
    } else {
      city = newCity;
    }

    setUpdateDestination({
      id: destination.id,
      city: city,
      country: country,
      daysNeeded: destination.daysNeeded,
    });
    setNewCity("");
    setNewCountry("");
    setIsUpdating(!isUpdating);
  }
  return (
    <div
      className="row py-1"
      style={{
        borderBottom: "1px solid #333",
        borderTop: "1px solid #333",
      }}
    >
      <div className="col-4 row offset-2">
        <div className="row">
          <div className="col-6 p-1">
            {isUpdating ? (
              <input
                className="form-control"
                type="text"
                placeholder="city..."
                defaultValue={destination.city}
                onChange={(e) => setNewCity(e.target.value.trim())}
              ></input>
            ) : (
              <span>{destination.city}</span>
            )}
          </div>
          <div className="col-6 p-1">
            {isUpdating ? (
              <input
                className="form-control"
                type="text"
                placeholder="country..."
                defaultValue={destination.country}
                onChange={(e) => setNewCountry(e.target.value.trim())}
              ></input>
            ) : (
              <span>{destination.country}</span>
            )}
          </div>
        </div>
      </div>
      <div className="col-1 text-warning">{destination.daysNeeded} days</div>
      <div className="col-3">
        <button
          onClick={() => setIsUpdating(!isUpdating)}
          className="btn btn-primary m-1 "
        >
          {isUpdating ? "Cancel" : "Edit"}
        </button>
        {isUpdating ? (
          <button
            className="btn btn-warning"
            onClick={() => handleUpdateDestination()}
          >
            Update
          </button>
        ) : (
          ""
        )}
        <button
          onClick={() => {
            handleDeleteDestination(destination.id);
          }}
          className="btn btn-danger m-1 "
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Destination;
