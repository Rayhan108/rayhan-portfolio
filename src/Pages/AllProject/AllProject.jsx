import { useEffect, useState } from "react";

import { Link } from "react-router-dom";


const AllProject = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch('https://rayhan-shorker-portfolio-server.vercel.app/allProjects')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])




// card
const ProjectCard = ({pd}) => {
   
    const {name,image}=pd;
    return (
       
        <div className="rounded-lg group  text-white font-poppins p-3 bg-gradient-to-r via-gray-900 from-blue-900 to cyan-900 box-shadow  shadow-2xl h-[410px]"
        data-aos="zoom-in"
        data-aos-duration="1000"
        >
        <img className="group-hover:scale-95 " src={image[0].img1} />
          <div className="mt-3 md:p-3">
            <h2 className="card-title">{name}</h2>
           
          </div>
        <div className=" flex flex-row justify-between md:p-3">
       <div>
        
        <div className="items-center justify-center mt-3  flex flex-row gap-3">
        <div className=" ">
          <Link to={pd?.live_link}>
            {" "}
            <button className="btn  btn-primary bg-gradient-to-r from-cyan-500 to blue-900">
              Preview 
            </button>
          </Link>
        </div>
        <div>
          <Link to={pd?.client_link}>
            {" "}
            <button className="btn btn-outline btn-primary">
              Client Site
            </button>
          </Link>
        </div>
        <div>
          <Link to={pd?.server_link}>
            {" "}
            <button className="btn  btn-primary bg-gradient-to-r from-cyan-500 to blue-900">
              Server Site 
            </button>
          </Link>
        </div>
          </div>
       </div>
        </div>
        
      </div>
    );
};











    return (
        <div className="grid md:grid-cols-3 mt-36  gap-5">
            


{
    data?.map(pd=><ProjectCard key={pd?._id} pd={pd}></ProjectCard>)
}



        </div>
    );
};

export default AllProject;