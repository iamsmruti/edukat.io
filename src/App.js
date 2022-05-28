import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import CourseList from './pages/Courses/CourseList';
import StudentReg from './pages/Registration/StudentReg';
import InstructorReg from './pages/Registration/InstructorReg';
import Instructors from './pages/More/Instructors';
import About from './pages/More/About';
import BlogPosts from './pages/More/BlogPosts';
import Contact from './pages/More/Contact';
import TermsOfUse from './pages/More/TermsOfUse';
import Referral from './pages/Referral';
import Cart from './pages/Cart';
import Dashboard from './pages/Dashboard';
import Layout from './comps/Layout';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { indigo, lightBlue } from '@mui/material/colors';
import RetrievePass from './pages/RetrievePass';

import { useState, useEffect } from 'react'

const theme = createTheme({
  palette: {
    primary: lightBlue,
    secondary: indigo
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  }
})

function App() {
  const [courses, setCourses] = useState([])
  const [instructors, setInstructors] = useState([])
  const [blogPost, setBlogPost] = useState([])
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/iamsmruti/server/courses')
      .then((res) => res.json())
      .then((data) => setCourses(data))
  }, []);

  useEffect(() => {
      fetch('https://my-json-server.typicode.com/iamsmruti/server/instructors/')
          .then((res) => res.json())
          .then((data) => setInstructors(data))
  }, []);

  useEffect(() => {
      fetch('https://my-json-server.typicode.com/iamsmruti/server/posts')
          .then((res) => res.json())
          .then((data) => setBlogPost(data))
  }, []);

  const handleAddItem = (product) => {
    setCartItems([...cartItems, product])
  }

  const handleRemoveItem = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id))
  }

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout cartItems={cartItems}>
          <Routes>
            <Route path='/' exact element={<Home courses={courses}/>} />
            <Route path='/course-list' exact element={<CourseList cartItems={cartItems} handleAddItem={handleAddItem} courses={courses}/>} />
            <Route path='/student-registration' exact element={<StudentReg />} />
            <Route path='/instructor-registration' exact element={<InstructorReg />} />
            <Route path='/instructors' exact element={<Instructors instructors={instructors}/>} />
            <Route path='/about-us' exact element={<About instructors={instructors}/>} />
            <Route path='/blog-posts' exact element={<BlogPosts blogPost={blogPost}/>} />
            <Route path='/contact-us' exact element={<Contact />} />
            <Route path='/terms-of-use' exact element={<TermsOfUse />} />
            <Route path='/referral' exact element={<Referral />} />
            <Route path='/cart' exact element={<Cart handleRemoveItem={handleRemoveItem} cartItems={cartItems}/>} />
            <Route path='/dashboard' exact element={<Dashboard />} />
            <Route path='/retrieve-password' exact element={<RetrievePass />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
