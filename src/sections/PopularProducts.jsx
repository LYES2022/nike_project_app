import ProductItem from "../components/ProductItem";

import { products } from "../constants";

const PopularProducts = () => {
  return (
    <section className="max-container max-sm:mt-8" id="#products">
      <div className="">
        <h1 className=" text-4xl font-bold">
          Our<span className=" text-coral-red"> Popular</span> Products
        </h1>
        <p className=" text-base text-state-gray mt-8 text-[#777] leading-5">
          experience top notch quality and style with our sought after
          selections Discover a world of confort, design,and value.
        </p>
      </div>
      <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 mt-16 ">
        {products.map((product) => (
          <div className="" key={product.name}>
            <ProductItem imgUrl={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
