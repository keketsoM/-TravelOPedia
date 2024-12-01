import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const destinationAPI = createApi({
  reducerPath: "apidestination",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ["Destination"],
  endpoints: (builder) => ({
    //QUERY -> GET
    getAllDestination: builder.query({
      query: () => ({
        method: "GET",
        url: "destination",
        params: {},
      }),
      transformResponse: (res) => res.sort((a, b) => b.id - a.id),
      providesTags: ["Destination"],
    }),
    // getAllDestination: builder.query({
    //   query: (id) => `destination${id}`,
    //   providesTags:(id)=>{return[{type:"Destination",id:id}]}
    // }),
    //MUTATION -> POST/PUT/DELETE
    AddDestination: builder.mutation({
      query: (destination) => ({
        method: "POST",
        url: "destination",
        body: destination,
      }),
      invalidatesTags: ["Destination"],
    }),
    updateDestination: builder.mutation({
      query: (destination) => ({
        method: "PUT",
        url: `destination/${destination.id}`,
        body: destination,
      }),
      invalidatesTags: ["Destination"],
    }),
    DeleteDestination: builder.mutation({
      query: ({ id }) => ({
        url: `destination/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Destination"],
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
