import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const destinationAPI = createApi({
  reducerPath: "apidestination",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    //QUERY -> GET
    getAllDestination: builder.query({
      query: () => "destination",
    }),
    //MUTATION -> POST/PUT/DELETE
  }),
});
console.log(destinationAPI);
export const { useGetAllDestinationQuery } = destinationAPI;
