
import Swal from 'sweetalert2'
const AddProduct = () => {

const handleAddProduct = event => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const brandName = form.brandName.value;
    const category = form.category.value;
    const price = form.price.value;
    const ShortDescription = form.ShortDescription.value;
    const rating = form.rating.value;
    const image = form.image.value;
    const newAddProduct = {name, brandName, category, price, ShortDescription, rating, image}
    console.log(newAddProduct);


    // send data to the server

    fetch('https://brand-shop-server-six-beta.vercel.app/product', {
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
      <div className="bg-[#F4F3F0] p-24"  data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500">
        <h2 className="text-3xl font-extrabold">Add Product</h2>
          <form onSubmit={handleAddProduct}>
            {/* first */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="name" placeholder="name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Brand Name</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="brandName" placeholder="Brand name" className="input input-bordered w-full" />
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

                        <input type="text" name="category" placeholder="category" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="price" placeholder="price" className="input input-bordered w-full" />
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

                        <input type="text" name="ShortDescription" placeholder="short description" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
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

                        <input type="text" name="image" placeholder="image url" className="input input-bordered w-full" />
                    </label>
                </div>
                
            </div>
            
            <input type="submit" value="Add Product" className="btn btn-block bg-black text-white" />
        </form>
      </div>
    );
};

export default AddProduct;