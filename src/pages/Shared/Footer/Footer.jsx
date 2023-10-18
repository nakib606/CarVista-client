import { Link } from "react-router-dom";
import car from "../../../../public/footer-car.jpg";
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";
const Footer = () => {
  return (
    <div className="mt-20">
      <div
        style={{
          backgroundImage: `url(${car})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <footer className="px-2 lg:px-0 py-10 lg:py-24 text-white bg-[#000000CC]">
          <div className="max-w-6xl mx-auto lg:flex lg:justify-between space-y-8 lg:space-y-0">
            <nav>
              <header className="text-2xl mb-4 font-bold text-white">
                About Us
              </header>
              <p className="max-w-sm">
                CarVista, known for its automotive innovation, offers luxury
                vehicles with exceptional craftsmanship and precise engineering,
                ensuring reliability, performance, and customer satisfaction.
              </p>
            </nav>
            <nav>
              <header className="text-2xl mb-4 font-bold text-white">
                Services
              </header>
              <div className="flex flex-col">
                <a className="link link-hover">Car Maintenance</a>
                <a className="link link-hover">Repair Services</a>
                <a className="link link-hover">Car Rental</a>
                <a className="link link-hover">Customization</a>
                <a className="link link-hover">Car Wash</a>
                <a className="link link-hover">Oil Change</a>
              </div>
            </nav>
            <nav>
              <header className="text-2xl mb-4 font-bold text-white">
                Explore
              </header>
              <div className="flex flex-col">
                <a className="link link-hover">About</a>
                <a className="link link-hover">Services</a>
                <a className="link link-hover">Inventory</a>
                <a className="link link-hover">Testimonials</a>
                <a className="link link-hover">Events</a>
                <a className="link link-hover">Partners</a>
              </div>
            </nav>
            <nav>
              <header className="text-2xl mb-4 font-bold text-white">
                Contact Us
              </header>
              <div className="flex flex-col">
                <p>
                  Address: 685 Lane Drive St.
                  <br />
                  California, Auto club 33020 <br /> Phone: +010 234 7892 34{" "}
                  <br /> Fax: +010 234 7892 34 <br /> E-mail: info@quattro.com{" "}
                  <br />
                </p>
              </div>
              <div className="flex gap-2 mt-8">
                <div className="rounded-full  bg-[#111111] duration-500 cursor-pointer hover:bg-primary-color">
                  <div className="p-4">
                    <a href="https://www.youtube.com">
                      <FiYoutube />
                    </a>
                  </div>
                </div>
                <div className="rounded-full  bg-[#111111] duration-500 cursor-pointer hover:bg-primary-color">
                  <div className="p-4">
                    <a href="https://www.facebook.com">
                      <FiFacebook />
                    </a>
                  </div>
                </div>
                <div className="rounded-full  bg-[#111111] duration-500 cursor-pointer hover:bg-primary-color">
                  <div className="p-4">
                    <a href="https://www.twitter.com">
                      <FiTwitter />
                    </a>
                  </div>
                </div>
                <div className="rounded-full  bg-[#111111] duration-500 cursor-pointer hover:bg-primary-color">
                  <div className="p-4">
                    <a href="https://www.instagram.com">
                      <FiInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </footer>
      </div>

      <div className="bg-black">
        <footer className="  py-4  max-w-6xl mx-auto text-white border-none text-center">
          <p>© 2023 carVista. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
