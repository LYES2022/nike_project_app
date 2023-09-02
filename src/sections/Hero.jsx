import { useState } from "react";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";

import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";

import { shoes, statistics } from ".././constants";

import { motion } from "framer-motion";

const Hero = () => {
  const [bigShoe, setBigShoe] = useState(bigShoe1);

  const changeBigShoeHandler = (shoe) => {
    setBigShoe(shoe);
  };

  const transition = {
    duration: 2,
    type: "spring",
  };
  return (
    <section className="w-full flex xl:flex-row flex-col justify-center min-h-screen max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 max-sm:pt-4">
        <p className=" text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl font-bold max-sm:text-[70px]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className=" text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className=" font-montserrat text-state-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm ">
          Discover stylish Nike arrivals, quality comfort,and innovation for
          your active life.
        </p>
        <Button label="Shop Now" iconUrl={arrowRight} />
        <div className="flex justify-start items-start flex-wrap gap-16 mt-20">
          {statistics.map((stat) => (
            <div key={stat.label} className="">
              <p className="font-bold font-palanquin text-4xl">{stat.value}</p>
              <p className=" leading-7 text-state-gray font-montserrat ">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-cover bg-hero relative ">
        <motion.img
          initial={{
            top: "-7%%",
          }}
          whileInView={{
            top: "5%",
          }}
          transition={transition}
          className="object-contain relative z-10"
          src={bigShoe}
          alt="Big show One"
          width={610}
          height={500}
        />
        <div className="flex absolute gap-4 sm:gap-6 -bottom-[5%] ">
          {shoes.map((shoe) => (
            <div key={shoe.thumbnail}>
              <ShoeCard
                imgUrl={shoe}
                onChangeBigImg={changeBigShoeHandler}
                bigShoe={bigShoe}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
