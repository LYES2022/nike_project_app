const ShoeCard = (props) => {
  const changeImage = () => {
    if (props.imgUrl.bigShoe !== props.bigShoe) {
      props.onChangeBigImg(props.imgUrl.bigShoe);
    }
  };
  return (
    <div
      className={`border-4 rounded-xl cursor-pointer max-sm:flex-1 
      ${
        props.imgUrl.bigShoe === props.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      }
      `}
      onClick={changeImage}
    >
      <div className=" bg-card flex justify-center items-center bg-cover bg-center sm:w-30 sm:h-30 max-sm:p-4 rounded-xl max-sm:w-full ">
        <img
          src={props.imgUrl.thumbnail}
          className=" object-contain"
          alt="image collection"
          width={127}
          height={103}
        />
      </div>
    </div>
  );
};

export default ShoeCard;
