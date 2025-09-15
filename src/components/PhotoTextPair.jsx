import React from "react";

// Children is intended to be the text rendered next to the image, separated
// by a vertical line.
function PhotoTextPair({ img, height, padding, children }) {
  return (
    <div className="flex flex-col w-full gap-2 items-center lg:flex-row lg:gap-8" style = {{ padding: padding }}>
      <div className="aspect-square rounded-lg overflow-hidden"
           style={{ height: height, width: height }}>
        <img src={img} className="object-cover justify-start"></img>
      </div>
      <div className="hidden lg:block h-full w-0 border-[var(--grid-line-color)] border-[2px]"/>
      <div className="h-full flex-1 self-start lg:self-auto">
        {children}
      </div>
    </div>
  );
}

export default PhotoTextPair;
