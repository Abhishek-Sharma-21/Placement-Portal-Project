
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-8">
       <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
        <h3 className="text-2xl font-semi mb-4">GET IN TOUCH</h3>
        <p className="text-sm mb-4">
          If you have any questions about the services we provide, simply use the email address below. We try to respond to all queries.
        </p>
        <div className="flex items-center">
        <i className="fa-solid fa-map-location mr-2"></i>
          <p>Pilibhit Bypass Rd, M.J.P Rohilkhand University, Bareilly, Uttar Pradesh 243006</p>
        </div>
      </div>
      <div className=' text-xl leading-loose'>
          <ul>
            <li>
              <NavLink className="text-white hover:text-orange-400 mb-2 transition duration-300" to='/privacypolicy' onClick={() => window.scrollTo(0, 0)}>
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink className="text-white hover:text-orange-400 mb-2 transition duration-300" to='/termsconditions' onClick={() => window.scrollTo(0, 0)}>
                Terms & Conditions
              </NavLink>
            </li>
            <li>
              <NavLink className="text-white hover:text-orange-400 mb-2 transition duration-300" to='/contact' onClick={() => window.scrollTo(0, 0)}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
    </div>
    <div className="border-t border-orange-500 mt-8 pt-4 text-center text-sm">
    &copy; {new Date().getFullYear()} Placement Automation System. All rights reserved.

    </div>

    </footer>
  );
};

export default Footer;
