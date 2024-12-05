import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import PrivacyPolicy from './Extra/PrivacyPolicy';
import TermsConditions from './Extra/TermsConditions';
import Contact from './components/Contact';
import LoginPage from './Pages/login/LoginPage';
import StudentLogin from './Pages/login/StudentLogin';
import AdminLogin from './Pages/login/AdminLogin'
import PlacementOfficerLogin from './Pages/login/PlacementOfficerLogin'
import StudentRegister from './Pages/Register/StudentRegister';
import StudentDashboard from './Pages/Dashboard/StudentDashboard'
import ApplyJobStudent from './Pages/Dashboard/ApplyJobStudent';
import AdminDashboard from './Pages/Dashboard/AdminDashboard';
import StudentProfileRegistration from './Pages/Register/StudentProfileRegistration';
import Interview_Student from './Pages/Interview-Management/Interviews_Student'
import AdminRegister from './Pages/Register/AdminRegister';
import Interview_Admin from './Pages/Interview-Management/Interview_Admin';
 const App = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Footer section */}
        <Route path='/privacypolicy' element={<PrivacyPolicy />} />
        <Route path='/termsconditions' element={<TermsConditions />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/loginpage' element={<LoginPage/>}/>
        <Route path='/studentlogin' element={<StudentLogin/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/placementlogin' element={<PlacementOfficerLogin/>}/>
        <Route path='/studentregister' element={<StudentRegister/>}/>
        <Route path='/studentdashboard' element={<StudentDashboard/>}/>
        <Route path='/applyjob' element={<ApplyJobStudent/>}/>
        <Route path='/admindashboard' element={<AdminDashboard/>}/>
        <Route path='/StudentProfileRegistration' element={<StudentProfileRegistration/>}/>
        <Route path='/interviews-student' element={<Interview_Student/>}/>
        <Route path='/adminregister' element={<AdminRegister/>}/>
        <Route path='/interviewAdmin' element={<Interview_Admin/>}/>
        </Routes>
      <Footer />
    </>
  )
}

export default App