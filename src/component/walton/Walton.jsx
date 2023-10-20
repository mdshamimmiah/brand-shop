import { useLoaderData } from "react-router-dom";
import Slider from "../slider/Slider";
import WaltonCard from "./WaltonCard";


const Walton = () => {
    const products = useLoaderData();
    const filter = products.filter(p => p.brandName.includes('Walton'))

    return (
        <div>
              <Slider></Slider>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5 w-9/12 mx-auto mt-10">
        {
            filter?.map(data => <WaltonCard key={data._id} card={data}></WaltonCard> )
          }
        </div>
         
        </div>
    );
};

export default Walton;