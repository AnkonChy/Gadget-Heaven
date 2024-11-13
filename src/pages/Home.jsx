import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
// import { Helmet } from "react-helmet";

const Home = () => {
  const categories = useLoaderData();
  return (
    <div>
      {/* <Helmet>
        <title>Home Page</title>
      </Helmet> */}
      <Banner></Banner>
      <div>
        <h1 className="text-4xl font-bold text-center mb-16">
          Explore Cutting-Edge Gadgets
        </h1>
        <div className="grid grid-cols-1  lg:grid-cols-4 w-11/12 mx-auto lg:gap-10">
          {/* categories  */}
          <Categories categories={categories}></Categories>
          {/* dynamic  */}
          <Outlet></Outlet>
          {/* <Gadgets></Gadgets> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
