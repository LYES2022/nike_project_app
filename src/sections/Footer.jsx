import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { headerLogo } from "../assets/images";
import { footerLinks } from "../constants";
import FooterItems from "../components/FooterItems";

const Footer = () => {
  return (
    <section className=" max-container" id="#contact-us">
      <div className=" flex flex-1 justify-between gap-10 max-xl:flex-col">
        {/* <div className=" flex justify-between items-center gap-10"> */}
        <div className=" flex justify-between flex-col gap-8">
          <div>
            <img src={headerLogo} alt="Footer logo" className="" />
          </div>
          <p className=" text-state-gray leading-norma max-w-md text-[#777]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id,
            minima? Laborum magni suscipit obcaecati tenetur fuga maxime labore
            ducimus, unde iusto veritatis autem fugiat vero at repellat.
            Distinctio, sit sapiente.
          </p>
          <div className="flex justify-start items-center mb-14">
            <div className=" bg-white flex justify-center items-center w-[50px] h-[50px] rounded-full mr-5">
              <FaFacebookF size={20} className="" />
            </div>
            <div className=" bg-white flex justify-center items-center w-[50px] h-[50px] rounded-full mr-5">
              <FaTwitter size={20} className="" />
            </div>
            <div className=" bg-white flex justify-center items-center w-[50px] h-[50px] rounded-full mr-5">
              <FaInstagram size={20} className="" />
            </div>
          </div>
        </div>
        <div className=" flex flex-1 justify-between max-md:flex-col">
          {footerLinks.map((item) => (
            <FooterItems key={item.title} {...item} />
          ))}
        </div>
      </div>
      <div className=" flex justify-between items-center mt-24 max-sm:flex-col max-sm:text-center">
        <span className=" text-[#777]">Copyright All right Reserved</span>
        <span className=" text-[#777]">Terms & Conditions</span>
      </div>
    </section>
  );
};

export default Footer;
