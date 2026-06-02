import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigation } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleClick = (product) => {
    <Navigation to={`/product/details/:${product.id}`} />;
  };

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response);
      setProducts(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="ProductListPage">
      {products.map((product) => (
        <div key={product.id} className="product-row">
          <div className="product-cell product-image-cell">
            <img
              className="product-image"
              src={product.image}
              alt={product.title}
            />
            <button
              onClick={() =>
                navigation.navigate(`/product/details/:${product.id}`)
              }
            >
              Click me
            </button>
          </div>

          <div className="product-cell">{product.title}</div>
          <div className="product-cell">{product.category}</div>
          <div className="product-cell">${product.price}</div>
          <div className="product-cell product-description">
            {product.description}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductListPage;
