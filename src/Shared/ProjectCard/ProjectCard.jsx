import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const ProjectCard = ({ pd }) => {
  const { _id, name, type, image } = pd;
  return (
    <div
      className="rounded-lg group text-white font-poppins  bg-gradient-to-r via-blue-500 from-gray-900 to blue-900 box-shadow  shadow-2xl h-[410px]"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <img className="group-hover:scale-95 " src={image[0].img1} />
      <div className="p-3 flex flex-row justify-between my-8">
        <div className="">
          <h2 className="card-title">{name}</h2>
          <div className=" p-1">
            <p className="font-bold mx-auto ">{type}</p>
          </div>
        </div>
        <div>
          <div className="items-center justify-center mt-3 flex flex-row gap-3">
            <Link to={`/details/${_id}`}>
              <button className="btn  btn-primary hover:-hue-rotate-90 bg-gradient-to-r from-cyan-500 to blue-900">
                {" "}
                <span className="text-white  font-bold">
                  View Details{" "}
                </span>{" "}
                <span className=" ">
                  <AiOutlineArrowRight size={25}></AiOutlineArrowRight>
                </span>{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
