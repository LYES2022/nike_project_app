import Button from "../components/Button";

import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col"
      id="about-us"
    >
      <div className="flex flex-1 flex-col max-lg:mb-16">
        <h2 className=" text-4xl font-palanquin font-bold">
          We Provide{" "}
          <span className=" text-coral-red mt-11">Super Quality </span>
          Shoes
        </h2>
        <p className="info text-state-gray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nihil
          maiores neque voluptatibus eligendi quasi dolorem delectus minus nam
          rem! Repudiandae aperiam et soluta corrupti incidunt deleniti non, ad
          rerum?
        </p>
        <p className="info text-state-gray">
          Repudiandae aperiam et soluta corrupti incidunt deleniti non, ad
          rerum?
        </p>
        <div className=" mt-11">
          <Button label="show Details" />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="shoes8"
          width={570}
          height={522}
          className=" object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
