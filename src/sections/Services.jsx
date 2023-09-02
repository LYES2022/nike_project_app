import Card from "../components/Card";

import { services } from "../constants";

const Services = () => {
  return (
    <section
      className=" max-container flex flex-wrap justify-center gap-9"
      id="#about-us"
    >
      {services.map((service) => (
        <Card key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
