import bg from "../../../../public/LoginRegister/1.jpg";
import { Link } from "react-router-dom";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
  };
  return (
    <div
      className="py-28 lg:pt-36 lg:pb-28"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: " center",
        backgroundSize: "cover",
      }}
    >
      <div className="hero-content max-w-6xl mx-auto text-center ">
        <form
          onSubmit={handleRegister}
          className="card-body bg-[#2626266d] max-w-md px-2 md:px-6"
        >
          <p className="text-white text-2xl md:text-3xl font-semibold">
            Please Register
          </p>
          <div className="md:flex md:justify-between gap-4">
            <div className="form-control overflow-hidden">
              <label className="label">
                <span className="label-text text-primary-color text-base md:text-lg">
                  Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="bg-transparent border-b-2 border-b-[#302f2f4f] p-2"
                required
              />
            </div>
            <div className="form-control overflow-hidden">
              <label className="label">
                <span className="label-text text-primary-color text-base md:text-lg">
                  Photo Url
                </span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Your photo"
                className="bg-transparent border-b-2 border-b-[#302f2f4f] p-2"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-primary-color text-base md:text-lg">
                Email
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="bg-transparent border-b-2 border-b-[#302f2f4f] p-2"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-primary-color text-base md:text-lg">
                Password
              </span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              className="bg-transparent border-b-2 border-b-[#302f2f4f] p-2"
              required
            />
          </div>

          <div className="form-control mt-6">
            <Link className="btn bg-transparent border-primary-color duration-300 text-white hover:border-white hover:bg-transparent  hover:text-primary-color text-base md:text-xl capitalize font-semibold">
              Register
            </Link>
          </div>

          <p className="text-white text-left whitespace-nowrap text-xs md:text-base mt-4">
            Already have an account? Please{" "}
            <Link to="/login" className="link link-white">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
