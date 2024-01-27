import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { ProductProvider } from "./context/ProductProvider";
// import LongForm from "./example1/LoginForm";

function App() {
  return (
    <>
      {/* <LongForm /> */}
      <ProductProvider>
        <RouterProvider router={routes} />
      </ProductProvider>
    </>
  );
}

export default App;
