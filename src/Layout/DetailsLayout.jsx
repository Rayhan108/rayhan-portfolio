import { Link, Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import styles from "../styles/styles";


const DetailsLayout = () => {
    return (
        <div className="bg-primary w-full overflow-hidden">
   
      <div className={`${styles.paddingX} py-5 ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
         <Link to="/"><button className="btn btn-outline text-white">Back to previous Page</button></Link>
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Outlet />
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
    );
};

export default DetailsLayout;