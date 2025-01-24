import React from "react";
import Landingpage from "./Landingpage";
import Footer from "./Footer";
import DashboardLayout from "./Dashboard/Dashboardlayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./Dashboard/_Components/Profile";
import Settings from "./Dashboard/_Components/Settings";
import About from "./Dashboard/_Components/About";
import Explore from "./Dashboard/_Components/Explore";
import Home from "./Dashboard/_Components/Home";
import Createcourse from "./Create_courses/Createcourse";
import { CourseProvider } from "./Context/Coursecontext";
import CourseDetails from "/src/Create_courses/Coursedetails/CourseDetails.jsx";
import Finish from "./Create_courses/Coursedetails/_Components/Finish";
import Start from "./Create_courses/Coursedetails/_Components/Start";
// import CourseList from "./Create_courses/Coursedetails/CourseList";
import SignInSignUp from "./Authentication/SignInSignUp";
import ProtectedRoute from "./Authentication/ProtectedRoute";
import { Toaster } from 'react-hot-toast';
import AuthNotifier from "./Authentication/AuthNotifier";
import GetInTouch from "./Dashboard/_Components/HelperComponents/GetInTouch";
import { ThemeProvider } from "/src/components/ui/theme-provider.jsx"
import Warning from "/src/Warning .jsx"
import Terms from "/src/Terms.jsx"
// import CoursesList from "./Create_courses/Coursedetails/_Components/Courselist";
function App() {
  return (
    <div>
      <ThemeProvider>
      <Router>
      <Toaster position="top-center" reverseOrder={false} />
      <AuthNotifier /> {/* Global sign-in notification handler */}
        <Routes>
          {/* Landing page route */}
          <Route path="/signin" element={<SignInSignUp />} />
          <Route path="/signup" element={<SignInSignUp isSignUp />} />
          <Route path="/" element={<Landingpage />} />
{/* Helper components */}
<Route path="/Getintouch" element={<GetInTouch/>}/>
<Route path="/Policy" element={<Warning/>}/>
<Route path="/terms" element={<Terms/>}/>
          {/* Dashboard route with persistent layout */}
          <Route path="/dashboard"   element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }>
            {/*  index route to show home by default */}
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="about" element={<About />} />
            <Route path="explore" element={<Explore />} />
          

          </Route>
          <Route path="/createcourse"element={
            <CourseProvider> {/* Wrap Createcourse with CourseProvider */}
              <Createcourse />
            </CourseProvider>
          } />
           <Route path="/createcourse/:courseid" element={<CourseDetails />} />
           <Route path="/createcourse/finish/:courseId" element={<Finish />} />
           <Route path="/createcourse/start/:courseId" element={<Start />} />
           
           {/* <Route path="/create/:courseId" element={<CourseList />} /> */}
    
         </Routes>
      </Router>

      {/* <Footer/> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
