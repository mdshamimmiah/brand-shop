
import { useLoaderData } from "react-router-dom";


const Ponno = () => {

 
    const phones = useLoaderData();
    console.log(phones);
    const {name, brandName, category, price, ShortDescription, rating, image} = phones;

 
    


    return (

      

        <div>
          <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={image} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl">Information:</h2>
    <p>{ShortDescription}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Add To Card</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Ponno;