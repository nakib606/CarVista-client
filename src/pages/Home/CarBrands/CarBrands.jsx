import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import CarBrand from "../CarBrand/CarBrand";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const CarBrands = () => {
  const { brands } = useContext(AuthContext);
  console.log(brands);
  return (
    <div className="mx-2 lg:mx-0">
      <div className="max-w-6xl mx-auto mt-10 md:mt-20 ">
        <SectionTitle
          title="Car Brands"
          description="Carvista dealership presents an extensive collection, featuring renowned car brands such as Toyota, Ford, BMW, Mercedes-Benz, Tesla, and Honda."
        ></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand, index) => (
            <CarBrand key={index} brand={brand}></CarBrand>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarBrands;
