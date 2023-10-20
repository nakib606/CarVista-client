import bg from "../../../public/ap-1.jpg";
import "./AddProduct.css";

const AddProduct = () => {
  const handleAddAProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const img = form.img.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;

    const product = { img, name, brand, type, price, description, rating };
    console.log(product);

    // sending product to server
    fetch("http://localhost:5000/addproduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
            onSubmit={handleAddAProduct}
            className="card-body z-10 bg-[#0707076d]  px-2 md:px-6"
          >
            <p className="text-white text-2xl md:text-3xl font-semibold ">
              Add a Car
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
                  name="rating"
                  placeholder="rating..."
                  className="bg-transparent border-b border-b-[#757272] p-2"
                  required
                />
              </div>
            </div>

            <div className="form-control mt-10 mx-auto ">
              <button className="btn  bg-primary-color border-none duration-300 text-white  hover:bg-white  hover:text-primary-color text-lg md:text-xl capitalize font-semibold add-btn">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default AddProduct;
