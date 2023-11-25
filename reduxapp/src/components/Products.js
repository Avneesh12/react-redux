import { useEffect, useState } from "react";
import { add } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const Products = () => {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch("https://fakestoreapi.com/products");
      res = await res.json();
      setProduct(res);
    };
    fetchData();
  }, []);

  const handleAdd = (prod) => {
    dispatch(add(prod));
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center " style={{ width: "100vw" }}>
        <h4>Products</h4>

        {product.map((product) => (
          <div
            className="card mb-2 col-dm-4 m-2"
            style={{ width: "18rem" }}
            key={product.id}
          >
            <img
              src={product.image}
              className="img-responsive center-block"
              alt="..."
              style={{ width: "10rem", height: "10rem", margin: "0 auto" }}
            />
            <div className="card-body">
              <h5 className="card-title">{product.category}</h5>
              <h5 className="card-text">{product.title}</h5>
              <p className="card-text">Price : {product.price}</p>
              <button
                className="btn btn-primary"
                onClick={() => handleAdd(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
