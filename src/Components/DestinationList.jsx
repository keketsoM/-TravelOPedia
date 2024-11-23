import React from "react";
import { useGetAllDestinationQuery } from "../api/destinationApi";
function DestinationList() {
  const { data, isLoading, isError, isSuccess, error } =
    useGetAllDestinationQuery();
  console.log(data);
  let content;

  if (isLoading) {
    return (content = <p>Loading....</p>);
  } else if (isSuccess) {
    console.log(data);
    return (content = data.map((destination, index) => {
      return (
        <article key={destination.id}>
          <div className="text-center text-info p-2">
            <div>
              {destination.city}, {destination.country} -{" "}
              {destination.dayNeeded} days
            </div>
          </div>
        </article>
      );
    }));
  } else if (isError) {
    return (content = <p>{error}</p>);
  }
}

export default DestinationList;
