import { useSelector , useDispatch} from "react-redux";
import NavBar from "../components/NavBar";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const carts = useSelector((state) => state.cart);
  const dispatch = useDispatch()

  const handleRemove = (prod) =>{
    dispatch(remove(prod.id))

  }
  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <h4 className="text-center">Cart Items</h4>
        {carts.map((item) => (
          <div className="row justify-content-center" key={item.id}>
            <div className="col-auto d-flex">
              <div
                className="card mt-2"
                style={{ width: "18rem", height: "25rem" }}
              >
                <h5 className="card-header">{item.title}</h5>
                <div className="card-body">
                  <img
                    src={item.image}
                    className="img-responsive center-block"
                    alt="..."
                    style={{
                      width: "10rem",
                      height: "10rem",
                      margin: "0 auto",
                    }}
                  />
                  <p className="card-text">{item.category}.</p>
                  <h5 className="card-title">Price : {item.price}</h5>
                  <button
                className="btn btn-primary"
                onClick={() => handleRemove(item)}
              >Remove Cart Item</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
