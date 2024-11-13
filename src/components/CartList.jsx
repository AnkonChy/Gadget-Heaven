import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCartList } from "../utility/addToLocal";
import Cart from "./Cart";

const CartList = () => {
  const allGadgetCart = useLoaderData();

  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    const storedCartList = getStoredCartList();

    const cartGadgetList = allGadgetCart.filter((gadget) =>
      storedCartList.includes(gadget.product_id)
    );

    setCartList(cartGadgetList);
  }, [allGadgetCart]);

  return (
    <div className="w-11/12 mx-auto mt-10">
      <div className="flex justify-between items-center p-6">
        <div>
          <h1 className="font-bold text-2xl">Cart</h1>
        </div>
        <div className="flex gap-40 items-center">
          <div>
            <h1 className="text-2xl font-bold">Total cost:</h1>
          </div>
          <div className="flex gap-4 items-center">
            <button className="px-6 py-2 bg-white rounded-3xl text-violet-600 font-medium flex gap-2 items-center">
              Sort By Price
              <i className="fa-solid fa-sort"></i>
            </button>
            <button className="px-4 py-2 bg-bg-violet text-white rounded-3xl">
              Purchase
            </button>
          </div>
        </div>
      </div>
      <div>
        {cartList.map((cart) => (
          <Cart key={cart.product_id} cart={cart}></Cart>
        ))}
      </div>
    </div>
  );
};

export default CartList;
