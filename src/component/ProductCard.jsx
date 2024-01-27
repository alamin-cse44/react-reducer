
const ProductCard = ({product}) => {
    console.log("products ",product)
    return (
        <div>
            <h2>Total product: {product.price}</h2>
        </div>
    );
};

export default ProductCard;