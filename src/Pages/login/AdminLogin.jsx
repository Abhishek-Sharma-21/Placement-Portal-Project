import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../../firebaseConfig"; // Firebase imports
import { signInWithEmailAndPassword } from "firebase/auth"; // Firebase Auth method

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Handle login form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sign in user with email and password
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      // Get user information from userCredential
      const user = userCredential.user;

      // Optionally, you can use the user information like UID, email, etc.
      console.log("Admin User ID:", user.uid);
      console.log("Admin User Email:", user.email);

      // If successful, show a success message
      toast.success("Login successful!");

      // Redirect to the admin dashboard or home page
      navigate("/admindashboard");

    } catch (error) {
      // Handle errors during login
      if (error.code === "auth/user-not-found") {
        toast.error("No user found with this email.");
      } else if (error.code === "auth/wrong-password") {
        toast.error("Incorrect password.");
      } else {
        toast.error("Login failed: " + error.message);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email..."
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password..."
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-600">
            New Admin?{" "}
            <NavLink
              to="/adminregister"
              className="text-blue-500 hover:underline"
            >
              Register
            </NavLink>
          </span>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="w-full bg-red-500 text-white py-2 rounded-lg mt-4 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Go Back
        </button>
      </div>

      {/* ToastContainer to render toasts */}
      <ToastContainer />
    </div>
  );
};

export default AdminLogin;
