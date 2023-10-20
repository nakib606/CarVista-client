import Swal from "sweetalert2";
import "./MyCartCard.css";
import { AiFillStar } from "react-icons/ai";

const MyCartCard = ({ cart, carts, setCarts }) => {
  const { _id, img, name, brand, type, price, description, rating } = cart;

  const handleDelete = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://carvista-server-rdy7xmnrw-tanvirsiraj.vercel.app/addproduct/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your product has been deleted.");
              const remainingProducts = carts.filter(
                (singleCart) => singleCart._id != id
              );
              setCarts(remainingProducts);
            }
          });
      }
    });
  };

  const handleExplore = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons.fire({
      title: `${name} - ${brand}`,
      text: description,
      confirmButtonText: "close",
    });
  };

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
          <button
            onClick={handleExplore}
            className="btn bg-black border-none text-white duration-300 hover:bg-primary-color  capitalize"
          >
            Explore
          </button>
          <button
            onClick={() => handleDelete(_id)}
            className="btn bg-primary-color border-none hover:bg-red-600 text-white capitalize"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCartCard;
