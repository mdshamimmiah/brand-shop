import { NavLink } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
        <nav className="flex">
          <header className="footer-title">Brand Shop :</header> 
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/login'>Login</NavLink>
          <NavLink to='/register'>Register</NavLink>
          <NavLink to='/addProduct'>Add Product</NavLink>
          
        </nav> 
       
       
      </footer>
    );
};

export default Footer;