import React from "react";
import "./ItemList.css";

const AboutSection = () => {
  return (
    <div>
      <div className='item-list-box'>
        <h1>About</h1>
      </div>
      <div className="grid h-90 grid-cols-5 grid-rows-5 gap-2 place-items-stretch">
        <div className="react-grid-item  bg-[#1a1a1a] rounded-lg col-span-3 row-span-2">
          1
        </div>
        <div className="react-grid-item  bg-[#1a1a1a] rounded-lg col-span-2 row-span-2 col-start-4">2</div>
        <div className="react-grid-item  bg-[#1a1a1a] rounded-lg col-span-5 row-span-2 row-start-3">3</div>
        <div className="react-grid-item  bg-[#1a1a1a] rounded-lg col-span-5 row-start-5">4</div>
      </div>
    </div>
  );
};

export default AboutSection;
