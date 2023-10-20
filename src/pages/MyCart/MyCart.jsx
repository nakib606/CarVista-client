import { useEffect, useState } from "react";
import MyCartCard from "./MyCartCard";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const MyCart = () => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/addproduct")
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-32 mb-20">
      <div className="mx-4 lg:mx-0">
        {carts ? (
          <SectionTitle
            title="Available Vehicles"
            description="Find your perfect vehicles that you dreamed of."
          ></SectionTitle>
        ) : (
          ""
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 mt-10">
          {carts.map((cart) => (
            <MyCartCard
              key={cart._id}
              cart={cart}
              carts={carts}
              setCarts={setCarts}
            ></MyCartCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCart;
