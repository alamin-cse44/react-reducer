import ProductCard from "../component/ProductCard";
import { useProducts } from "../context/ProductProvider";

const TopRated = () => {
  const {
    state: { products, loading, error },
  } = useProducts();

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
    content = products
      .filter((product) => product.rating > 3)
      .map((product, i) => <ProductCard key={i} product={product} />);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl gap-14 mx-auto my-10">
      {content}
    </div>
  );
};

export default TopRated;
