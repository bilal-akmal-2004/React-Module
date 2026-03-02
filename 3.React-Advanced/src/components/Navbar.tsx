  import { Link } from "react-router-dom";
  import { useSelector, useDispatch } from "react-redux";
  import { type RootState } from "../store/store";
  import { removeFromCart, decreaseQuantity} from "../store/cartSlice";
  import { useState } from "react";
  import Modal from "./Modal";

  export default function Navbar() {
    const items = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    const totalItems = items.reduce(
      (acc, item) => acc + item.quantity,
      0
    );

    const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

    return (
    <nav className="navbar">
        <div className="nav-div">
          <Link to="/">Home</Link>
          <Link to="/cart">Products</Link>

          <button className="cart-btn" onClick={() => setOpen(true)}>
            Cart ({totalItems})
          </button>
        </div>


        <Modal isOpen={open} onClose={() => setOpen(false)}>
          <div className="cart-main-div">
            <h3>Your Cart</h3>

          {items.length === 0 && <p>Cart is empty</p>}

          {items.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />

              <div>
                <p>{item.title}</p>
                <p>$ {item.price}</p>
                <p>Qty: {item.quantity}</p>


                <button className="cart-btn" onClick={() => dispatch(decreaseQuantity(item.id))}>
                  -
                </button>

                <button className="cart-btn" onClick={() => dispatch(removeFromCart(item.id))}>
                  Remove
                </button>
              </div>
            </div>
          ))}
          
        <p>Total: $ {totalPrice.toFixed(2)}</p>
          </div>
          
        </Modal>
      </nav>
    );
  }