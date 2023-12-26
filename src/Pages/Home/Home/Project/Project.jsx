import { useEffect, useState } from "react";
import ProjectCard from "../../../../Shared/ProjectCard/ProjectCard";
import { FaSpinner } from "react-icons/fa";



const Project = () => {
    const [data,setData]=useState([]);
    const [loader,setLoader]=useState(true);
const [isShow,setIsShow]=useState(false);
    useEffect(()=>{
        fetch('https://rayhan-shorker-portfolio-server.vercel.app/allProjects')
        .then(res=>res.json())
        .then(data=>setData(data))
        setLoader(false)
    },[])
 
    return (
   <>
   
   {loader?
        <div className="flex items-center justify-center h-32">
 <FaSpinner className="animate-spin text-white text-4xl" />
</div>   
     : 
        <div id="project">
              <p className="text-5xl font-bold text-center text-white mb-5 mt-10">
        My Projects
      </p>
      <h1 className="font-5xl font-poppins font-extrabold border-b-8  border-dimBlue text-white mb-10"></h1>
    {    !isShow &&    <div className="grid md:grid-cols-3 gap-5">
                {
data?.slice(0,3).map(pd=><ProjectCard key={pd?._id} pd={pd}></ProjectCard>)
                }
            </div>}
    {    isShow &&    <div className="grid md:grid-cols-3 gap-5">
                {
data?.map(pd=><ProjectCard key={pd?._id} pd={pd}></ProjectCard>)
                }
            </div>}
            <div className="text-right mr-3 mt-10">
           
                <button onClick={()=>setIsShow(!isShow)} className="btn btn-outline btn-primary">{isShow?'Show Less':'Show More'}</button>
            </div>
        </div>
}
   
   </>
    );
};

export default Project;