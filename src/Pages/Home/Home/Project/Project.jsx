import { useEffect, useState } from "react";
import ProjectCard from "../../../../Shared/ProjectCard/ProjectCard";


const Project = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch('https://rayhan-shorker-portfolio-server.vercel.app/allProjects')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
 
    return (
        <div>
            <div className="grid md:grid-cols-3 gap-5">
                {
data?.slice(0,3).map(pd=><ProjectCard key={pd?._id} pd={pd}></ProjectCard>)
                }
            </div>
            <div className="text-right mr-3 mt-10"><button className="btn btn-outline btn-primary">VIEW All Project</button></div>
        </div>
    );
};

export default Project;