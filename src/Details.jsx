import { useParams } from "react-router-dom";
import fetchPet from "./fetchPet";
import { useQuery } from "@tanstack/react-query";
const Details = () => {
  const { id } = useParams();
  console.log("id", id);
  const results = useQuery(["details", id], fetchPet);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="laoder">...</h2>
      </div>
    );
  }
  console.log("result", results?.data);
  const pet = results?.data?.pets[0];
  return (
    <div className="details">
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.state}
          <button>Adopt {pet.name}</button>
          <p>{pet.description}</p>
        </h2>
      </div>
    </div>
  );
};

export default Details;
