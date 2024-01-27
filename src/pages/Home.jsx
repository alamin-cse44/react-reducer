// import { useContext } from "react";
// import { PRODUCT_CONTEXT } from "../context/ProductProvider";
import ProductCard from "../component/ProductCard";
import { useProducts } from "../context/ProductProvider";

const Home = () => {
  const {
    state: { products, loading, error },
  } = useProducts();

  //   const value = useContext(PRODUCT_CONTEXT);
  //   console.log("value ", value.state.products)
  let content;
  if (loading) {
    content = <p>Loading...</p>;
  }

  if (error) {
    content = <p>Error!</p>;
  }

  if (!loading && !error && products.length === 0) {
    content = <p>Product List is Empty</p>;
  }

  if (!loading && !error && products.length) {
    content = products.map((product, i) => (
      <ProductCard key={i} product={product} />
    ));
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      {content}
    </div>
  );
};

export default Home;
