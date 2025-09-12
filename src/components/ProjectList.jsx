import React, { useReducer } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import "./ItemList.css";

const projectsData = [
  {
    name: "Project One",
    details: "This is a brief description of Project One. It uses React and Tailwind CSS.",
  },
  {
    name: "Project Two",
    details: "Project Two is a Node.js backend project that handles API requests efficiently.",
  },
  {
    name: "Project Three",
    details: "Project Three is a small Python tool for automating repetitive tasks.",
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

function ProjectList() {
  const [state, dispatch] = useReducer(reducer, {});

  return (
    <div>
      <div className="item-list-box">
        <h1>Technical Projects</h1>
      </div>
      <div className="text-white">
        {projectsData.map((project, index) => {
          return (
          <div key={index} className="mb-2">
            <button
              onClick={() => dispatch({ type: "toggle", index: index })}
              className="flex items-center w-full focus:outline-none"
            >
              <span className="mr-2">
                {state[index] ? <FaChevronDown /> : <FaChevronRight />}
              </span>
              <span className="text-white font-medium">{project.name}</span>
            </button>
            {state[index] && (
              <div className="mt-1 ml-6 text-white">{project.details}</div>
            )}
          </div>
        )})}
      </div>
    </div>
  );
};

export default ProjectList;
