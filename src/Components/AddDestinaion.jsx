import React from "react";

const AddDestinaion = () => {
  return (
    <div className="p-4 border">
      <form>
        <div className="row col-8 offset-2">
          <h4>Enter a new Destination</h4>
          <div className="col-5 p-1"></div>
          <input
            type="text"
            placeholder="Enter city..."
            className="form-control"
          ></input>
          <div className="col-5 p-0 mt-1">
            <input
              type="text"
              placeholder="Enter country..."
              className="form-control"
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
