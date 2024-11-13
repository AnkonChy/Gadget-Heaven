import { useNavigate } from "react-router-dom";

const Gadget = ({ gadget }) => {
  const { product_id, product_title, product_image, price } = gadget;

  //handleDetailsbtn
  const navigate = useNavigate();
  const handleDetails = () => {
    navigate(`/gadgets/${product_id}`);
  };
  return (
    <div className="card bg-base-100 p-4 shadow-xl">
      <figure className="px-10 pt-10 rounded-xl border border-gray-200">
        <img
          src={product_image}
          alt="Shoes"
          className="rounded-xl h-[200px] w-[200px] object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product_title}</h2>
        <p>Price: {price} $</p>
        <div className="card-actions my-2">
          <button
            onClick={handleDetails}
            className="px-4 py-2 border-2 border-violet-600 rounded-3xl text-violet-900"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gadget;
