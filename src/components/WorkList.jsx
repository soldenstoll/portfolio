import React, { useReducer } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import "./ItemList.css";
import PhotoTextPair from "./PhotoTextPair";

const workData = [
  {
    name: <PhotoTextPair img="/images/uw-logo.png" height={"50px"} padding={"5px"}>
      <div className="align-middle text-left">
        <p className="text-base lg:text-xl">Undegraduate Research Assistant, Sensor Systems Lab</p>
        <p className="text-sm">September 2025 - Present</p>
      </div>
    </PhotoTextPair>,
    details: <p>
              Incoming research assistant in the <a href="https://sensor.cs.washington.edu/"> UW Sensor Systems Lab </a> lead by Dr. Joshua Smith."
              Using machine learning to encode visual comminication.
             </p>,
  },
  {
    name: <PhotoTextPair img="/images/uw-logo.png" height={"50px"} padding={"5px"}>
      <div className="align-middle text-left">
        <p className="text-base lg:text-xl">Course Assistant, University of Washington</p>
        <p className="text-sm">June 2025 - Present</p>
      </div>
    </PhotoTextPair>,
    details: <p>
              Course assistant for MATH 207 - Differential Equations with Dr. Su. Responsibilities
              include holding office hours and review sessions, grading assignments, proctoring exams
              and facilitating student/teach communication.
             </p>,
  },
  {
    name: <PhotoTextPair img="/images/slalom-logo.jpeg" height={"50px"} padding={"5px"}>
      <div className="align-middle text-left">
        <p className="text-base lg:text-xl">Data Science Intern, Slalom Consulting LLC</p>
        <p className="text-sm">June 2024 - Septmeber 2024</p>
      </div>
    </PhotoTextPair>,
    details:<>
            <p>
              - Developed a sales pursuit tagging pipeline to accurately group pursuits. Results were included
              in company wide reports read by executives to better understand what kinds of work were selling best.
            </p>
            <p>
              - Refactored the pipeline into modular utility functions that were later used to match acceleration tools
              to pursuits.
            </p>
            <p>
              - Built a feedback topic analysis model for managers to effeciently read feedback.
            </p>
            </>
  },
  {
    name: <PhotoTextPair img="/images/uw-logo.png" height={"50px"} padding={"5px"}>
      <div className="align-middle text-left">
        <p className="text-base lg:text-xl">Undegraduate Researcher, Univeristy of Washington Department of Mathematics</p>
        <p className="text-sm"> March 2024 - September 2025</p>
      </div>
    </PhotoTextPair>,
    details: <>
              <p>
                Worked on the following research projects:
              </p>
              <p>
                - Calculating minimal resolutions over Exterior Algebras with Jackson Morris, June 2025 - August 2025
              </p>
              <p>
                - Homotopy Theory and Algebraic Topology with Jackson Morris, March 2025 - June 2025
              </p>
              <p>
                - Wave propogation and spectral analysis of Graphs with Dr. Hadrian Quan, March 2024 - June 2024
              </p>
             </>,
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
              <span className="text-white flex w-full">{job.name}</span>
            </button>
            {state[index] && (
              <div className="mt-1 ml-6 text-white text-left text-base">{job.details}</div>
            )}
          </div>
        )})}
      </div>
    </div>
  );
};

export default WorkList;
