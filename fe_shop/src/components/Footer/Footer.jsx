import React from "react";
import Button from "../Shared/Button";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaLocationArrow,
  FaPhone,
} from "react-icons/fa";
const FooterLinks = [
  {
    title: "Home",
    link: "#",
  },
  {
    title: "About",
    link: "#About",
  },
  {
    title: "Contact",
    link: "#Contact",
  },
  {
    title: "Blog",
    link: "#Blog",
  },
];
const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* company details  */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              TShop
            </a>
            <p className="text-gray-600 dark:text-white/70 lg:pr-24 pt-3">
              Lorem 12e33eafsdfasdfdsfasfd,
              fasdfasdfasfsadfsdfasdfsdafasdfEmadf.dafsfsdfdgff
            </p>
            <p className="text-gray-500 mt-4">Made with Love by TTrung</p>
            <a className="inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full">
              Visit our Youtube Channel
            </a>
          </div>
          {/* Footer links  */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-white duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-white duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* company address  */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Address Company
              </h1>
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Trung,Binh Dinh, Viet Nam</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <FaPhone />
                  <p>+84 564739374</p>
                </div>
              </div>
              {/* social links  */}
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagramSquare className="text-3xl hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl hover:text-primary duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
