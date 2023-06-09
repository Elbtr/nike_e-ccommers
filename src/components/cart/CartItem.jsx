import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import {
  setDecreaseItemQty,
  setIncreaseItemQty,
  setRemoveitemsFromcart,
} from "../app/CartSlice";

const CartItem = ({
  item: { cartQuantity, id, title, text, img, price, color, shadow },
}) => {
  const dispatch = useDispatch();

  const onIncreaseItemQty = () => {
    dispatch(
      setIncreaseItemQty({
        cartQuantity,
        id,
        title,
        text,
        img,
        price,
        color,
        shadow,
      })
    );
  };

  const onDecreaseItemQty = () => {
    dispatch(
      setDecreaseItemQty({
        cartQuantity,
        id,
        title,
        text,
        img,
        price,
        color,
        shadow,
      })
    );
  };

  const onRemoveItem = () => {
    dispatch(
      setRemoveitemsFromcart({
        cartQuantity,
        id,
        title,
        text,
        img,
        price,
        color,
        shadow,
      })
    );
  };

  return (
    <>
      <section className="flex items-center justify-between w-full px-5">
        <div className="flex items-center gap-5">
          <div
            className={`bg-gradient-to-b ${color} ${shadow} relative rounded p-3 hover:scale-105  duration-75 transition-all ease-in-out grid items-center`}
          >
            <img
              src={img}
              alt={`img/cart-item/${id}`}
              className="w-36 h-auto object-fill lg:w-28 "
            />
            <div className="absolute right-1 top-1 blur-theme-effect bg-white/80 text-black text-xs px-1 rounded">
              ${price}
            </div>
          </div>
          <div className="grid items-center gap-4">
            <div>
              <h1 className="font-medium text-lg text-slate-900 lg:text-sm">
                {title}
              </h1>
              <p className="text-sm text-slate-800 lg:text-xs">{text}</p>
            </div>
            <div className="flex items-center justify-around w-full">
              <button
                onClick={onDecreaseItemQty}
                type="button"
                className="bg-theme-cart rounded w-6 h-6 lg:h-5 lg:w-5 flex items-center justify-center active:scale-90"
              >
                <MinusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]" />
              </button>
              <div className="bg-theme-cart rounded text-white font-medium lg:text-xs w-7 h-6 lg:w-6 lg:h-5 flex items-center justify-center active:scale-90">
                {cartQuantity}
              </div>
              <button
                onClick={onIncreaseItemQty}
                type="button"
                className="bg-theme-cart rounded w-6 h-6 lg:h-5 lg:w-5 flex items-center justify-center active:scale-90"
              >
                <PlusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]" />
              </button>
            </div>
          </div>
        </div>
        <div className="grid items-center gap-5">
          <div className="grid items-center justify-center">
            <h1 className="text-lg lg:text-base text-slate-900 font-medium">
              ${price * cartQuantity}
            </h1>
          </div>
          <div className="grid items-center justify-center">
            <button
              onClick={onRemoveItem}
              type="button"
              className="bg-theme-cart rounded p-1 lg:p-0.5 grid items-center justify-center active:scale-90"
            >
              <TrashIcon className="w-5 h-5 text-white " />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartItem;
