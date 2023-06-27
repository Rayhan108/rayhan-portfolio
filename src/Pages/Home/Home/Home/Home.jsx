import SocialLinks from "../../../../SocialLinks/SocialLinks";
import MySkills from "../../../MySkills/MySkills";
import Hero from "../Hero/Hero";
import Project from "../Project/Project";


const Home = () => {
    return (
        <div className="">
          
            <Hero></Hero>
            <SocialLinks></SocialLinks>
            <Project></Project>
            <MySkills></MySkills>
        </div>
    );
};

export default Home;