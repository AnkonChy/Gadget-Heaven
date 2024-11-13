const DashboardBanner = ({ display, setDisplay }) => {
  return (
    <div>
      <div className=" text-white h-64 text-center bg-bg-violet">
        <div className="pt-8">
          <h1 className="text-4xl font-bold mb-4">Product Details</h1>
          <p className="">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="flex items-center justify-center gap-2 py-3">
            <button
              onClick={() => setDisplay("cart")}
              className={`px-7 py-3  rounded-3xl font-medium ${
                display === "cart"
                  ? "bg-black text-white"
                  : "bg-white  text-black"
              }`}
            >
              Cart
            </button>
            <button
              onClick={() => setDisplay("wish")}
              className={`px-7 py-3  rounded-3xl font-medium ${
                display === "wish"
                  ? "bg-black text-white"
                  : "bg-white  text-black"
              }`}
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardBanner;
