import React from 'react';
import PageHeader from '../ui/PageHeader';
import Courses from './Courses';
import './courses.css';


const CoursesList = ({courses}) => {
    return (
      <>
      <PageHeader headerText = 'Courses Available'/>
      <section className='courses-content'>
        {courses.map((course) => (
          <React.Fragment key={course.Id}>
            <Courses course={course}/>
          </React.Fragment>
        ))}
      </section>
      </>
    );
};

export default CoursesList;