import { useLoaderData } from "react-router-dom";
import Gadget from "../components/Gadget";

const AllGadgets = () => {
  const data = useLoaderData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((gadget) => (
        <Gadget key={gadget.product_id} gadget={gadget}></Gadget>
      ))}
    </div>
  );
};

export default AllGadgets;
