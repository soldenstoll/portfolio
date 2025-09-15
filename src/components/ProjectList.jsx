import React, { useReducer } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import "./ItemList.css";

const projectsData = [
  {
    name: "Goal Animation and Soccer Stats Web App",
    details: <>
              <p>
                Built PyTorch models predicting goal probability (xG/xGOT) and player-based goal probability. Currently building a full
                stack web app around it for coaches and players to calculate xG based on their shots, compare xG for different
                famous players, and display 3D animated models of past goals. Using Three.js for animation, and a custom built
                RESTful API backend using Go and Gin.
              </p>
             </>,
  },
  {
    name: "Multiplayer Network Tic-Tac-Toe",
    details: <>
              <p>
                Designed and implemented a clientt-server architecture for a multiplayer termincal Tic-Tac-Toe game.
                Built a high-performance custom C++ server handling game state, syncrhonization, and player sessions,
                as well as a lightweight python client program using POSIX socket APIs for cross-device connectivity.
                Currently expanding to support game rooms to allow multiple games to occur synchronously.
              </p>
             </>,
  },
  {
    name: "TKE Website",
    details: <>
              <p>
                Codeveloped <a href="https://uwtke.beer">uwtke.beer</a>. Indicidual contributions include
                utilizing the Google Maps JS API to provide streetview viewing and directions, devoloping the Rush page
                animating components, and refactoring elements for better mobile viewing.
              </p>
             </>,
  },
  {
    name: "Automated Assignment Reminder",
    details: <>
              <p>
                Created a pyton script to automatically create reminders for course assignments on MacOS
                devices. Created in response to the large amount of excercises in CSE 333. Can be generalized
                to create reminders based on data from any website, and instructions/code can be found on my
                <a href="https://github.com/soldenstoll/uw-cse-assignment-reminder"> Github</a>.
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
              <span className="text-white text-base lg:text-xl text-left">{project.name}</span>
            </button>
            {state[index] && (
              <div className="mt-1 ml-6 text-white text-left text-sm lg:text-base">{project.details}</div>
            )}
          </div>
        )})}
      </div>
    </div>
  );
};

export default ProjectList;
