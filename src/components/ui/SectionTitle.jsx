const SectionTitle = ({ title }) => {
  return (
    <div>
      <div className=" inline-block">
        <h1 className=" text-base md:text-xl capitalize   font-semibold ">
          {title}
        </h1>
        <div className=" bg-primary-color  p-[2px] rounded-sm mb-2 w-full inline-block "></div>
      </div>
    </div>
  );
};

export default SectionTitle;
