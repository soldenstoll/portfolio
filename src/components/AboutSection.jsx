import React from "react";
import "./ItemList.css";
import PhotoTextPair from "./PhotoTextPair";

const AboutSection = () => {
  return (
    <div>
      <div className='item-list-box'>
        <p className="text-3xl lg:text-5xl">About</p>
      </div>
      <div className="flex min-h-90 flex-col gap-2">
        <div className="flex border-[2px] border-[var(--grid-line-color)] rounded-lg">
          <PhotoTextPair img="/images/about-photo.jpg" height={"128px"} padding={"20px"}>  {/* UPDATE About picture in this line */}
            <p className="text-sm lg:text-base text-left">  {/* UPDATE About below */}
              Hello! I'm Solden, a fourth year computer science and mathematics student
              at the University of Washington Allen School. I am currenlty a Machine Learning
              Engineer Intern at Trase Systens and an undegraduate reseacher in the 
              <a href="https://sites.math.washington.edu/ai/">&nbsp;UW Math AI Lab</a>. 
              Within math, my interests lie in topology, probability and financial math, and the 
              mathematical side of machine learning. In computer science, my interests are in data science
              and visualization, as well as systems programming. In my free time I
              enjoy endurance sports, ski touring, hiking, climbing, and watching soccer (go Chelsea). Below is more
              information about my previous work experience, projects, and skills.
            </p>  
          </PhotoTextPair>
        </div>
        <div className="flex flex-col w-full min-h-16 border-[2px] border-[var(--grid-line-color)] rounded-lg">
          <div className="px-5">
            <p className="text-2xl text-left pt-5">Education</p>
            <div className="h-0 w-full border-[1px] border-[var(--grid-line-color)]"></div>
          </div>
          <div className="flex">
            <PhotoTextPair img="/images/allen-school-logo.jpeg" height={"128px"} padding={"20px"}>  {/* UPDATE Education picture in this line */}
              <div className="flex flex-col text-left">  {/* UPDATE Education below */}
                <p className="text-xl text-left">University of Washington, Paul G. Allen School</p>
                <p className="text-left">B.Sc. Computer Science, B.Sc. Mathematics, 2022-2026</p>
                <div className="h-0 w-full border-[1px] border-[var(--grid-line-color)]"></div>
                <p className="text-sm lg:text-base">
                  <b>Relavent Coursework:</b> Graduate Statistical Methods, Graduate Machine Learning, Algorithms, Computer Vision, 
                  Systems Programming, Network Programming, Operating Systems, Data Visualization, and Database Internals. 
                  Math coursework in The Art of Problem Solving, Image Processing and Machine Learning, Discrete Modeling, 
                  Probability Theory, Analysis, Algebra, Graduate Manifolds.
                </p>
                <p className="text-sm lg:text-base">
                  <b>Honors:</b> GPA - 3.9, Putnam Exam - scored 13, ranked 820/3988 in 2024, tbd in 2025, Deans List 13/13 quarters (counting summers). 
                </p>
              </div>
            </PhotoTextPair>
          </div>
          
        </div>
        <div className="flex w-full min-h-16 border-[2px] border-[var(--grid-line-color)] rounded-lg">
          <div className="flex flex-col text-left w-full p-5">
            <p className="text-2xl">Skills</p>
            <div className="h-0 w-full border-[1px] border-[var(--grid-line-color)]"></div>  {/* UPDATE Skills below */}
            <p className="text-sm lg:text-base"><b>Languages:</b> Java, Python, R, C/C++, SQL JS/TS, HTML/CSS</p>
            <p className="text-sm lg:text-base"><b>Libraries/Tools:</b> Git, Pytorch, React, Node, POSIX IO, GDB, Tailwind CSS, NumPy, Pandas, OpenAI API, Seaborn, Matplotlib</p>
            <p className="text-sm lg:text-base" id="projects"><b>Software:</b> Linux, Github/Gitlab, Google Cloud, MS Office</p> {/* id=projects set for scroll navigation */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
