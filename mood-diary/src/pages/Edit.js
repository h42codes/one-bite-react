import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate(); // function
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
      <button onClick={() => navigate("/home")}>Home</button>
      {/* go back one level */}
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default Edit;
