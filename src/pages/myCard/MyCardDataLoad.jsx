import Swal from "sweetalert2";


const MyCardDataLoad = ({MyCard, addToCard, setAddToCard }) => {
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
     
       fetch(`https://brand-shop-server-six-beta.vercel.app/myCard/${_id}`, {
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
          const remaining = addToCard.filter(MyCardDataLoad => MyCardDataLoad._id !==_id);
          setAddToCard(remaining);
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
    <p className="text-2xl">Price: {price}</p>
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