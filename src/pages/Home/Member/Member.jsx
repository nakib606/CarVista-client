import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";
import "./Member.css";

const Member = ({ member }) => {
  const { name, image, Designation } = member;
  return (
    <div className="card member-outer relative    text-white border shadow-md ">
      <figure>
        <img
          className="rounded-full w-32 h-32 absolute border-8 border-[#fff]"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body  mt-10  mx-auto">
        <h2 className=" text-primary-color font-semibold text-lg text-center">
          {name}
        </h2>
        <p className="text-center text-sm text-black font-semibold">
          {Designation}
        </p>
        <div className="flex gap-2 mt-4">
          <div className="rounded-full  bg-[#111111] social-icon">
            <div className="p-4">
              <a href="https://www.youtube.com">
                <FiYoutube />
              </a>
            </div>
          </div>
          <div className="rounded-full  bg-[#111111] social-icon">
            <div className="p-4">
              <a href="https://www.facebook.com">
                <FiFacebook />
              </a>
            </div>
          </div>
          <div className="rounded-full  bg-[#111111] social-icon">
            <div className="p-4">
              <a href="https://www.twitter.com">
                <FiTwitter />
              </a>
            </div>
          </div>
          <div className="rounded-full  bg-[#111111] social-icon ">
            <div className="p-4">
              <a href="https://www.instagram.com">
                <FiInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
