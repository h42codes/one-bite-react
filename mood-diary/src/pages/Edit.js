import { useSearchParams } from "react-router-dom";

const Edit = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");
  const mode = searchParams.get("mode");
  console.log(id, mode);

  return (
    <div>
      <h1>Edit</h1>
      <p>This is Edit section</p>
      <button onClick={() => setSearchParams({ who: "me" })}>
        Change Query String
      </button>
    </div>
  );
};

export default Edit;
