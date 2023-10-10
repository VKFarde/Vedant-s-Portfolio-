import { useState, useEffect, useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef(null);
  const formRef = useRef(null);
  const [send, setsend] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setsend(false);
      }
    };
    if (send) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [send]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ne39asq",
        "template_a7ctch7",
        form.current,
        "xsd5_xo58OcIHTrds"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setsend(false);
  };
  return (
    <>
      <div id="contact" className="contact">
        <div className="cont-con">
          <div>
            <span>{`What’s Next?`}</span>
            <h1>Get In Touch</h1>
            <p>
              {`
          Since I'm currently unemployed and actively searching for
          opportunities, my inbox is always open. Whether you have questions or
          you're interested in potential job offers, please don't hesitate to
          reach out. I'm here to assist and respond promptly to your inquiries!`}
            </p>
            <button onClick={() => setsend(true)}>Say Hello</button>
          </div>
        </div>
      </div>
      {send && (
        <div className="contact-form" ref={formRef}>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              placeholder="Enter your Name"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email Address"
              required
            />
            <textarea name="message" placeholder="Enter message" required />
            <input type="submit" value="Send" id="btn" />
          </form>
        </div>
      )}
    </>
  );
}

export default Contact;
