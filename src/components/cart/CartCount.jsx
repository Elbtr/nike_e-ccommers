import { ChevronDoubleLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";

const CartCount = ({ offToggleCart, onRemoveAllItems, totalQuantity }) => {
  return (
    <>
      <section className="bg-white h-11 flex items-center justify-between px-3 sticky top-0 left-0 right-0 w-full cursor-default">
        <div className="flex items-center gap-3">
          <div
            className="grid items-center cursor-pointer"
            onClick={offToggleCart}
          >
            <ChevronDoubleLeftIcon className="w-5 h-5 text-slate-900 hover:text-orange-500 stroke-[2]" />
          </div>
          <div className="grid items-center">
            <h1 className="text-base font-medium text-slate-900">
              Your Cart{" "}
              <span className="bg-theme-cart rounded px-1 py-0.5 text-xs text-slate-100 font-normal">
                ({totalQuantity} Items)
              </span>
            </h1>
          </div>
        </div>
        <div className="flex items-center">
          <button
            onClick={onRemoveAllItems}
            type="button"
            className="rounded bg-theme-cart active:scale-90 p-0.5"
          >
            <XMarkIcon className="w-5 h-5 text-white satroke-[2]" />
          </button>
        </div>
      </section>
    </>
  );
};

export default CartCount;
