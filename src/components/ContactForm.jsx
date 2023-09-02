import Button from "./Button";

const ContactForm = () => {
  return (
    <form className="">
      <div className="flex w-full rounded-full border-2 border-solid border-[#777] p-1 max-sm:flex-col max-sm:border-none">
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="w-full rounded-full focus:outline-none max-sm:mb-6 max-sm:border-2 max-sm:p-2 "
        />
        <div className="">
          <Button label="Sign up" />
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
