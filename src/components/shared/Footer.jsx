import './footer.css';


const Footer = () => {
  return(
    <>
    <div className="footer-cotent">
    <div className="footer-up">
      <div className="name">
        <h1 className="app-title-footer">WestCoast <br/> <span>Education</span></h1>
      </div>
      <div className="icon">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-twitter"></i>
        </div>
    </div>
    <hr/>
    <div className="footer-down">
      <p>
      WestCoastEducation@gmail.com | 0700551099 | Nasaret18,Varberg
      </p>
    </div>
    </div>
    
    </>
  );

}
export default Footer;