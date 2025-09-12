import React from "react";

// Children is intended to be the text rendered next to the image, separated
// by a vertical line.
function PhotoTextPair({ img, height, padding, children }) {
  return (
    <div className="flex flex-row gap-8" style = {{ padding: padding }}>
      <div className="aspect-square rounded-lg overflow-hidden"
           style={{ height: height}}>
        <img src={img} className=" object-cover justify-start"></img>
      </div>
      <div className="h-full w-0 border-[var(--grid-line-color)] border-[2px]"
           style={{ height: height}}/>
      <div className="h-full flex-1" style={{ height: height}}>
        {children}
      </div>
    </div>
  );
}

export default PhotoTextPair;
