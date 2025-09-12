import React, { useReducer } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import "./ItemList.css";
import PhotoTextPair from "./PhotoTextPair";

const workData = [
  {
    name: <PhotoTextPair img="/images/uw-logo.png" height={"50px"} padding={"5px"}>
      <div className="align-middle text-left">
        <p className="text-xl">Course Assistand, University of Washington</p>
        <p> June 2025 - Present</p>
      </div>
    </PhotoTextPair>,
    details: "This is a brief description of Project One. It uses React and Tailwind CSS.",
  },
  {
    name: <PhotoTextPair img="/images/slalom-logo.jpeg" height={"50px"} padding={"5px"}>
      <div className="align-middle text-left">
        <p className="text-xl">Data Science Intern, Slalom Consulting LLC</p>
        <p> June 2024 - Septmeber 2024</p>
      </div>
    </PhotoTextPair>,
    details: "This is a brief description of Project One. It uses React and Tailwind CSS.",
  },
  {
    name: <PhotoTextPair img="/images/uw-logo.png" height={"50px"} padding={"5px"}>
      <div className="align-middle text-left">
        <p className="text-xl">Undegraduate Researcher, Univeristy of Washington Department of Mathematics</p>
        <p> March 2024 - September 2025</p>
      </div>
    </PhotoTextPair>,
    details: "Project Two is a Node.js backend project that handles API requests efficiently.",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "toggle":
      if (state[action.index] === undefined) {
        return {...state, [action.index]: true};
      }
      return {...state, [action.index]: !state[action.index]};
    default:
      return {};
  }
}

function WorkList() {
  const [state, dispatch] = useReducer(reducer, {});

  return (
    <div>
      <div className="item-list-box">
        <h1>Work Experience</h1>
      </div>
      <div className="text-white">
        {workData.map((job, index) => {
          return (
          <div key={index} className="mb-2">
            <button
              onClick={() => dispatch({ type: "toggle", index: index })}
              className="flex items-center w-full focus:outline-none"
            >
              <span className="mr-2">
                {state[index] ? <FaChevronDown /> : <FaChevronRight />}
              </span>
              <span className="text-white font-medium">{job.name}</span>
            </button>
            {state[index] && (
              <div className="mt-1 ml-6 text-white">{job.details}</div>
            )}
          </div>
        )})}
      </div>
    </div>
  );
};

export default WorkList;
