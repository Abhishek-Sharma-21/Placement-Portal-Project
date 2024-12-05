
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Title */}
        <a href="#" className="text-3xl font-bold text-orange-500 hover:text-orange-300">
          Placement Portal
        </a>
        
        {/* Navbar Links */}
        <div className="space-x-8 ">
          <NavLink 
            exact to="/" 
            className="text-lg font-semibold hover:text-orange-400 transition duration-300"
          >
            HOME
          </NavLink>
          <NavLink 
            to="/loginpage" 
            className="text-lg hover:text-orange-400 transition duration-300"
          >
            LOGIN
          </NavLink>
          <NavLink 
            to="/register" 
            className="text-lg hover:text-orange-400 transition duration-300"
          >
            REGISTER
          </NavLink>
          <NavLink 
            to="/contact" 
            className="text-lg hover:text-orange-400 transition duration-300"
          >
            CONTACT
          </NavLink>
          <NavLink
            to="/announcement"
            className="text-lg hover:text-orange-400 transition duration-300 "
           
          >
            Announcement
            {/* <img className="ml-2" src='/announcement.svg' alt="Announcement Icon" /> */}
          </NavLink>
        </div>
      </div>

      {/* Responsive Mobile Menu */}
      <div className="md:hidden flex items-center justify-between p-4">
        <h1 className="text-3xl">Placement Portal</h1>
        <button className="text-white">
          {/* Add menu icon here */}
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
