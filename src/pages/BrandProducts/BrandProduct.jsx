import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const BrandProduct = ({ data }) => {
  const { _id, img, name, brand, type, price, description, rating } = data;

  return (
    <div className="car-card   bg-white shadow-md border rounded-lg relative">
      <div className="w-60 mx-auto h-36 ">
        <img className="w-full h-full" src={img} alt="Shoes" />
      </div>
      <p className="absolute left-3 top-2 text-primary-color font-semibold text-sm">
        {type}
      </p>
      <div className="p-3">
        <h2 className="text-black text-lg font-semibold ">
          {name} - {brand}
        </h2>
        <p className="text-primary-color ">${price}</p>
        <p className="flex items-center gap-1">
          <AiFillStar className="text-[#FFC808] text-lg" />{" "}
          <span className=" text-black">{rating}</span>
        </p>
        <div className="card-actions justify-between mt-6">
          <Link
            to={`/details/${_id}`}
            className="btn bg-black border-none text-white duration-300 hover:bg-primary-color  capitalize"
          >
            Details
          </Link>
          <Link
            to={`/update/${_id}`}
            className="btn bg-primary-color border-none hover:bg-red-600 text-white capitalize"
          >
            Update
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BrandProduct;
