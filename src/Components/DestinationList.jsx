import React from "react";
import { useGetAllDestinationQuery } from "../api/destinationApi";
function DestinationList() {
  const { data, isLoading, isError, isSuccess, error } =
    useGetAllDestinationQuery();
  console.log(data);
  let content;

  if (isLoading) {
    content = <p>Loading....</p>;
  } else if (isSuccess) {
    console.log(data);
    content = data.map((destination, index) => {
      return (
        <article key={destination.id}>
          <div className="text-center text-info p-2">
            <div>
              {destination.city}, {destination.country} -{" "}
              {destination.daysNeeded} days
            </div>
          </div>
        </article>
      );
    });
  } else if (isError) {
    content = <p>{error}</p>;
  }
  return <diV className="pt-3">{content}</diV>;
}

export default DestinationList;
