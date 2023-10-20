import Swal from "sweetalert2";
import bg from "../../../public/ap-1.jpg";
import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
  const loaderData = useLoaderData();

  const { img, name, brand, type, price, description, rating } = loaderData;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const img = form.img.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;

    const updatedProduct = {
      img,
      name,
      brand,
      type,
      price,
      description,
      rating,
    };

    // console.log(updatedProduct);
    // sending product to server
    fetch(
      `https://carvista-server-rdy7xmnrw-tanvirsiraj.vercel.app/updated/${loaderData._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Product Updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="relative">
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
            onSubmit={handleUpdate}
            className="card-body z-10 bg-[#0707076d]  px-2 md:px-6"
          >
            <p className="text-white text-2xl md:text-3xl font-semibold ">
              Update a Car
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="form-control overflow-hidden">
                <label className="label">
                  <span className="label-text text-white text-base md:text-lg">
                    Image
                  </span>
                </label>
                <input
                  type="text"
                  defaultValue={img}
                  name="img"
                  placeholder="photo url..."
                  className="bg-transparent border-b border-b-[#757272] p-2"
                  required
                />
              </div>
              <div className="form-control overflow-hidden">
                <label className="label">
                  <span className="label-text text-white text-base md:text-lg">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder=" car name..."
                  className="bg-transparent border-b border-b-[#757272] p-2"
                  required
                />
              </div>
              <div className="form-control overflow-hidden">
                <label className="label">
                  <span className="label-text text-white text-base md:text-lg">
                    Brand
                  </span>
                </label>
                <input
                  type="text"
                  defaultValue={brand}
                  name="brand"
                  placeholder="brand..."
                  className="bg-transparent border-b border-b-[#757272] p-2"
                  required
                />
              </div>
              <div className="form-control overflow-hidden">
                <label className="label">
                  <span className="label-text text-white text-base md:text-lg">
                    Product Type
                  </span>
                </label>
                <input
                  type="text"
                  name="type"
                  defaultValue={type}
                  placeholder="type..."
                  className="bg-transparent border-b border-b-[#757272] p-2"
                  required
                />
              </div>
              <div className="form-control overflow-hidden">
                <label className="label">
                  <span className="label-text text-white text-base md:text-lg">
                    Price
                  </span>
                </label>
                <input
                  type="text"
                  defaultValue={price}
                  name="price"
                  placeholder="price..."
                  className="bg-transparent border-b border-b-[#757272] p-2"
                  required
                />
              </div>
              <div className="form-control overflow-hidden">
                <label className="label">
                  <span className="label-text text-white text-base md:text-lg">
                    Description
                  </span>
                </label>
                <input
                  type="text"
                  defaultValue={description}
                  name="description"
                  placeholder="description..."
                  className="bg-transparent border-b border-b-[#757272] p-2"
                  required
                />
              </div>
              <div className="form-control overflow-hidden">
                <label className="label">
                  <span className="label-text text-white text-base md:text-lg">
                    Rating
                  </span>
                </label>
                <input
                  type="text"
                  defaultValue={rating}
                  name="rating"
                  placeholder="rating..."
                  className="bg-transparent border-b border-b-[#757272] p-2"
                  required
                />
              </div>
            </div>

            <div className="form-control mt-10 mx-auto ">
              <button
                type="submit"
                className="btn  bg-primary-color border-none duration-300 text-white  hover:bg-white  hover:text-primary-color text-lg md:text-xl capitalize font-semibold add-btn"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default UpdateProduct;
