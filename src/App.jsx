import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
// import LongForm from "./example1/LoginForm";

function App() {
  return (
    <>
      {/* <LongForm /> */}
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
