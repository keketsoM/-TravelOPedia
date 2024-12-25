import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const randomAPI = createApi({
  reducerPath: "apirandom",
  baseQuery: fetchBaseQuery({ baseUrl: "https://random-data-api.com/api/v2/" }),
 
  endpoints: (builder) => ({
    //QUERY -> GET
    getAllRandom: builder.query({
      query: () => ({
        method: "GET",
        url: "addresses",
        
      }),
      
     
    }),

  }),
});

export const {
  useGetAllRandomQuery,

} = randomAPI;
