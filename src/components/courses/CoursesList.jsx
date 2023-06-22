//---------------------------------------
//this import for connect with rest api
import { useEffect, useState } from "react";
import axios from "axios";
//----------------------------------------
import React from 'react';
import PageHeader from '../ui/PageHeader';
import Courses from './Courses';
import './courses.css';


const CoursesList = () => {
  //from here make the connect with the Rest Api to upload data from courses-api.json and not from our react app.
  const [ courses, setCourses] = useState([]);
  const url ='http://localhost:5020/api/1/courses';
  
  useEffect(() => {
    const loadCourses = async() => {
      const { data } = await axios.get(url);
      
      setCourses(data);
    };
    loadCourses();
    
  }, []);
  //----------------to here---------------
    return (
      <>
      <PageHeader headerText = 'Courses Available'/>
      <section className='courses-content'>
        {courses.map((course) => (
          <React.Fragment key={course.id}>
            <Courses course={course}/>
          </React.Fragment>
        ))}
      </section>
      </>
    );
};

export default CoursesList;