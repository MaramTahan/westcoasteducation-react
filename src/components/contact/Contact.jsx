import PageHeader from '../ui/PageHeader';
import './contact.css';


const Contact = () => {
  return(
    <>
    <div className='contact-page'>
    <PageHeader headerText = 'Contact us'/>
    <p>If you want to inquire about anything or register for the course, please fill out the following form</p>
    </div>

    <div className='contact-container'>
    <form action="">
      <div className="form-control">
        <label htmlFor="firstName">FirstName</label>
        <input type="text" name="firstName"/>
      </div>
      <div className="form-control">
        <label htmlFor="lastName">LastName</label>
        <input type="text" name="lastName"/>
      </div>
      <div className="form-control">
        <label htmlFor="email">E-post</label>
        <input type="email" name="email"/>
      </div>
      <div className="form-control">
        <label htmlFor="message">Message</label>
        <textarea name="message" id="" cols="30" rows="10"> 
        </textarea>
      </div>
      <button className="btn" type="submit">Send</button>
    </form>
    </div>
    </>
  );

};

export default Contact;