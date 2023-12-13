import Banner from "../../component/banner/Banner";
import BrandName from "../../component/brandName/BrandName";
import Footer from "../../component/footer/Footer";
import Banner2 from "./Banner2";
import Banner3 from "./Banner3";
import Testimonial from "./Testimonial";



const Home = () => {
    return (
        <div  data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
           
           <Banner></Banner>
           
            <BrandName></BrandName>

            <Banner2></Banner2>
            <Testimonial></Testimonial>
            <Banner3></Banner3>
         
            <Footer></Footer>
        </div>
    );
};

export default Home;