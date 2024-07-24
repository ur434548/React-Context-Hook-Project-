import { useContext, useRef } from "react";

import CartModal from "./CartModal.jsx";
import { Context } from "../store/Shopping-cart-Context.jsx";

export default function Header() {
  const modal = useRef();
  const { items } = useContext(Context);
  const cartQuantity = items.length;

  function handleOpenCartClick() {
    modal.current.open();
  }

  let modalActions = <button>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }
  console.log(items);
  return (
    <>
      <CartModal ref={modal} title="Your Cart" actions={modalActions} />
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({items.length})</button>
        </p>
      </header>
    </>
  );
}
