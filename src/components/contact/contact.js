import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiTwitterLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j4el6cq",
        "template_7vrx1q6",
        form.current,
        "3SDkjr49KoVqfftz8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>obiefuledaniel@gmail.com</h5>
            <a href='mailto:obiefuledaniel@gmail.com' target='_blank'>
              Send a message
            </a>
          </article>
          {/* <article className="contact_option">
            <RiTwitterLine className='contact_option-icon'/>
            <h4>Twitter</h4>
            <h5>Dze_Maestro</h5>
            <a href="https://twitter.com/messages/compose?recipient_id=1204566376637173760" target="_blank">Send a message</a>
          </article> */}
          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon' />
            <h4>Whatsapp</h4>
            <h5>+2348084929646</h5>
            <a href='https://wa.me/+2348084929646' target='_blank'>
              Send a message
            </a>
          </article>
        </div>
        {/* End of contact option */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='fullname' required />
          <input
            type='email'
            name='email'
            placeholder='hey@example.com'
            required
          />
          <textarea
            name='message'
            rows='7'
            placeholder='your message'
            required
          ></textarea>
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
