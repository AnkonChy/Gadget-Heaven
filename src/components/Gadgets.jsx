import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Gadget from "./Gadget";
import { useEffect, useState } from "react";

const Gadgets = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  const { category } = useParams();

  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    if (category) {
      const filteredByCategory = [...data].filter(
        (gadget) => gadget.category === category
      );
      setGadgets(filteredByCategory);
    } else {
      setGadgets(data.slice(0, 9));
    }
  }, [data, category]);
  return (
    <div className="col-span-3">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {gadgets.map((gadget) => (
            <Gadget key={gadget.product_id} gadget={gadget}></Gadget>
          ))}
        </div>
      </div>
      <button
        className="px-5 py-2 bg-bg-violet text-white rounded-3xl mt-10"
        onClick={() => {
          navigate("/allGadgets");
        }}
      >
        View All
      </button>
    </div>
  );
};

export default Gadgets;
