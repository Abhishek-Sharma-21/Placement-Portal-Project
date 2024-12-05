import  { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ApplyJobStudent() {
  const [jobs, setJobs] = useState([
    { company: "TechCorp", role: "Software Engineer", date: "2024-04-15", package: "12 LPA", status: "Open", applied: false },
    { company: "DataSys", role: "Data Analyst", date: "2024-04-18", package: "8 LPA", status: "Applied", applied: true },
    { company: "CloudTech", role: "Cloud Engineer", date: "2024-04-20", package: "15 LPA", status: "Open", applied: false },
  ]);

  const handleApply = (index) => {
    setJobs((prevJobs) =>
      prevJobs.map((job, i) =>
        i === index ? { ...job, status: "Applied", applied: true } : job
      )
    );

    // Show a success toast notification
    toast.success(`You applied for ${jobs[index].role} at ${jobs[index].company}! 🎉`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="bg-gray-100 p-6">
      <ToastContainer /> {/* Toastify container */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <tr>
              <th className="py-3 px-6 text-left">Company</th>
              <th className="py-3 px-6 text-left">Role</th>
              <th className="py-3 px-6 text-left">Date</th>
              <th className="py-3 px-6 text-left">Package</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {jobs.map((job, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">{job.company}</td>
                <td className="py-3 px-6 text-left">{job.role}</td>
                <td className="py-3 px-6 text-left">{job.date}</td>
                <td className="py-3 px-6 text-left">{job.package}</td>
                <td className="py-3 px-6 text-left">
                  <span
                    className={`py-1 px-3 rounded-full text-xs ${
                      job.status === "Open" ? "bg-green-200 text-green-600" : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {job.status}
                  </span>
                </td>
                <td className="py-3 px-6 text-left">
                  <button
                    className={`py-1 px-3 rounded-full text-xs ${
                      job.applied ? "bg-gray-300 text-gray-600" : "bg-blue-500 text-white"
                    }`}
                    disabled={job.applied}
                    onClick={() => handleApply(index)}
                  >
                    {job.applied ? "Applied" : "Apply Now"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ApplyJobStudent;
