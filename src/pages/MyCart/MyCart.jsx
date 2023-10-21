import { useEffect, useState } from "react";
import MyCartCard from "./MyCartCard";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const MyCart = () => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch(" https://carvista-server-ppyu3j9u7-tanvirsiraj.vercel.app/details")
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-32 mb-20">
      {carts.length > 0 ? (
        <div className="mx-4 lg:mx-0">
          {carts ? (
            <SectionTitle
              title="Your Vehicles"
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
      ) : (
        <p className="text-center  lg:text-2xl text-black mx-2 lg:mx-0">
          You did not added any product yet...
        </p>
      )}
    </div>
  );
};

export default MyCart;
