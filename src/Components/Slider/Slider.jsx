import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const Slider = ({data}) => {
  console.log(data?.image[0]?.img1);
    return (
        <div>
            <Carousel >
         <div>
             <img src={data?.image[0]?.img1} />
          
            
         </div>
         <div>
             <img src={data?.image[0]?.img1} />
       
            
         </div>
         <div>
             <img src={data?.image[0]?.img1} />
         
             
         </div>
         <div>
             <img src={data?.image[0]?.img1} />
       
            
         </div>
  
        
     </Carousel>  
        </div>
    );
};

export default Slider;