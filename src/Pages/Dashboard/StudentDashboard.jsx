import { useState, useEffect } from "react";
import { auth, db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const StudentDashboard = () => {
  const navigate = useNavigate();
  const [studentData, setStudentData] = useState([]);
  const showToast = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // Add an empty dependency array to ensure fetchData is called only once on component mount
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const docRef = collection(db, "StudentProfileData");
      const docSnap = await getDocs(docRef);
      const data = docSnap.docs.map((doc) => doc.data());
      console.log(data);
      setStudentData(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  
  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out from Firebase
      showToast("Logged out successfully!");
      navigate("/loginpage"); // Redirect to login page after successful logout
    } catch (error) {
      console.error("Error signing out: ", error);
      showToast("Error signing out!");
    }
  };
  return (
    <div className="flex min-h-screen font-sans bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/5 bg-gray-800 text-white p-6 mb-8 mt-8 text-xl">
        <h2 className="text-orange-500 text-2xl font-bold">Student Dashboard</h2>
        <nav className="mt-6">
          <ul className="space-y-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 font-bold"
                    : "text-white hover:text-orange-500"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/StudentProfileRegistration"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 font-bold"
                    : "text-white hover:text-orange-500"
                }
              >
                Register Your Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/interviews-student"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 font-bold"
                    : "text-white hover:text-orange-500"
                }
              >
                Interviews
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/apply"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 font-bold"
                    : "text-white hover:text-orange-500"
                }
              >
                Apply
              </NavLink>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="w-full text-white bg-red-600 hover:bg-red-500 p-2 rounded-lg"
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-6">
          Welcome,
          {studentData.length > 0 ? studentData[0].firstName : "loading..."}
        </h2>

        {/* Student Info Section */}
        <section>
          <h3 className="text-xl font-bold mb-4">Student Information</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Student ID */}
            <div className="bg-white p-4 rounded-lg shadow-md text-gray-800">
              <h3 className="text-lg font-semibold">Student ID</h3>
              <p className="mt-2 text-gray-500">
                {studentData.length > 0 ? studentData[0].studentId : "loading..."}
              </p>
            </div>

            {/* Student Name */}
            {/* Student Name */}
            <div className="bg-white p-4 rounded-lg shadow-md text-gray-800">
              <h3 className="text-lg font-semibold">Student Name</h3>
              <p className="mt-2 text-gray-500">
                {studentData.length > 0
                  ? `${studentData[0].firstName} ${
                      studentData[0].middleName || ""
                    } ${studentData[0].lastName}`
                  : "loading..."}
              </p>
            </div>

            {/* Email */}
            <div className="bg-white p-4 rounded-lg shadow-md text-gray-800">
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="mt-2 text-gray-500">
                {studentData.length > 0 ? studentData[0].email : "loading..."}
              </p>
            </div>

            {/* Phone */}
            <div className="bg-white p-4 rounded-lg shadow-md text-gray-800">
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="mt-2 text-gray-500">
                {studentData.length > 0 ? studentData[0].phone : "loading..."}
              </p>
            </div>

            {/* Degree */}
            <div className="bg-white p-4 rounded-lg shadow-md text-gray-800">
              <h3 className="text-lg font-semibold">Degree</h3>
              <p className="mt-2 text-gray-500">
                {studentData.length > 0 ? studentData[0].course : "loading..."}
              </p>
            </div>
             {/* Branch */}
          <div className="bg-white p-4 rounded-lg shadow-md text-gray-800">
            <h3 className="text-lg font-semibold">Branch</h3>
            <p className="mt-2 text-gray-500">
              {studentData.length > 0 ? studentData[0].branch : "loading..."}
            </p>
          </div>

          {/* Passing Year */}
          <div className="bg-white p-4 rounded-lg shadow-md text-gray-800">
            <h3 className="text-lg font-semibold">Passing Year</h3>
            <p className="mt-2 text-gray-500">
              {studentData.length > 0 ? studentData[0].passing : "loading..."}
            </p>
          </div>
          </div>
        </section>

        {/* Interview Status Section */}
        <section className="mt-10">
          <h3 className="text-xl font-bold mb-4">Interview Status</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              className="bg-blue-500 text-white p-4 rounded-lg text-center shadow-md cursor-pointer"
              onClick={() => showToast("Total Interviews: 0")}
            >
              <h4 className="font-semibold">Total Interviews</h4>
              <p className="text-2xl font-bold">0</p>
            </div>
            <div
              className="bg-green-500 text-white p-4 rounded-lg text-center shadow-md cursor-pointer"
              onClick={() => showToast("Scheduled Interviews: 0")}
            >
              <h4 className="font-semibold">Scheduled Interviews</h4>
              <p className="text-2xl font-bold">0</p>
            </div>
            <div
              className="bg-yellow-500 text-white p-4 rounded-lg text-center shadow-md cursor-pointer"
              onClick={() => showToast("Completed Interviews: 0")}
            >
              <h4 className="font-semibold">Completed Interviews</h4>
              <p className="text-2xl font-bold">0</p>
            </div>
          </div>
        </section>
      </main>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default StudentDashboard;
