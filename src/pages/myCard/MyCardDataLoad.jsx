import Swal from "sweetalert2";


const MyCardDataLoad = ({MyCard}) => {
    const { _id,name, brandName, category, price, ShortDescription, rating, image } = MyCard;

const handleDelete = _id => {
  console.log(_id);
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
     
       fetch(`http://localhost:5000/myCard/${_id}`, {
        method: 'DELETE'
       })
       .then(res => res.json())
       .then(data => {
         console.log(data);
    
       if (data.deletedCount > 0) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
         )
  
       }
      })
    }
  })

}


    return (
        <div>
           <div className="card w-96 h-[800px] bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{brandName}</h2>
    <p className="text-3xl">Price: {price}</p>
    <p className="text-2xl">Category: {category}</p>
    <p>{ShortDescription}</p>
    <div className="card-actions justify-end">
      <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button>
    </div>
  </div>
</div> 
        </div>
    );
};

export default MyCardDataLoad;