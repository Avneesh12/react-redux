import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const NavBar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-end">
          <div className="col-auto d-flex">
            <Link
              to="/"
              style={{ fontSize: "18px", color: "black", marginRight: "5px" }}
            >
              Home
            </Link>
            <Link
              to="/cart"
              style={{ fontSize: "18px", color: "black", marginRight: "5px" }}
            >
              Cart
            </Link>
            <Link
              to="/checkout"
              style={{ fontSize: "18px", color: "black", marginRight: "5px" }}
            >
              CheckOut
            </Link>
            <span>
              <h5>Cart Item "{items.length}"</h5>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
