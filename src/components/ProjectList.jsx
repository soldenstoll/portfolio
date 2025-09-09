import React, { useState } from "react";
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

const ProjectList = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div>
      <div className="item-list-box">
        <h1>Technical Projects</h1>
      </div>
      <div className="text-white">
        {projectsData.map((project, index) => (
          <div key={index} className="mb-2">
            <button
              onClick={() => toggleExpand(index)}
              className="flex items-center w-full focus:outline-none"
            >
              <span className="mr-2">
                {expandedIndex === index ? <FaChevronDown /> : <FaChevronRight />}
              </span>
              <span className="text-white font-medium">{project.name}</span>
            </button>
            {expandedIndex === index && (
              <div className="mt-1 ml-6 text-white">{project.details}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
