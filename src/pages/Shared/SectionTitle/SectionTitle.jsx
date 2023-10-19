const SectionTitle = ({ title, description }) => {
  return (
    <div className=" text-center text-black">
      <h1 className="text-2xl md:text-4xl font-semibold">{title}</h1>
      <p className="max-w-xl mx-auto text-sm md:text-base mt-2 mb-4">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
