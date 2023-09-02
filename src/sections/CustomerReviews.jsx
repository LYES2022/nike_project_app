import ReviewsCard from "../components/ReviewsCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className=" font-palanquin text-4xl font-bold text-center">
        What Our
        <span className=" text-coral-red"> Custommers </span>
        Says
      </h3>
      <p className=" text-info text-state-gray text-[#777] text-center max-w-lg mx-auto mt-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A illum,
        deleniti architecto assumenda cupiditate, iure sapiente dicta eius
        ducimus unde eos. Deleniti perferendis mollitia error suscipit
        exercitationem veniam eaque reprehenderit!
      </p>
      <div className=" mt-24 flex justify-evenly max-lg:flex-col">
        {reviews.map((review) => (
          <ReviewsCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
