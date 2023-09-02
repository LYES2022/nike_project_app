const Button = (props) => {
  return (
    <button
      className={`flex justify-center items-center px-7 py-4 max-h-[60px] min-w-[150px]
      
    ${props.backgroundColor ? props.backgroundColor : "bg-coral-red"}
    
      
      rounded-full text-lg font-montserrat text-[20px] gap-2 ml-5 `}
    >
      {props.label}
      {props.iconUrl && (
        <img
          className="w-6 h-6 bg-blue-400 rounded-full ml-2"
          src={props.iconUrl}
        />
      )}
    </button>
  );
};

export default Button;
