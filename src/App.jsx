import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CoursesList from "./components/courses/CoursesList";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import Contact from "./components/contact/Contact";
import './assets/css/site.css'



const App = () => {
  return(
  <BrowserRouter>
    <Navbar/>
    <section>
      <Routes>
        <Route path='/' element={ < Home /> }/>
        <Route path='/courses' element={ <CoursesList/> }/>
        <Route path='/contact' element={ < Contact /> }/>
      </Routes>
    </section>
    <Footer/>
  </BrowserRouter>
  );
};
  

export default App;