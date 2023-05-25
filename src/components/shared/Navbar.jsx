import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return(
    <>
    <div className='name'>
    <h1 className='app-title'> WestCoast <br/> <span>Education</span></h1>
  </div>


<div className='nav'>
  <ul className='navigation'>
    <li><Link className='nav-link' to='/'>Home</Link></li>
    <li><Link className='nav-link' to='/courses'>Courses</Link></li>
    <li><Link className='nav-link' to='/contact'>Contact</Link></li>
  </ul>
</div>
</>

  );
};

export default Navbar;