import { useEffect, useState } from "react";
import ProjectCard from "../../../../Shared/ProjectCard/ProjectCard";
import { Link } from "react-router-dom";


const Project = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch('https://rayhan-shorker-portfolio-server.vercel.app/allProjects')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
 
    return (
        <div>
              <p className="text-5xl font-bold text-center text-white mb-5 mt-10">
        My Projects
      </p>
      <h1 className="font-5xl font-poppins font-extrabold border-b-8  border-dimBlue text-white mb-10"></h1>
            <div className="grid md:grid-cols-3 gap-5">
                {
data?.slice(0,3).map(pd=><ProjectCard key={pd?._id} pd={pd}></ProjectCard>)
                }
            </div>
            <div className="text-right mr-3 mt-10">
                <Link to={"/allProject"}><button className="btn btn-outline btn-primary">VIEW All Project</button></Link>
            </div>
        </div>
    );
};

export default Project;