import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { resetCart } from "../store/cartSlice";

const CheckOut = () => {
  const [price, setPrice] = useState(0);
  const items = useSelector((state) => state.cart);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    items.filter((item) => setPrice((price) => price + item.price));
  }, [items]);


  const checkoutHandle = (total) =>{
    console.log(total)
    alert("Thankyou for Ordering..")
    // window.location.reload()
    dispatch(resetCart())
    navigate("/")
  }
  return (
    <>
    <NavBar/>
      <div className="container-fluid">
        <h4 className="mt-4">Check out Here</h4>
        {items.map((item,idx) => (
          <div className="row justify-content-center" key={idx}>
            <div className="col-md-6">
              <div className="alert alert-success" role="alert">
                {item.title}
              </div>
            </div>
          </div>
        ))}
      </div>

      <h4>Your Total Price : {price / 2}</h4>
      <button className="btn btn-success" onClick={()=>checkoutHandle(price/2)}>Check Out</button>
    </>
  );
};

export default CheckOut;
