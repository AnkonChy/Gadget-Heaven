const Footer = () => {
  return (
    <footer className="mt-60 bg-white">
      <div className="text-center py-4 space-y-2">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
          Gadget Heaven
        </h1>
        <p className="text-gray-500 font-medium text-xs md:text-sm lg:text-base">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <div className="footer p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contacts</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
