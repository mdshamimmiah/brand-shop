import { Rating } from "@mui/material";
import { Link } from "react-router-dom";


const HpCard = ({card}) => {
    const { _id,name, brandName, category, price, ShortDescription, rating, image } = card
    return (
        
      
      
      
      <div>
  
  <div className="card card-compact w-full h-[800px] bg-base-100 shadow-xl">
        <figure><img  src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title mx-auto">{name}</h2>
          <p className="text-2xl font-medium">Brand Name: {brandName}</p>
          <p className="text-2xl">Category: {category}</p>
          <p className="text-3xl font-bold">Price: {price}</p>
          <p>Description: {ShortDescription}</p>
          <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
          <div className="card-actions justify-end">
           <Link to={`/hp/${_id}`}>

           <button className="btn btn-primary">Details</button>
           </Link>
          <Link to={`/updateProduct/${_id}`}>
          
          <button className="btn btn-primary">Update</button>
          </Link>
          </div>
        </div>
      </div>
      </div>
      
    );
};

export default HpCard;