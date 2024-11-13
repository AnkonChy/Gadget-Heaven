import { useLoaderData, useNavigate } from "react-router-dom";
import DashboardBanner from "../components/DashboardBanner";
import { useEffect, useState } from "react";
import { getStoredCartList, getStoredWishList } from "../utility/addToLocal";
import Cart from "../components/Cart";
import Wish from "../components/Wish";
import logo from "../assets/Group.png"

const Dashboard = () => {
  const allData = useLoaderData();
  const [cartList, setCartList] = useState([]);
  const [wishList, setWishList] = useState([]);

  const [display, setDisplay] = useState("cart");
  useEffect(() => {
    const storedCartList = getStoredCartList();

    const cartGadgetList = allData.filter((gadget) =>
      storedCartList.includes(gadget.product_id)
    );

    setCartList(cartGadgetList);
  }, [allData]);

  useEffect(() => {
    const storedWishList = getStoredWishList();

    const wishGadgetList = allData.filter((gadget) =>
      storedWishList.includes(gadget.product_id)
    );

    setWishList(wishGadgetList);
  }, [allData]);

  const handleSort = () => {
    const sortedCartList = [...cartList].sort((a, b) => b.price - a.price);
    setCartList(sortedCartList);
  };

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalPrice = cartList.reduce((t, cart) => t + cart.price, 0);
    setTotal(totalPrice);
  }, [cartList]);

  const handlePurchase = () => {
    document.getElementById("my_modal_5").showModal();
  };

  const navigate = useNavigate();
  const handleClose = () => {
    setTotal([]);
    setCartList([]);
    localStorage.removeItem("cart-list");
    navigate("/");
  };
  return (
    <div>
      <DashboardBanner
        display={display}
        setDisplay={setDisplay}
      ></DashboardBanner>
      {/* <Outlet></Outlet> */}
      <div className="w-11/12 mx-auto mt-10">
        <div className="flex justify-between items-center p-6">
          <div>
            <h1 className="font-bold text-2xl">
              {display === "cart" ? "Cart" : "Wishlist"}
            </h1>
          </div>
          <div className="flex gap-16 items-center">
            <div>
              <h1 className="text-2xl font-bold">
                {display === "cart" ? `Total Cost: $ ${total}` : ""}
              </h1>
            </div>
            <div className="flex gap-4 items-center">
              {display === "cart" ? (
                <>
                  <button
                    onClick={handleSort}
                    className="px-6 py-2 bg-white rounded-3xl text-violet-600 font-medium flex gap-2 items-center"
                  >
                    Sort By Price
                    <i className="fa-solid fa-sort"></i>
                  </button>
                  <button
                    onClick={() => handlePurchase()}
                    className="px-4 py-2 bg-bg-violet text-white rounded-3xl"
                    disabled={cartList.length === 0}
                  >
                    Purchase
                  </button>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div>
          {display === "cart" ? (
            <>
              {cartList.map((cart) => (
                <Cart key={cart.product_id} cart={cart}></Cart>
              ))}
            </>
          ) : (
            <>
              {wishList.map((wish) => (
                <Wish key={Wish.product_id} wish={wish}></Wish>
              ))}
            </>
          )}
        </div>
      </div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="flex flex-col justify-center items-center space-y-4">
            <img src={logo} alt="" />
            <h1 className="text-4xl font-bold">Payment Successfull</h1>
            <div className="divider"></div>
            <p className="text-lg font-medium">Thanks for purchasing</p>
            <p className="">Total: $ {total}</p>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button onClick={handleClose} className="btn">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Dashboard;
