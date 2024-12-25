import React from "react";
import { useGetAllRandomQuery } from "../api/randomApi";

export default function RandomDestination() {
  const { data, isLoading, isError, isSuccess, error } = useGetAllRandomQuery();

  let content;

  if (isLoading) {
    content = <p>Loading....</p>;
  } else if (isSuccess) {
    console.log(data);
    content = (
      <div className="text-center border p-3">
        <h4 className="text-success">Random Travel Sugestion</h4>
        {data.city}, {data.country}
      </div>
    );
  } else if (isError) {
    content = <p>{error}</p>;
  }
  return <div className="pt-3">{content}</div>;
}
