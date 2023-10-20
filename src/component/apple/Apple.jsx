import { useLoaderData } from "react-router-dom";
import AppleCard from "./AppleCard";
import Slider from "../slider/Slider";


const Apple = () => {
    const products = useLoaderData();
    const filter = products.filter(p => p.brandName.includes('Apple'))

    return (
        <div className="mx-auto">
              <Slider></Slider>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5 w-9/12 mx-auto mt-10">
        {
            filter?.map(data => <AppleCard key={data._id} card={data}></AppleCard> )
          }
        </div>
         
        </div>
    );
};

export default Apple;