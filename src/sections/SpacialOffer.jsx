import Button from "../components/Button";

import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";

const SpacialOffer = () => {
  return (
    <section className="max-container flex justify-between items-center flex-wrap max-xl:flex-col-reverse">
      <div className=" flex-1">
        <img src={offer} />
      </div>
      <div className="fle-1 flex flex-col gap-4 max-xl:mb-11">
        <h2 className=" text-4xl font-bold font-palanquin mt-4">
          <span className=" text-coral-red ">Spacial</span> Offer
        </h2>
        <p className=" text-state-gray leading-normal text-[#777] text-xl xl:max-w-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At atque
          nesciunt delectus, corporis debitis nisi reiciendis aliquam deleniti
          veritatis obcaecati asperiores qui ipsum ullam incidunt commodi
          eveniet distinctio libero eius.
        </p>
        <p className=" text-state-gray leading-normal text-[#777] text-xl xl:max-w-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At atque
          nesciunt delectus, corporis debitis nisi reiciendis aliquam deleniti
          veritatis obcaecati asperiores qui ipsum ullam incidunt commodi
          eveniet distinctio libero eius.
        </p>
        <div className=" flex gap-4 flex-wrap mt-11">
          <Button label="Shop now" iconUrl={arrowRight} />
          <Button
            label="learn more"
            backgroundColor="bg-white text-black border-2 "
          />
        </div>
      </div>
    </section>
  );
};

export default SpacialOffer;
