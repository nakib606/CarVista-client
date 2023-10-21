import { Link } from "react-router-dom";
import banner from "../../../../public/banner.jpg";
import Swal from "sweetalert2";
const Banner = () => {
  const handleLists = () => {
    Swal.fire({
      title: "Lists Of Brands",
      text: "Toyota, Ford, Honda, Tesla, Mercedes-Benz, BMW",
      showCancelButton: true,
      showConfirmButton: false,
      cancelButtonColor: "#d33",
      cancelButtonText: "Close",
    });
  };

  return (
    <div
      className="py-28 lg:py-52"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundPosition: " center",
        backgroundSize: "cover",
      }}
    >
      <div className="hero-overlay bg-opacity-60 "></div>
      <div className="hero-content max-w-6xl mx-auto text-center ">
        <div className="lg:max-w-lg">
          <h1 className="mb-5 text-2xl lg:text-4xl text-white font-bold">
            Buy the car you have <br /> always dreamed
          </h1>
          <p className="text-white lg:text-lg  mb-8">
            Supercar also referred to as an exotic is a luxury, high-performance
            sports car or grand tourer.
          </p>
          <Link
            onClick={handleLists}
            className="btn bg-primary-color text-white border-none duration-500 hover:bg-white hover:text-primary-color lowercase text-lg"
          >
            cars listing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
