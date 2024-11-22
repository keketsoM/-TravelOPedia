import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const destinationAPI = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    //QUERY -> GET
    getAllDestanation: builder.query({
      query: () => "destination",
    }),
    //MUTATION -> POST/PUT/DELETE
  }),
});

export const { useGetAllDestinationQuery } = destinationAPI;
