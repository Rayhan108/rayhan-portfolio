import { FaGithub, FaReact, FaStripe } from "react-icons/fa";
import styles from "../../styles/styles";
import {
  SiTailwindcss,
  SiHtml5,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiJavascript,
  SiDaisyui,
} from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import { IoLogoCss3 } from "react-icons/Io";
import { DiNodejs } from "react-icons/di";
import { BiLogoNetlify, BiLogoFigma } from "react-icons/bi";

const MySkills = () => {
  return (
    <div id="skills">
      <p className="text-5xl font-bold text-center text-white mb-5 mt-10">
        My Skills
      </p>
      <h1 className="font-5xl font-poppins font-extrabold border-b-8  border-dimBlue text-white mb-10"></h1>

      <div className="grid md:grid-cols-5 grid-cols-3 gap-5"
      data-aos="zoom-in"
      data-aos-duration="1000"
      >
        <div className="flex flex-col items-center justify-center p-6 rounded-[20px] feature-card mt-5">
          <div
            className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
          >
            <SiHtml5
              size={50}
              className="object-contain w-[50%] text-orange-600"
            ></SiHtml5>
          </div>
          <div className="flex-1 flex flex-col ml-3">
            <p className="font-poppins font-normal text-dimWhite text-[16px] mt-5 leading-[24px]">
              HTML5
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-6 rounded-[20px] feature-card mt-5">
          <div
            className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
          >
            <IoLogoCss3
              size={50}
              className="object-contain w-[50%] text-blue-500"
            ></IoLogoCss3>
          </div>
          <div className="flex-1 flex flex-col ml-3">
            <p className="font-poppins font-normal text-dimWhite text-[16px] mt-5 leading-[24px]">
              CSS
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-6 rounded-[20px] feature-card mt-5">
          <div
            className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
          >
            <SiTailwindcss
              size={50}
              className="object-contain w-[50%] text-blue-800"
            ></SiTailwindcss>
          </div>
          <div className="flex-1 flex flex-col ml-3">
            <p className="font-poppins font-normal text-dimWhite text-[16px] mt-5 leading-[24px]">
              Tailwind CSS
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-6 rounded-[20px] feature-card mt-5">
          <div
            className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
          >
            <FaReact
              size={50}
              className="object-contain w-[50%] text-blue-800"
            ></FaReact>
          </div>
          <div className="flex-1 flex flex-col ml-3">
            <p className="font-poppins font-normal text-dimWhite text-[16px] mt-5 leading-[24px]">
              React
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-6 rounded-[20px] feature-card mt-5">
          <div
            className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
          >
            <BsBootstrapFill
              size={50}
              className="object-contain w-[50%] text-blue-800"
            ></BsBootstrapFill>
          </div>
          <div className="flex-1 flex flex-col ml-3">
            <p className="font-poppins font-normal text-dimWhite text-[16px] mt-5 leading-[24px]">
              Bootstrap
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-6 rounded-[20px] feature-card mt-5">
          <div
            className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
          >
            <SiJavascript
              size={50}
              className="object-contain w-[50%] text-yellow-500"
            ></SiJavascript>
          </div>
          <div className="flex-1 flex flex-col ml-3">
            <p className="font-poppins font-normal text-dimWhite text-[16px] mt-5 leading-[24px]">
              JavaScript
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-6 rounded-[20px] feature-card mt-5">
          <div
            className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
          >
            <SiExpress
              size={50}
              className="object-contain w-[50%] text-white"
            ></SiExpress>
          </div>
          <div className="flex-1 flex flex-col ml-3">
            <p className="font-poppins font-normal text-dimWhite text-[16px] mt-5 leading-[24px]">
              ExpressJS
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-6 rounded-[20px] feature-card mt-5">
          <div
            className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
          >
            <SiMongodb
              size={50}
              className="object-contain w-[50%] text-green-800"
            ></SiMongodb>
          </div>
          <div className="flex-1 flex flex-col ml-3">
            <p className="font-poppins font-normal text-dimWhite text-[16px] mt-5 leading-[24px]">
              Mongodb
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-6 rounded-[20px] feature-card mt-5">
          <div
            className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
          >
            <DiNodejs
              size={50}
              className="object-contain w-[50%] text-green-800"
            ></DiNodejs>
          </div>
          <div className="flex-1 flex flex-col ml-3">
            <p className="font-poppins font-normal text-dimWhite text-[16px] mt-5 leading-[24px]">
              NodeJS
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-6 rounded-[20px] feature-card mt-5">
          <div
            className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
          >
            <SiFirebase
              size={50}
              className="object-contain w-[50%] text-amber-500"
            ></SiFirebase>
          </div>
          <div className="flex-1 flex flex-col ml-3">
            <p className="font-poppins font-normal text-dimWhite text-[16px] mt-5 leading-[24px]">
              Firebase
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-6 rounded-[20px] feature-card mt-5">
          <div
            className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
          >
            <BiLogoNetlify
              size={50}
              className="object-contain w-[50%] text-cyan-600"
            ></BiLogoNetlify>
          </div>
          <div className="flex-1 flex flex-col ml-3">
            <p className="font-poppins font-normal text-dimWhite text-[16px] mt-5 leading-[24px]">
              Netlify
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-6 rounded-[20px] feature-card mt-5">
          <div
            className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
          >
            <BiLogoFigma
              size={50}
              className="object-contain w-[50%] text-purple-900"
            ></BiLogoFigma>
          </div>
          <div className="flex-1 flex flex-col ml-3">
            <p className="font-poppins font-normal text-dimWhite text-[16px] mt-5 leading-[24px]">
              Figma
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-6 rounded-[20px] feature-card mt-5">
          <div
            className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
          >
            <FaGithub
              size={50}
              className="object-contain w-[50%] text-white"
            ></FaGithub>
          </div>
          <div className="flex-1 flex flex-col ml-3">
            <p className="font-poppins font-normal text-dimWhite text-[16px] mt-5 leading-[24px]">
              GitHub
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-6 rounded-[20px] feature-card mt-5">
          <div
            className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
          >
            <FaStripe
              size={50}
              className="object-contain w-[50%] text-purple-500"
            ></FaStripe>
          </div>
          <div className="flex-1 flex flex-col ml-3">
            <p className="font-poppins font-normal text-dimWhite text-[16px] mt-5 leading-[24px]">
              Stripe
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-6 rounded-[20px] feature-card mt-5">
          <div
            className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
          >
            <SiDaisyui
              size={50}
              className="object-contain w-[50%] text-white"
            ></SiDaisyui>
          </div>
          <div className="flex-1 flex flex-col ml-3">
            <p className="font-poppins font-normal text-dimWhite text-[16px] mt-5 leading-[24px]">
              DaisyUI
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
