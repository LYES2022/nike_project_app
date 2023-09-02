import ContactForm from "../components/ContactForm";

const Subscribe = () => {
  return (
    <section className=" flex flex-1 max-lg:flex-col justify-evenly items-center max-container">
      <h2 className=" text-3xl font-bold max-lg:first:mb-8">
        Sign Up For
        <span className=" text-coral-red"> Updates</span> & NewsLeter
      </h2>
      <ContactForm />
    </section>
  );
};

export default Subscribe;
