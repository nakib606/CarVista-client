import { Swiper, SwiperSlide } from "swiper/react";
import bg1 from "../../../public/LoginRegister/1.jpg";
import bg2 from "../../../public/LoginRegister/2.jpg";
import bg3 from "../../../public/banner.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";
// import required modules
import { Pagination, Navigation, Keyboard } from "swiper/modules";

const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="sp  relative">
          <img className="h-full" src={bg1} />
          <div className="text text-xs lg:text-base w-full lg:max-w-3xl">
            <p className="text-center">
              Discover pure exhilaration with our latest model, redefining
              luxury and power at CarVista. Elevate your journey with
              cutting-edge technology, unmatched performance, and timeless
              elegance. Experience driving perfection today.
            </p>
          </div>
          <div className="overlay"></div>
        </SwiperSlide>
        <SwiperSlide className="sp relative">
          <img className="h-full" src={bg2} />
          <div className="text text-xs lg:text-base w-full lg:max-w-3xl">
            {" "}
            <p className="text-center">
              Introducing the epitome of style, our sleek design seamlessly
              blends sophistication and performance at CarVista. Unleash your
              drive with dynamic features and unparalleled comfort. Embrace
              automotive excellence now.
            </p>
          </div>
          <div className="overlay"></div>
        </SwiperSlide>
        <SwiperSlide className="sp relative">
          <img className="h-full" src={bg3} />
          <div className="text text-xs lg:text-base w-full lg:max-w-3xl">
            <p className="text-center">
              Experience the future of driving with our revolutionary model,
              embodying innovation and sustainability at CarVista. Embrace
              eco-conscious luxury without compromising performance. Join the
              movement towards a greener tomorrow.
            </p>
          </div>
          <div className="overlay"></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
