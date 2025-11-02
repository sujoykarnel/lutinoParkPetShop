import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div className="mx-auto text-center my-4 px-4 md:w-4/12">
      <h2 className="border-b-8 rounded-b-4xl text-2xl py-2 border-yellow-400 text-[#9C8F80]  font-bold uppercase">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
