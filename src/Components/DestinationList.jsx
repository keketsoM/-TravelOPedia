import {
  useDeleteDestinationMutation,
  useGetAllDestinationQuery,
} from "../api/destinationApi";
function DestinationList() {
  const { data, isLoading, isError, isSuccess, error } =
    useGetAllDestinationQuery();
  const [setDeleteDestination, result] = useDeleteDestinationMutation();

  function handleDeleteDestination(id) {
    setDeleteDestination({
      id: id,
    });
  }

  let content;

  if (isLoading) {
    content = <p>Loading....</p>;
  } else if (isSuccess) {
    console.log(data);
    content = data.map((destination, index) => {
      return (
        <div
          className="row py-1"
          key={destination.id}
          style={{
            borderBottom: "1px solid #333",
            borderTop: "1px solid #333",
          }}
        >
          <div className="col-3 offset-3">
            {destination.city}, {destination.country}
          </div>
          <div className="col-1 text-warning">
            {destination.daysNeeded} days
          </div>
          <div className="col-2">
            <button
              onClick={() => {
                handleDeleteDestination(destination.id);
              }}
              className="btn btn-danger m-1 form-control"
            >
              Delete
            </button>
          </div>
        </div>
      );
    });
  } else if (isError) {
    content = <p>{error}</p>;
  }
  return <diV className="pt-3">{content}</diV>;
}

export default DestinationList;
