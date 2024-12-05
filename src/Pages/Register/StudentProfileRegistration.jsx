import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../../firebaseConfig"; // import db from Firebase config
import { doc, setDoc } from "firebase/firestore"; // import setDoc

const StudentProfileRegistration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    studentId: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    institute: "",
    university: "",
    course: "",
    branch: "",
    passing: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleForm = async (e) => {
    e.preventDefault();
     // Show the toast with the registration warning before submitting
  alert("You can only once register yourself. Are You sure you want to register?");
    // Save data to Firestore
    try {
      // Create a reference to the document where data will be stored
      const studentRef = doc(db, "StudentProfileData", formData.studentId);

      // Set the form data to Firestore document
      await setDoc(studentRef, formData);

      // Show success toast
      toast.success("Registration successful!");
      console.log(formData);

      // Clear form after submission
      setFormData({
        firstName: "",
        middleName: "",
        lastName: "",
        studentId: "",
        email: "",
        phone: "",
        dob: "",
        gender: "",
        institute: "",
        university: "",
        course: "",
        branch: "",
        passing: "",
      });

      // Navigate to the next page (student dashboard)
      navigate("/studentdashboard");
    } catch (error) {
      // Handle any errors during Firestore write
      toast.error("Error in registration. Please try again.");
      console.error("Error adding document: ", error);
    }
  };

  return (
    <>
      {/* Go back button */}
      <div className="bg-gray-100">
        <button
          onClick={() => navigate("/studentdashboard")}
          className="bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-lg p-2 m-5"
        >
          Go back
        </button>
      </div>

      <div className="bg-gray-100 min-h-screen flex justify-center items-center">
        <div className="bg-gradient-to-r from-gray-900 to-gray-700 mt-4 mb-4 shadow-lg rounded-lg p-8 w-full max-w-3xl">
          {/* Heading */}
          <h1 className="text-3xl font-bold mb-6 text-center text-white">
            Student Register
          </h1>
          <form onSubmit={handleForm}>
            <div className="space-y-6">
              {/* Name Fields */}
              <div>
                <label htmlFor="Name" className="block text-white mb-1">
                  Name:
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInput}
                    placeholder="First"
                    className="w-1/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-cyan-700"
                  />
                  <input
                    type="text"
                    name="middleName"
                    value={formData.middleName}
                    onChange={handleInput}
                    placeholder="Middle"
                    className="w-1/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-cyan-700"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInput}
                    placeholder="Last"
                    className="w-1/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-cyan-700"
                  />
                </div>
              </div>

              {/* Additional Fields */}
              {/* Other form fields go here */}
                 {/* Student ID Field */}
              <div>
                <label htmlFor="studentId" className="block text-white mb-1">
                  Student ID:
                </label>
                <input
                  type="text"
                  name="studentId"
                  value={formData.studentId}
                  onChange={handleInput}
                  placeholder="Enter your Student ID"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-cyan-700"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-white mb-1">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInput}
                  placeholder="abc123@gmail.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-cyan-700"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-white mb-1">
                  Phone:
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInput}
                  placeholder="Mobile No."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-cyan-700"
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label htmlFor="dob" className="block text-white mb-1">
                  Date Of Birth:
                </label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInput}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-cyan-700"
                />
              </div>

              {/* Gender */}
              <div>
                <p className="text-white mb-1">Gender:</p>
                <div className="flex space-x-4">
                  <div>
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      onChange={handleInput}
                      checked={formData.gender === "male"}
                    />
                    <label htmlFor="male" className="ml-2 text-gray-200">
                      Male
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      onChange={handleInput}
                      checked={formData.gender === "female"}
                    />
                    <label htmlFor="female" className="ml-2 text-gray-200">
                      Female
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="gender"
                      value="other"
                      onChange={handleInput}
                      checked={formData.gender === "other"}
                    />
                    <label htmlFor="other" className="ml-2 text-gray-200">
                      Other
                    </label>
                  </div>
                </div>
              </div>

              {/* Institute */}
              <div>
                <label htmlFor="institute" className="block text-white mb-1">
                  Institute:
                </label>
                <input
                  type="text"
                  name="institute"
                  value={formData.institute}
                  onChange={handleInput}
                  placeholder="Institute Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-cyan-700"
                />
              </div>

              {/* University */}
              <div>
                <label htmlFor="university" className="block text-white mb-1">
                  University:
                </label>
                <input
                  type="text"
                  name="university"
                  value={formData.university}
                  onChange={handleInput}
                  placeholder="University Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-cyan-700"
                />
              </div>

              {/* Course */}
              <div>
                <label htmlFor="course" className="block text-white mb-1">
                  Course:
                </label>
                <input
                  type="text"
                  name="course"
                  value={formData.course}
                  onChange={handleInput}
                  placeholder="Course Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-cyan-700"
                />
              </div>

              {/* Branch */}
              <div>
                <label htmlFor="branch" className="block text-white mb-1">
                  Branch:
                </label>
                <input
                  type="text"
                  name="branch"
                  value={formData.branch}
                  onChange={handleInput}
                  placeholder="Branch"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-cyan-700"
                />
              </div>

              {/* Passing Year */}
              <div>
                <label htmlFor="passing" className="block text-white mb-1">
                  Passing Year:
                </label>
                <input
                  type="text"
                  name="passing"
                  value={formData.passing}
                  onChange={handleInput}
                  placeholder="Expected Passing Year"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-cyan-700"
                />
              </div>
              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-700 to-cyan-500 text-white p-2 rounded-md mt-4 hover:bg-cyan-600 focus:outline-none"
                >
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default StudentProfileRegistration;
