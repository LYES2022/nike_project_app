import { FaStar } from "react-icons/fa";

const ReviewsCard = (props) => {
  return (
    <div className=" flex flex-col gap-3 justify-center items-center max-lg:first:mb-8">
      <div className=" flex justify-center items-center">
        <img
          src={props.imgURL}
          alt={props.customerName}
          width={120}
          height={120}
          className=" object-contain rounded-full"
        />
      </div>
      <p className="text-center max-w-md text-[#777] text-state-gray p-4">
        {props.feedback}
      </p>
      <div className="flex ">
        <FaStar size={30} className=" text-coral-red" />
        <span className=" ml-2">(4.5)</span>
      </div>
      <h3 className=" font-bold text-xl">{props.customerName}</h3>
    </div>
  );
};

export default ReviewsCard;
