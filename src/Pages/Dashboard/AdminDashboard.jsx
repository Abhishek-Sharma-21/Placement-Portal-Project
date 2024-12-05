import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../../firebaseConfig';
import { signOut } from 'firebase/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import { db } from '../../firebaseConfig'; // Import Firestore DB
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore'; // Import Firestore methods

const AdminDashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [editingJobId, setEditingJobId] = useState(null);
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobStatus, setJobStatus] = useState('Live');
  const navigate = useNavigate();

  // Fetch jobs from Firestore on component mount
  useEffect(() => {
    const fetchJobs = async () => {
      const querySnapshot = await getDocs(collection(db, 'JobsCreatedByAdmin'));
      const jobsList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setJobs(jobsList);
    };

    fetchJobs();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newJob = {
      title: jobTitle,
      description: jobDescription,
      status: jobStatus,
    };

    try {
      if (editingJobId) {
        // Update job in Firestore
        await updateDoc(doc(db, 'JobsCreatedByAdmin', editingJobId), newJob);
        toast.success('Job updated successfully');

        // Update job in local state
        setJobs((prevJobs) =>
          prevJobs.map((job) => (job.id === editingJobId ? { ...newJob, id: editingJobId } : job))
        );
      } else {
        // Add job to Firestore
        const docRef = await addDoc(collection(db, 'JobsCreatedByAdmin'), newJob);
        newJob.id = docRef.id; // Add the ID from Firestore
        toast.success('Job added successfully');

        // After successfully adding the job to Firestore, add it to the local state
        setJobs((prevJobs) => [...prevJobs, newJob]);
      }

      // Reset form after successful addition or update
      resetForm();
    } catch (error) {
      toast.error('Error saving job: ' + error.message);
    }
  };

  const resetForm = () => {
    setJobTitle('');
    setJobDescription('');
    setJobStatus('Live');
    setEditingJobId(null);
  };

  const editJob = (job) => {
    setJobTitle(job.title);
    setJobDescription(job.description);
    setJobStatus(job.status);
    setEditingJobId(job.id);
  };

  const updateJob = async (job) => {
    try {
      // Update job in Firestore
      await updateDoc(doc(db, 'JobsCreatedByAdmin', job.id), job);

      // Update job in local state optimistically
      setJobs((prevJobs) =>
        prevJobs.map((j) => (j.id === job.id ? { ...job } : j))
      );

      toast.success('Job updated successfully');
    } catch (error) {
      toast.error('Error updating job: ' + error.message);
    }
  };

  const deleteJob = async (id) => {
    try {
      // Delete job from Firestore
      await deleteDoc(doc(db, 'JobsCreatedByAdmin', id));

      // Remove job from local state optimistically
      setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
      toast.success('Job deleted successfully');
    } catch (error) {
      toast.error('Error deleting job: ' + error.message);
    }
  };

  // Handle logout
  const handleSignOut = async () => {
    try {
      await signOut(auth);  // Sign out from Firebase
      toast.success("Signed out successfully");
      navigate("/login");  // Navigate to login page after sign-out
    } catch (error) {
      toast.error("Error signing out: " + error.message);
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gradient-to-r from-gray-900 to-gray-700 text-white p-4">
        <h2 className="text-3xl font-bold mb-4">Admin Dashboard</h2>
        <ul>
          <li className="mb-8 text-lg font-semibold">
            <NavLink to='/'>Home</NavLink>
          </li>
          <li className="mb-8 text-lg font-semibold">
          <NavLink to='/interviewAdmin'>Interview Management</NavLink>
          </li>
          <li className="mb-8 text-lg font-semibold">
          <NavLink to='/studentInfo'>Student Information</NavLink>
          </li>
          <li className="mb-8 text-lg font-semibold">
            <NavLink to='/companyAdmin'>Company Management</NavLink>
          </li>
        </ul>
        <button onClick={handleSignOut} className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-200">
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        <h2 className="text-2xl font-bold mb-10">Placement Portal</h2>

        {/* Card Component */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-8 rounded-lg shadow">
            <h3 className="text-lg font-bold">Total Jobs</h3>
            <p className="text-2xl">{jobs.length}</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow">
            <h3 className="text-lg font-bold">Live Jobs</h3>
            <p className="text-2xl">{jobs.filter((job) => job.status === 'Live').length}</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow">
            <h3 className="text-lg font-bold">Completed Jobs</h3>
            <p className="text-2xl">{jobs.filter((job) => job.status === 'Completed').length}</p>
          </div>
        </div>

        <div className="flex">
          <div className="bg-white p-6 rounded-lg shadow mb-6 w-2/3">
            <h3 className="text-xl font-bold mb-4">Create New Job</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Job Title</label>
                <input
                  className="w-full p-2 border border-gray-300 rounded"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Job Description</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded"
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Job Status</label>
                <select
                  className="w-full p-2 border border-gray-300 rounded"
                  value={jobStatus}
                  onChange={(e) => setJobStatus(e.target.value)}
                >
                  <option value="Live">Live</option>
                  <option value="Completed">Completed</option>
                  <option value="Pending">Pending</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
              <button className="bg-purple-600 text -white px-4 py-2 rounded" type="submit">
                {editingJobId ? 'Update Job' : 'Submit'}
              </button>
            </form>
          </div>

          {/* Approval Section with New Buttons */}
          <div className="bg-white p-6 rounded-lg shadow mb-6 w-1/3 ml-4">
            <h3 className="text-xl font-bold mb-4">APPROVAL</h3>
            <button
              className="bg-green-600 text-white px-4 py-2 rounded mb-2 w-full"
              onClick={() => toast.success('Description granted')}
            >
              Approved
            </button>
            <button
              className="bg-yellow-500 text-white px-4 py-2 rounded mb-2 w-full"
              onClick={() => toast.info('Description pending')}
            >
              Pending
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded w-full"
              onClick={() => toast.error('Description rejected')}
            >
              Rejected
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-4">Jobs List</h3>
          <ul>
            {jobs.map((job) => (
              <li key={job.id} className="mb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-semibold">{job.title}</h4>
                    <p>{job.description}</p>
                    <span className={`text-sm ${job.status === 'Live' ? 'text-green-600' : 'text-red-600'}`}>
                      {job.status}
                    </span>
                  </div>
                  <div>
                    <button
                      className="text-blue-500 mr-2"
                      onClick={() => editJob(job)}
                    >
                      Update
                    </button>
                    <button
                      className="text-red-500"
                      onClick={() => deleteJob(job.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminDashboard;