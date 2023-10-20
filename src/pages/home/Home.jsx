import Banner from "../../component/banner/Banner";
import BrandName from "../../component/brandName/BrandName";
import Footer from "../../component/footer/Footer";
import Banner2 from "./Banner2";
import Banner3 from "./Banner3";



const Home = () => {
    return (
        <div>
           
           <Banner></Banner>
           
            <BrandName></BrandName>

            <Banner2></Banner2>
            <Banner3></Banner3>
         
            <Footer></Footer>
        </div>
    );
};

export default Home;