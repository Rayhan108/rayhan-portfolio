import About from "../../../../About/About";
import SocialLinks from "../../../../SocialLinks/SocialLinks";
import Contact from "../../../Contact/Contact";
import MySkills from "../../../MySkills/MySkills";
import Hero from "../Hero/Hero";
import Project from "../Project/Project";


const Home = () => {
    return (
        <div className="">
          
            <Hero></Hero>
            <SocialLinks></SocialLinks>
            <About></About>
            <Project></Project>
            <MySkills></MySkills>
            <Contact/>
        </div>
    );
};

export default Home;