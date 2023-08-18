import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  // const [dropdownOpen, setDropdownOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setDropdownOpen(!dropdownOpen);
  // };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="flex items-center text-white text-xl font-semibold hover:underline"
            >
              <img src={logo} alt="Logo" className="w-10 h-10 mr-2" />{" "}
            </Link>

            <Link to="/" className="text-white hover:underline">
              Home
            </Link>
            <Link to="/books" className="text-white  hover:underline">
              Books
            </Link>
            <Link to="/about-us" className="text-white  hover:underline">
              About Us
            </Link>
            <Link to="/blogs" className="text-white  hover:underline">
              Blogs
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-white hover:underline">
              Sign Up / Sign In
            </Link>
            {/* { user && (
                //!  cart can be a modal or a page or a dropdown
              <Link to="/cart" className="text-white hover:underline">
              Cart
              </Link>
              
              <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-white hover:underline focus:outline-none"
              >
              <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar">  {user.name}
              </button>
              {dropdownOpen && (
                <div className="absolute top-8 right-0 bg-blue border rounded shadow-md w-40">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/logout"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                   Log Out
                  </Link>
                </div>
              )}
            </div> ): 
            <Link to="/login" className="text-white hover:underline">
              Sign Up / Sign In
            </Link> }*/}
          </div>
        </div>
      </div>
    </nav>
  );
}
