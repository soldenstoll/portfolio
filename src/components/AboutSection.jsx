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
          <PhotoTextPair img="/images/personal-site-headshot.png" height={"128px"} padding={"20px"}> {/* UPDATE */}
            <p className="text-sm lg:text-base text-left"> {/* UPDATE */}
              Hello! I'm Solden, a fourth year computer science and mathematics student
              at the University of Washington Allen School, and an aspiring software engineer. I am an incoming research assistant with 
              the <a href="https://sensor.cs.washington.edu/"> Sensor Systems Lab </a> at UW. I enjoy continuous learning,
              building interesting things, and solving complex problems. Within computer science, I am interested in 
              systems programming, machine learning, and data science. Within math, my interests lie in topology, and the 
              mathematical side of machine learning. I am currently working as a TA for 
              <a href="https://sites.math.washington.edu/~m207/"> math 207 </a> with Dr. SU. In my free time I
              enjoy ski touring, hiking, and watching soccer (go Chelsea), as well as competing in triathlons. Below is more
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
            <PhotoTextPair img="/images/allen-school-logo.jpeg" height={"128px"} padding={"20px"}>  {/* UPDATE */}
              <div className="flex flex-col text-left">  {/* UPDATE */}
                <p className="text-xl text-left">University of Washington, Paul G. Allen School</p>
                <p className="text-left">B.Sc. Computer Science, B.Sc. Mathematics, 2022-2026</p>
                <div className="h-0 w-full border-[1px] border-[var(--grid-line-color)]"></div>
                <p className="text-sm lg:text-base">
                  <b>Relavent Coursework:</b> Data Structures, Algorithms, Database Internals, Systems Programming,
                  Network Programming, Data Visualization, and Machine Learning. Math coursework in Image Processing
                  and Machine Learning, Modeling, Probability Theory, Algebra, Manifolds.
                </p>
                <p className="text-sm lg:text-base">
                  <b>Honors:</b> GPA - 3.9, Putnam Exam - scored 13, ranked 820/3988. Deans List 11/11 quarters. 
                </p>
              </div>
            </PhotoTextPair>
          </div>
          
        </div>
        <div className="flex w-full min-h-16 border-[2px] border-[var(--grid-line-color)] rounded-lg">
          <div className="flex flex-col text-left w-full p-5">
            <p className="text-2xl">Skills</p>
            <div className="h-0 w-full border-[1px] border-[var(--grid-line-color)]"></div>  {/* UPDATE */}
            <p className="text-sm lg:text-base"><b>Languages:</b> Proficient in Java, Python, C/C++, SQL. Familiar with JS/TS, HTML/CSS, Golang</p>
            <p className="text-sm lg:text-base"><b>Libraries/Tools:</b> Git, Pytorch, React, Node, POSIX IO, GDB, Tailwind CSS, NumPy, Pandas, OpenAI API, Seaborn, Matplotlib</p>
            <p className="text-sm lg:text-base"><b>Software:</b> Linux, Github/Gitlab, Bitbucket, Azure, VS Code, IntelliJ, Google Colab, Google Cloud, MS Office</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
