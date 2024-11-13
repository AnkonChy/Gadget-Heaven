import ContactBanner from "../components/ContactBanner";

const ContactUs = () => {
  return (
    <div>
      <ContactBanner></ContactBanner>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse gap-20">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Contact Details</h1>
            <div className="space-y-4 my-6">
              <h2 className="text-lg font-bold">Head Office</h2>
              <p className="">Bangladesh</p>
              <h2 className="text-lg font-bold">Contact</h2>
              <p>034232323</p>
            </div>
          </div>
          <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
            <h1 className="text-4xl text-center mt-8 font-bold">
              Online Inquiry
            </h1>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Describe Your Message"
                  className="textarea textarea-bordered"
                  rows="5"
                  cols="50"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
