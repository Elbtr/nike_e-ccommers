import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartState,
  selectItemState,
  selectTotalAmount,
  selectTotalQTY,
  setClearCartItems,
  setCloseCart,
  setGetTotals,
} from "./app/CartSlice";
import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import CartItem from "./cart/CartItem";

const Cart = () => {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const cartItems = useSelector(selectItemState);
  const totalAmount = useSelector(selectTotalAmount);
  const totalQuantity = useSelector(selectTotalQTY);

  useEffect(() => {
    dispatch(setGetTotals());
  }, [cartItems, dispatch]);

  const onToggleCart = () => {
    dispatch(
      setCloseCart({
        cartState: false,
      })
    );
  };
  const onRemoveAllItems = () => {
    dispatch(setClearCartItems());
  };
  return (
    <>
      {ifCartState && (
        <div
          className={`fixed top-0 right-0 left-0 bottom-0 blur-effect-theme w-full h-screen opacity-100 z-[250]`}
        >
          <div className="blur-effect-theme h-screen max-w-xl w-full absolute right-0">
            <CartCount
              offToggleCart={onToggleCart}
              onRemoveAllItems={onRemoveAllItems}
              totalQuantity={totalQuantity}
            />
            {cartItems.length === 0 ? (
              <CartEmpty onToggleCart={onToggleCart} />
            ) : (
              <section>
                <div className="flex items-center justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3">
                  {cartItems.map((item, i) => (
                    <CartItem key={i} item={item} />
                  ))}
                </div>

                <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center cursor-default">
                  <div className="flex items-center justify-between">
                    <h1 className="text-base font-semibold">SubTotal</h1>
                    <h1 className="text-sm rounded bg-theme-cart text-slate-100 py-1 px-0.5">
                      ${totalAmount}
                    </h1>
                  </div>
                  <div className="grid items-center pt-2 gap-2">
                    <p className="text-sm font-medium text-center">
                      Taxes and Shipping Will Calculate At Shipping
                    </p>
                    <button
                      type="button"
                      className="button-theme bg-theme-cart text-white"
                    >
                      Check Out
                    </button>
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;

// ${
//   ifCartState
//     ? "opacity-100 visible translate-x-0"
//     : "opacity-0 invisible translate-x-8"
// }
