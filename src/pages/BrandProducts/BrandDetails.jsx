import { useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";

const BrandDetails = () => {
  const { products } = useContext(AuthContext);
  //   console.log(products);
  const loaderData = useLoaderData();
  //   console.log(loaderData);
  const { _id, img, name, brand, type, price, description, rating } =
    loaderData;

  const handleAddToCart = (id) => {
    const selectedProduct = products.filter((product) => product._id === id);
    // console.log(selectedProduct);
    const data = {
      img,
      name,
      brand,
      type,
      price,
      description,
      rating,
    };
    // console.log(data);

    // sending product to server
    fetch("https://carvista-server-rdy7xmnrw-tanvirsiraj.vercel.app/details", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Product added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        console.log(data);
      });
  };

  return (
    <div className="max-w-6xl mx-auto mt-32 mb-10">
      <div className="mx-2 lg:mx-0  md:flex bg-white border shadow-xl rounded-lg">
        <div className="w-full md:w-1/2 relative">
          <img
            className="w-full rounded-lg bg-gray-200 h-full"
            src={img}
            alt="Album"
          />
          <p className="absolute left-3 top-2 text-primary-color font-semibold text-sm">
            {type}
          </p>
        </div>

        <div className="ps-3 pt-8 pb-4 text-left">
          <div>
            <h2 className="text-black text-lg font-semibold ">
              {name} - {brand}
            </h2>
            <p className="text-primary-color ">${price}</p>
            <p className="flex items-center gap-1">
              <AiFillStar className="text-[#FFC808] text-lg" />{" "}
              <span className=" text-black">{rating}</span>
            </p>
          </div>
          <p className="text-black mt-4">{description}</p>
          <div className="card-actions justify-start mt-6">
            <Link
              onClick={() => handleAddToCart(_id)}
              className="btn bg-primary-color border-none hover:bg-red-600 text-white capitalize"
            >
              Add To Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandDetails;
