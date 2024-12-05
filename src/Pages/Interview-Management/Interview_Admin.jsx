import  { useState } from 'react';
import { FaPlus, FaUsers, FaCalendarAlt, FaCheckCircle, FaClock, FaEdit, FaTrash } from 'react-icons/fa';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Interview_Admin = () => {
  const [CandidateData, setCandidateData] = useState({
    candidate : '',
    position : '',
    date : '',
    interviewrs : ''
  })
  const [isFormVisible, setFormVisible] = useState(false); // State for form visibility

  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };

  const handleInput = (e)=>{
    const { name, value } = e.target;
    setCandidateData((prev) => ({ ...prev, [name]: value }));
  }
  const handleSubmit = async (e)=>{
    e.preventDefault();
    const newInterviewCandidate = {
      name : 'CandidateName',
      position : 'Candidateposition',
      date : 'interviewDate',
      interviewrs : 'interviewrsName' 
    }
    try {
      const docRef = await addDoc(collection(db, 'InterviewManagementByAdmin'), newInterviewCandidate);
      newInterviewCandidate.id = docRef.id;
      toast.success('Job added successfully');
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <div className="bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Interview Management</h1>
            <p className="text-gray-600">Manage and track all interview processes in one place</p>
          </div>
          <button
            onClick={toggleFormVisibility}
            className="bg-black text-white px-4 py-2 rounded-md flex items-center"
          >
            <FaPlus className="mr-2" /> Schedule Interview
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Total Interviews</h2>
              <FaUsers />
            </div>
            <div className="text-3xl font-bold">24</div>
            <div className="text-green-500">+12% from last month</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Scheduled</h2>
              <FaCalendarAlt />
            </div>
            <div className="text-3xl font-bold">8</div>
            <div className="text-gray-500">Upcoming this week</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Completed</h2>
              <FaCheckCircle />
            </div>
            <div className="text-3xl font-bold">12</div>
            <div className="text-gray-500">This month</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Pending</h2>
              <FaClock />
            </div>
            <div className="text-3xl font-bold">4</div>
            <div className="text-gray-500">Awaiting scheduling</div>
          </div>
        </div>

        {/* Schedule Form - Only visible when isFormVisible is true */}
        {isFormVisible && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-2xl font-semibold mb-4">Schedule an Interview</h3>
            <form >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="candidate" className="text-sm font-medium text-gray-700 mb-2">Candidate Name</label>
                  <input
                  value={CandidateData.candidate}
                    onChange={handleInput}
                    id="candidate"
                    type="text"
                    className="border border-gray-300 rounded-md p-2"
                    placeholder="Enter candidate's name"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="position" className="text-sm font-medium text-gray-700 mb-2">Position</label>
                  <input
                  value={CandidateData.position}
                    onChange={handleInput}
                    id="position"
                    type="text"
                    className="border border-gray-300 rounded-md p-2"
                    placeholder="Enter the position"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="date" className="text-sm font-medium text-gray-700 mb-2">Interview Date</label>
                  <input
                  value={CandidateData.date}
                    onChange={handleInput}
                    id="date"
                    type="date"
                    className="border border-gray-300 rounded-md p-2"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="interviewers" className="text-sm font-medium text-gray-700 mb-2">Interviewers</label>
                  <input
                  value={CandidateData.interviewrs}
                    onChange={handleInput}
                    id="interviewers"
                    type="text"
                    className="border border-gray-300 rounded-md p-2"
                    placeholder="Enter interviewer's name(s)"
                  />
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <button
                
                  type="submit"
                  className="bg-black text-white px-6 py-2 rounded-md"
                >
                  Save Interview
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Interviews Table */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Candidate</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Interviewers</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">N/A </td>
                <td className="px-6 py-4 whitespace-nowrap">N/A</td>
                <td className="px-6 py-4 whitespace-nowrap">N/A</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">Scheduled</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">N/A</span>
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">N/A</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="bg-black text-white px-2 py-1 rounded-md"><FaEdit /></button>
                  <button className="bg-black text-white px-2 py-1 rounded-md"><FaTrash /></button>
                </td>
              </tr>
              {/* More rows can go here */}
            </tbody>
          </table>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Interview_Admin;
