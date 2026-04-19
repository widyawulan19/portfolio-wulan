import React from "react";
import '../styles/Contact.css'
import { IoMailUnread, IoLogoGithub,  } from "react-icons/io5";

function Contact() {
  return (
    <section className="contact-container" id="contact">
      <h2>Let’s Work Together</h2>

      <p className="contact-desc">
        I’m open to new opportunities, collaborations, and projects.
        Feel free to reach out if you’d like to work together.
      </p>

      <div className="cta-group">
        <a href="mailto:widyawulan1906@gmail.com" className="btn primary">
          Get In Touch →
        </a>

        <a
          href="https://wa.me/6285123340080"
          target="_blank"
          className="btn secondary"
        >
          Chat via WhatsApp →
        </a>
      </div>

      <div className="contact-info">
        <button
            onClick={()=> window.open("https://github.com/widyawulan19","_blank")}
        >
            <IoLogoGithub/>
        </button>
        <button
            onClick={()=> window.location.href ="mailto:widyawulan1906@gmail.com"}
        >
            <IoMailUnread/>
        </button>
      </div>

      <span className="status">
        Currently open to opportunities.
      </span>
    </section>
  );
}

export default Contact;