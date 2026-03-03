import React from "react";

const Card = ({ number, image, para, buttonText, buttonColor }) => {
  return (
    <div className="relative w-[300px] h-[645px] rounded-3xl overflow-hidden flex-shrink-0">
      
      {/* Image */}
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Number */}
      <div className="absolute top-8 left-8 w-10 h-10 bg-white rounded-full flex items-center justify-center font-semibold">
        {number}
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-8 text-white">
        
        <p className="text-xl leading-normal mr-14 mb-14">
          {para}
        </p>

        <div className={`${buttonColor} rounded-full px-6 py-3 flex items-center justify-between w-[80%]`}>
          <span className="font-medium capitalize">{buttonText}</span>
          <span className="text-xl">→</span>
        </div>

      </div>
    </div>
  );
};

export default Card;