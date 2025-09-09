import React, { useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import "./ItemList.css";

const workData = [
  {
    name: "Job One",
    details: "This is a brief description of Project One. It uses React and Tailwind CSS.",
  },
  {
    name: "Job Two",
    details: "Project Two is a Node.js backend project that handles API requests efficiently.",
  },
];

const WorkList = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div>
      <div className="item-list-box">
        <h1>Work Experience</h1>
      </div>
      <div className="text-white">
        {workData.map((job, index) => (
          <div key={index} className="mb-2">
            <button
              onClick={() => toggleExpand(index)}
              className="flex items-center w-full focus:outline-none"
            >
              <span className="mr-2">
                {expandedIndex === index ? <FaChevronDown /> : <FaChevronRight />}
              </span>
              <span className="text-white font-medium">{job.name}</span>
            </button>
            {expandedIndex === index && (
              <div className="mt-1 ml-6 text-white">{job.details}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkList;
