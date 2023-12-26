import Lottie from "lottie-react";
import animate from "../assets/aboutLottie.json";
import useTitle from "../hooks/useTitle";
import { useState } from "react";
import styles from "../styles/styles";

const About = () => {
  useTitle("About");
 const paragraphStyle={
    
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: "-webkit-box",
    
  
  }

  const [isOpen,setIsOpen]=useState(false);
  return (
    <>
      <p className="text-5xl font-bold text-center text-white mb-5 mt-10">
        About Me
      </p>
      <h1 className="font-5xl font-poppins font-extrabold border-b-8  border-dimBlue text-white mb-10"></h1>

      <div
        id="about"
        className={`${!isOpen && styles.marBot} xl:mt-12 flex md:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        {/* lottie */}
        <div className="text-center md:mt-16 mt-1  md:w-1/3">
          <Lottie
            className=""
            animationData={animate}
            loop={true}
            height={100}
            width={100}
          />
        </div>

        <div className="flex-[0.75] bg-black-100 p-8 rounded-2xl md:w-1/2 my-5">
          <div className="p-3 leading-6 ">
            <p
            
              style={isOpen ?null:paragraphStyle}
              className={`text-white font-poppins ${!isOpen && styles.marTop}`}
            >
              <span className="font-bold">My name is Rayhan Shorker.</span>
              Currently I studied City University at CSE Depertment . My
              passionate sector is web development. HTML was taught in ICT
              syllabus in our college. Since then I felt atraction towards web
              development.So that i decided to admit web development course in
              programmimg hero and I made a decision to finish the course within
              6 months and fulfill my first mission of fulfilling my dream that
              i was able to do.Now my aim is to further my skills and knowledge
              by getting a job or internship.In future i want to be a skilled
              full stack developer. I am hardworking and also i am a first
              learner because i was completed my web development course in 6
              month and i submitted 12 assignment before ending the
              deadline.Sometimes i would be frustrated doing this assignment.I
              was stuck but i never give up and then finally i have done and i
              enjoy this fillings much more.
            </p>

<button onClick={()=>setIsOpen(!isOpen)} className="btn btn-primary  bg-gradient-to-r from-cyan-500 to to-blue-900 mr-3">{isOpen?'Read Less':"Read More"}</button>

            <a href="#contact">
              <button className="btn hover:-hue-rotate-90 mt-5 btn-primary bg-gradient-to-r from-cyan-500 to blue-900">
                Contact Me{" "}
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
