import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../firebase/AuthProvider";


const SamsungDetails = () => {
  const phones = useLoaderData();
  console.log(phones);
  const {name, brandName, category, price, ShortDescription, rating, image} = phones;


  // Local
  const { user } = useContext(AuthContext);
  const email = user.email;
  const handleAddProduct = () => {
  
    const newAddProduct = {name, brandName, category, price, ShortDescription, rating, image, email}
    console.log(newAddProduct);


    // send data to the server

    fetch('https://brand-shop-server-six-beta.vercel.app/myCard', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newAddProduct)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'product Added Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
    })
}

  


  return (

    

      <div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
<figure><img src={image} alt="Album"/></figure>
<div className="card-body">
  <h2 className="card-title text-2xl">Information</h2>
  <p>Unfortunately, many businesses don’t anticipate a customer’s keen ability to find what they’re looking for online. As consumers go from page to page to compare costs and other aspects of product descriptions, they get bored seeing the same old details about an item. They look for products that pique their interest and prove to them that the specific product or service can benefit their lives.</p>
  <div className="card-actions justify-end">
    <button onClick={handleAddProduct} className="btn btn-primary">ADD TO CARD</button>
  </div>
</div>
</div>
      </div>
  );
};

export default SamsungDetails;