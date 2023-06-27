import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "../../Components/Slider/Slider";
import Feature from "../../Components/Confiq/Feature/Feature";

import { SiSymantec } from "react-icons/si";

import styles from "../../styles/styles";
import { FaArrowRight, FaGithub } from "react-icons/fa";

const Details = () => {
  const { id } = useParams();
  // console.log(id);
  const [data, setData] = useState();
  useEffect(() => {
    fetch(`https://rayhan-shorker-portfolio-server.vercel.app/projects/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [id]);
  console.log(data);
  // eslint-disable-next-line no-unused-vars
  // const {_id,name,type,server_link,client_link,live_link,image,technology,feature}=data;

  const Technology = ({ f }) => {
    return (
      <div>
        <div className="flex flex-row p-6 rounded-[20px] feature-card mt-5">
          <div
            className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
          >
            <SiSymantec
              size={23}
              className="object-contain w-[50%] text-white"
            ></SiSymantec>
          </div>
          <div className="flex-1 flex flex-col ml-3">
            <p className="font-poppins font-normal text-dimWhite text-[16px] mt-5 leading-[24px]">
              {f}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Slider data={data}></Slider>
      {/* button */}
      <div className="flex flex-row gap-5 md:ml-[480px] mt-10  ">
        <div className=" ">
          <Link to={data?.live_link}>
            {" "}
            <button className="btn btn-outline btn-primary">
              Preview <FaArrowRight></FaArrowRight>
            </button>
          </Link>
        </div>
        <div>
          <Link to={data?.client_link}>
            {" "}
            <button className="btn btn-outline btn-primary">
              Client Site<FaGithub size={23}></FaGithub>
            </button>
          </Link>
        </div>
        <div>
          <Link to={data?.server_link}>
            {" "}
            <button className="btn btn-outline btn-primary">
              Server Site <FaGithub size={23}></FaGithub>
            </button>
          </Link>
        </div>
      </div>
      {/* technology */}

      <p className="text-5xl font-bold text-white mb-5 mt-10">
        Technology Used
      </p>
      <h1 className="font-5xl font-poppins font-extrabold border-b-8  border-dimBlue text-white mb-10"></h1>
      <div className="grid md:grid-cols-5 ml-3">
        {data?.technology?.map((f) => (
          <Technology key={f?._id} f={f}></Technology>
        ))}
      </div>

      {/* feature */}
      <p className="text-5xl font-bold text-white mb-5 mt-10">Feature</p>
      <div>
        <h1 className="font-5xl font-poppins font-extrabold border-b-8 mb-10 border-dimBlue text-white"></h1>
        {data?.feature?.map((f) => (
          <Feature key={f?._id} f={f}></Feature>
        ))}
      </div>
    </div>
  );
};

export default Details;
