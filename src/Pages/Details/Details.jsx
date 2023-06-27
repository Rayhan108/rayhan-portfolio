import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "../../Components/Slider/Slider";


const Details = () => {
    const {id} = useParams()
    // console.log(id);
    const [data,setData]=useState()
    useEffect(()=>{
        fetch(`https://rayhan-shorker-portfolio-server.vercel.app/projects/${id}`)
        .then(res=>res.json())
        .then(data=>{setData(data)
      
        }
        
        )
    },[id])
    // console.log(data);
    // eslint-disable-next-line no-unused-vars
    // const {_id,name,type,server_link,client_link,live_link,image,technology,feature}=data;
    return (
        <div>
            <Slider data={data}></Slider>
        </div>
    );
};

export default Details;