// import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const ProjectCard = ({ pd }) => {
  const { _id, name, type, image } = pd;
  return (
    <div
      className="rounded-lg  text-black font-poppins  bg-white box-shadow  shadow-2xl   "
    
    >
      <div className="box">
      <img className="" src={image[0].img1} />
      </div>
      <div className="p-3 flex flex-row justify-between my-8">
        <div className="">
          <h2 className="card-title">{name}</h2>
          <div className=" p-1">
            <p className="font-bold mx-auto ">{type}</p>
          </div>
        </div>
        <div>
          <div className="items-center justify-center mt-3  flex flex-row  gap-3">
          <Link to={`/detailsLayout/details/${_id}`}>
              <button className="btn  btn-primary hover:-hue-rotate-90 bg-gradient-to-r from-cyan-500 to blue-900 text-white  font-bold">
              
                  View Details{" "}
               
             
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
