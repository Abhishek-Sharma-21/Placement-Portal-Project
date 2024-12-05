
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="container mx-auto p-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Login</h1>
          <p className="text-gray-600">Select your role to continue</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Student Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img
              src="https://storage.googleapis.com/a1aa/image/3gElBgeqZPzBMiuzFneMkBMlUh1oHlgldJnzFxELJGnSegsnA.jpg"
              alt="Circular avatar representing a student"
              className="mx-auto mb-4 rounded-full"
              width="100"
              height="100"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Student</h2>
            <p className="text-gray-600 mb-4">Access your student portal</p>
            <Link
              to="/studentlogin"
              className="inline-block text-white py-2 px-4 rounded bg-blue-500 hover:bg-blue-600"
            >
              Login as Student
            </Link>
          </div>

          {/* Admin Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img
              src="https://storage.googleapis.com/a1aa/image/ibU3gB3XX3q3HBE1ZHeJCv9A3peJNeBgVkmBbe0GGPxP5BZPB.jpg"
              alt="Circular avatar representing an admin"
              className="mx-auto mb-4 rounded-full"
              width="100"
              height="100"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Admin</h2>
            <p className="text-gray-600 mb-4">Manage the system</p>
            <Link
              to="/adminlogin"
              className="inline-block text-white py-2 px-4 rounded bg-green-500 hover:bg-green-600"
            >
              Login as Admin
            </Link>
          </div>

          {/* Placement Officer Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img
              src="https://storage.googleapis.com/a1aa/image/y4jXFlWIK9IMGNs13cwnjBQPoMTgKYcWjhfuAGpPbaXKPI7JA.jpg"
              alt="Circular avatar representing a placement officer"
              className="mx-auto mb-4 rounded-full"
              width="100"
              height="100"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Placement Officer</h2>
            <p className="text-gray-600 mb-4">Access placement resources</p>
            <Link
              to="/placementlogin"
              className="inline-block text-white py-2 px-4 rounded bg-red-500 hover:bg-red-600"
            >
              Login as Placement Officer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
