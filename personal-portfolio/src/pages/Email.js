import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Email.css';

const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tbdgxf8', 'template_n3w8l7l', form.current, 'vXBj4v6SOthYOfYIR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="user_name" />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea name="message" rows={8}/>
        </div>
          <input type="submit" value="Send" className="btn" />
      </form>
    </div>
  );
};

export default Email