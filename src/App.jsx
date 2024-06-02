import "./App.css";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";

const App = () => {
  return (
    <>
      <Button variant="contained">Hello world!</Button>
      <Rating name="size-small" defaultValue={0} size="small" />
    </>
  );
};

export default App;
