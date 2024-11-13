import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";

const MainLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="bg-gray-100 font-Sora">
      {/* navbar section  */}
      <Navbar></Navbar>
      {/* dynamic section  */}
      <div className="min-h-[calc(100vh-392px)]">
        <Outlet></Outlet>
      </div>
      {/* footer section  */}
      <Footer></Footer>
    </div>
  );
}; 

export default MainLayout;
