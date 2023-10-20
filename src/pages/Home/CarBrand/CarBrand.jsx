import { Link } from "react-router-dom";
import "./CarBrand.css";
const CarBrand = ({ brand }) => {
  const { brandName, img } = brand;
  return (
    <div className="card duration-500 cursor-pointer bg-white shadow-md rounded-md flex justify-between">
      <div className="flex justify-center">
        <img src={img} alt="Shoes" className="w-48 " />
      </div>
      <div className="text-center mb-4 ">
        <Link
          to={`/brand/${brandName}`}
          className="duration-500 font-semibold text-primary-color text-lg"
        >
          {brandName}
        </Link>
      </div>
    </div>
  );
};

export default CarBrand;
