import React from "react";

function HowtoStart({ img, title, desc, step }) {
  return (
    <div className="w-100 gap-10 flex flex-col py-20 justify-center items-center">
      <div className="flex relative flex-wrap gap-5 flex-col justify-center items-center">
        <h2 className="bg-black px-7 py-2 font-bold text-2xl absolute top-0 left-0 rounded-2xl">
          {step}
        </h2>
        <img className="w-80 rounded-2xl" src={img} alt="How to start" />
        <div className="flex flex-col justify-center items-center gap-5 bg-[#f7f9fb] text-black w-80 py-5 px-5 rounded-2xl">
          <h1 className="text-center text-2xl font-bold">{title}</h1>
          <p className="font-light text-center text-gray-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default HowtoStart;
