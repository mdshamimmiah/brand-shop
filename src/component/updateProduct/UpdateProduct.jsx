import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {

    const update = useLoaderData();
    const {_id,name, brandName, category, price, ShortDescription, rating, image} = update;

const handleUpdateProduct = event => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const brandName = form.brandName.value;
    const category = form.category.value;
    const price = form.price.value;
    const ShortDescription = form.ShortDescription.value;
    const rating = form.rating.value;
    const image = form.image.value;
    const UpdateProduct = {name, brandName, category, price, ShortDescription, rating, image}
    console.log(UpdateProduct);


    // send data to the server

    fetch(`https://brand-shop-server-six-beta.vercel.app/product/${_id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(UpdateProduct)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.modifiedCount> 0){
            Swal.fire({
                title: 'Success!',
                text: 'Product updated Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
    })
}
    
   
    return (
        <div className="bg-[#F4F3F0] p-24">
          <h2 className="text-3xl font-extrabold">Update Product</h2>
            <form onSubmit={handleUpdateProduct}>
              {/* first */}
              <div className="md:flex mb-8">
                  <div className="form-control md:w-1/2">
                      <label className="label">
                          <span className="label-text">Name</span>
                      </label>
                      <label className="input-group">
  
                          <input type="text" name="name" defaultValue={name} placeholder="name" className="input input-bordered w-full" />
                      </label>
                  </div>
                  <div className="form-control md:w-1/2 ml-4">
                      <label className="label">
                          <span className="label-text">Brand Name</span>
                      </label>
                      <label className="input-group">
  
                          <input type="text" name="brandName" defaultValue={brandName} placeholder="Brand name" className="input input-bordered w-full" />
                      </label>
                  </div>
              </div>
              {/* second */}
              <div className="md:flex mb-8">
                  <div className="form-control md:w-1/2">
                      <label className="label">
                          <span className="label-text">Category</span>
                      </label>
                      <label className="input-group">
  
                          <input type="text" name="category" defaultValue={category} placeholder="category" className="input input-bordered w-full" />
                      </label>
                  </div>
                  <div className="form-control md:w-1/2 ml-4">
                      <label className="label">
                          <span className="label-text">Price</span>
                      </label>
                      <label className="input-group">
  
                          <input type="text" name="price" defaultValue={price} placeholder="price" className="input input-bordered w-full" />
                      </label>
                  </div>
              </div>
              {/* third */}
              <div className="md:flex mb-8">
                  <div className="form-control md:w-1/2">
                      <label className="label">
                          <span className="label-text">Short Description</span>
                      </label>
                      <label className="input-group">
  
                          <input type="text" name="ShortDescription" defaultValue={ShortDescription} placeholder="short description" className="input input-bordered w-full" />
                      </label>
                  </div>
                  <div className="form-control md:w-1/2 ml-4">
                      <label className="label">
                          <span className="label-text">Rating</span>
                      </label>
                      <label className="input-group">
  
                          <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered w-full" />
                      </label>
                  </div>
              </div>
              {/* four */}
              <div className="mb-8">
                  <div className="form-control md:w-full">
                      <label className="label">
                          <span className="label-text">Image</span>
                      </label>
                      <label className="input-group">
  
                          <input type="text" name="image" defaultValue={image} placeholder="image url" className="input input-bordered w-full" />
                      </label>
                  </div>
                  
              </div>
              
              <input type="submit" value="Update Product" className="btn btn-block bg-black text-white" />
          </form>
        </div>
      );
};

export default UpdateProduct;