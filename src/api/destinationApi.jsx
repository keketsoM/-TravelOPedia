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
    AddDestination: builder.mutation({
      query: (destination) => ({
        method: "Post",
        url: "destination",
        body: destination,
      }),
    }),
    updateDestination: builder.mutation({
      query: (destination) => ({
        method: "Put",
        url: `destination/${destination.id}`,
        body: destination,
      }),
    }),
    deleteDestination: builder.mutation({
      query: ({id}) => ({
        method: "delete",
        url: `destination/${id}`,
        body: id,
      }),
    }),
  }),
});
console.log(destinationAPI);
export const {
  useGetAllDestinationQuery,
  useDeleteDestinationMutation,
  useAddDestinationMutation,
  useUpdateDestinationMutation,
} = destinationAPI;
