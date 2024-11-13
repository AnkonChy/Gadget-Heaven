import { useNavigate } from "react-router-dom";
import bannerImg from "../assets/banner.jpg";

const Banner = () => {
  const navigate = useNavigate();

  const handleShop = () => {
    navigate("/dashboard");
  };
  return (
    <div className="min-h-[500px] md:w-11/12 mx-auto bg-bg-violet rounded-b-2xl relative mb-72">
      <div className="text-white flex flex-col justify-center items-center text-center">
        <div className="w-3/5 space-y-6 py-6">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="text-sm lg:text-base">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button
            onClick={handleShop}
            className="px-7 py-3 bg-white rounded-3xl text-violet-600 font-medium"
          >
            Shop Now
          </button>
        </div>
      </div>
      <div className="absolute lg:left-[174px] lg:-bottom-[170px] p-4 rounded-3xl border border-white">
        <img
          className="w-[1000px] max-h-[320px] rounded-2xl object-cover"
          src={bannerImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
