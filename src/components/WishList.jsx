import { useLoaderData } from "react-router-dom";

const WishList = () => {

    const allGadgetWish = useLoaderData();
    console.log(allGadgetWish)
    return (
        <div>
            
        </div>
    );
};

export default WishList;