import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"; // Import Toastify functions
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import { auth, db } from "../../firebaseConfig"; // Firebase imports
import { createUserWithEmailAndPassword } from "firebase/auth"; // Firebase Auth method
import { doc, setDoc } from "firebase/firestore"; // Firestore methods

const AdminRegister = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      // Create user with email and password using Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Get user info
      const user = userCredential.user;

      // Create a reference for the student document
      const studentDocRef = doc(db, "Admin", user.uid); // Use Firebase UID for unique document ID

      // Store user information in Firestore using setDoc
      await setDoc(studentDocRef, {
        fullName,
        email,
        createdAt: new Date(),
        userId: user.uid // Store Firebase userId
      });

      // Show success message
      toast.success("Registration successful!");

      // Redirect to login page after successful registration
      navigate("/adminlogin");

    } catch (error) {
      // Handle errors
      if (error.code === "auth/email-already-in-use") {
        toast.error("Email is already in use");
      } else {
        toast.error("Registration failed: " + error.message);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Admin Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Full Name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
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
              placeholder="Password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="confirmpassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmpassword"
              placeholder="Confirm Password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register
          </button>
        </form>

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

export default AdminRegister;
