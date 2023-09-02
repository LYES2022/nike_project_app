const Card = (props) => {
  console.log(props);
  return (
    <section className="p-8 rounded-lg bg-[#FFFDFF] shadow-3xl flex-1 sm:w-[350px] sm:min-w-[350px] w-full">
      <div className="flex justify-start items-center my-4">
        <img
          src={props.imgURL}
          alt="icon"
          className=" bg-red-500 rounded-full p-2"
          width={50}
          height={50}
        />
      </div>
      <h2 className="mb-4 font-palanquin font-bold text-2xl">{props.label}</h2>
      <p className=" text-state-gray leading-normal text-[#777] break-words">
        {props.subtext}
      </p>
    </section>
  );
};

export default Card;
