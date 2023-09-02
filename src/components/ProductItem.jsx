import { FaStar } from "react-icons/fa";

const ProductItem = (props) => {
  return (
    <div className=" max-sm:mb-4">
      <div className=" rounded-xl mb-4">
        <img className="" src={props.imgUrl.imgURL} alt={props.imgUrl.name} />
      </div>
      <div>
        <div className="flex">
          <FaStar size={30} className=" text-coral-red " />
          <span className="text-[#777] ml-3">(4.5)</span>
        </div>
        <h3 className=" font-bold text-xl my-2 font-palanquin">
          {props.imgUrl.name}
        </h3>
        <span className="text-coral-red font-montserrat text-[22px] font-[500]">
          {props.imgUrl.price}
        </span>
      </div>
    </div>
  );
};

export default ProductItem;
