// import { Link } from 'react-router-dom';
import './courses.css';
import CourseBox from '../ui/CourseBox';


const Courses = ({course}) => {
  return(
    <CourseBox key = {course.Id}>
      <div className = "course-text">
      <h2 class="course-name">{course.name}</h2>
        <ul>Course Number:
        <li>{course.courseNumber}</li>
        <br/>
        </ul>

        <ul>Start Date:
        <li>{course.startDate}</li>
        <br/>
        </ul>

        <ul>End Date:
        <li>{course.endDate}</li>
        <br/>
        </ul>

        <ul>Place Of Study:
        <li>{course.placeStudy}</li>
        <br/>
        </ul>

        <ul>Teacher:
        <li>{course.teacher}</li>
        <br/>
        </ul>
        
      </div>
</CourseBox>

  )

};

export default Courses;