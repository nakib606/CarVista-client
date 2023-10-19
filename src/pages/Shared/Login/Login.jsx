import { Link, useNavigate } from "react-router-dom";
import bg from "../../../../public/LoginRegister/2.jpg";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { signInUser, signInWithGoogle, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // signInUser
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        form.reset();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "User Logged-in successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // google signin
  const hanldeGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log("google signin", result.user);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "User Logged-in successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
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
          onSubmit={handleLogin}
          className="card-body bg-[#2626266d] max-w-md px-2 md:px-6"
        >
          <p className="text-white text-2xl md:text-3xl font-semibold">
            Please Login
          </p>
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
            <button className="btn bg-transparent border-primary-color duration-300 text-white hover:border-white hover:bg-transparent  hover:text-primary-color text-lg md:text-xl capitalize font-semibold">
              Login
            </button>
          </div>
          <p className="text-lg text-white my-4">Or Login with</p>
          <button
            onClick={hanldeGoogleSignIn}
            className="btn bg-transparent border-white duration-300 text-primary-color hover:border-primary-color hover:bg-transparent  hover:text-white text-lg capitalize font-semibold"
          >
            <FcGoogle />
            <span className="text-xl">Google</span>
          </button>
          <p className="text-white text-left whitespace-nowrap text-sm md:text-base mt-4">
            New to this website? Please{" "}
            <Link to="/register" className="link link-white">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
