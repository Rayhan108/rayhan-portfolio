import styles from "../../../../styles/styles";
import img from "../../../../assets/heroImg.jpeg";
import { Typewriter } from 'react-simple-typewriter'
import TextSpan from "./TextSpan";

const Hero = () => {
  const text1 = "Hello, this  is";
  const text3 = "I'm a";
const typeWriter=["Web Developer" ,"Mern Stack Developer","Frontend Developer"]

  return (
    <div className={`flex md:flex-row flex-col bg-frame ${styles.paddingY}`}>
   
      <div className="className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`} md:h-[800px] md:w-[800px]  " >
        <div className="  md:mt-16">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            {text1.split("").map((letter, id) => (
              <TextSpan
                key={id}
            
              >
                {letter===" "?"\u00A0":letter}{" "}
              </TextSpan>
            ))}
            <br className="sm:block hidden" />{" "}
            <span className="text-gradient">
             Rayhan Shorker
            </span>{" "}
            <br className="sm:block hidden" />
            <span className=" ">
              {" "}
              {text3.split("").map((letter, id) => (
                <TextSpan
                  key={id}
                  
                >
                 {letter===" "?"\u00A0":letter}{" "}
                </TextSpan>
              ))}{" "}
            </span>{" "}
            <br className="sm:block hidden" />
  
       <span className="text-gradient">     <Typewriter
        
        words={typeWriter}
        loop={100}
        cursor
        cursorStyle='_'
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
 
      />
      </span>{" "}
     
          </h1>
          {/* <div className=" md:mr-4 mr-0">
            <button className="btn btn-primary btn-lg md:mt-12">
              Contact Me
            </button>
          </div> */}
        </div>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img  src={img} alt="billing" className=" w-[100%] rounded-2xl relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    
    </div>
  );
};

export default Hero;
