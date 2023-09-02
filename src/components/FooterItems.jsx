const FooterItems = (props) => {
  return (
    <div className=" flex flex-col max-md:w-full max-md:items-center ">
      <h2 className=" text-white mb-6 text-2xl font-bold">{props.title}</h2>
      <ul className=" flex flex-col justify-start gap-2 max-md:mb-8  max-md:items-center">
        {props.links.map((link) => (
          <li key={link.name}>
            <a href={link.link} className=" text-[#777]">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterItems;
