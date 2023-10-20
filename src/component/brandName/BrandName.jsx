import samsung from '../../assets/samsung.png'
import apple from '../../assets/apple1.jpg'
import walton from '../../assets/walton.jpg'
import sony from '../../assets/sony1.png'
import hp from '../../assets/hp3.jpg'
import lg from '../../assets/lg.jpg'
import { Link } from 'react-router-dom'


const BrandName = () => {
  return (

    
   
  <div>

    <h1 className='text-5xl'>Our Brands </h1>
<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 ml-16 mt-10 mb-10'>

    

<Link to='/apple'>
  <div>
    <div className='bg-orange-400 w-9/12'>
      <h2 className='text-center'>APPLE</h2>
      <img className='w-[320px]' src={apple} alt="" />
    </div>
  </div>
</Link>

<Link to='/samsung'>

  <div>
    <div className='bg-orange-400 w-9/12'>
      <h2 className='text-center'>SAMSUNG</h2>
      <img className='w-[320px] h-[155px]' src={samsung} alt="" />
    </div>
  </div>


</Link>

<Link to='/walton'>
  <div>
    <div className='bg-orange-400 w-9/12'>
      <h2 className='text-center'>WALTON</h2>
      <img className='w-[320px]' src={walton} alt="" />
    </div>
  </div>

</Link>

<Link to='/sony'>

<div>
      <div className='bg-gray-500 w-9/12 '>
      <h2 className='text-center'>SONY</h2>
        <img className='w-[320px]' src={sony} alt="" />
      </div>
      </div>
</Link>

<Link to='/hp'>
<div className='bg-purple-600 w-9/12 '>
    <h2 className='text-center'>Hp</h2>
    <img className='w-[320px] h-[160px]' src={hp} alt="" />
  </div>
</Link>
 
<Link to='/lg'>
<div>
  <div className='bg-orange-400 w-9/12'>
    <h2 className='text-center'>LG</h2>
    <img className='w-[320px] h-[160px] ' src={lg} alt="" />
  </div>
</div>

</Link>

</div>
  </div>
  );
};

export default BrandName;