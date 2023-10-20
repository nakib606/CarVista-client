import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import BrandProduct from "./BrandProduct";
import { AuthContext } from "../../context/AuthProvider";
import Slider from "./Slider";

const BrandProducts = () => {
  const { products } = useContext(AuthContext);
  console.log(products);
  const { brandname } = useParams();
  console.log(brandname);
  const [brandData, setBrandData] = useState([]);

  useEffect(() => {
    const remainingData = products.filter((data) => data.brand === brandname);
    setBrandData(remainingData);
  }, []);

  return (
    <div>
      <Slider></Slider>
      <div className="max-w-6xl mx-auto mt-12 mb-24">
        {brandData.length > 0 ? (
          <div className="mx-4 lg:mx-0">
            <SectionTitle title={`${brandname} Vehicles`}></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 mt-10">
              {brandData.map((data) => (
                <BrandProduct key={brandData._id} data={data}></BrandProduct>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-center  lg:text-2xl text-black mx-2 lg:mx-0">
            <span className="font-semibold">{brandname}</span> does not have a
            available product now...
          </p>
        )}
      </div>
    </div>
  );
};

export default BrandProducts;
