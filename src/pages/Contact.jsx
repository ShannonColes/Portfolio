import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  // state for form being submitted
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  // state for input data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // emailjs service ID, Template and public key
    const serviceId = import.meta.env.VITE_APP_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_PUBLIC_KEY;

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Karasu Digital",
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  };

  //conditionals - if submitted is algud or if error shows up
  if (submitted) {
    return (
      <>
        <h3>Thank you for your message</h3>
        <p>We'll be in touch soon </p>
      </>
    );
  }

  if (error) {
    return (
      <>
        <ContactForm />
        <h3>Error!</h3>
        <p>Sorry, we were unable to send your message</p>
      </>
    );
  }

  // for to be returned
  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* Name input */}
        <label htmlFor="name">Name</label>
        <div>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>

        {/* Email input */}
        <label htmlFor="email">Email</label>
        <div>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        {/*Subject input */}
        {/* <label htmlFor="subject">Subject</label>
        <div>
          <input
            type="text"
            name="subject"
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
            required
          />
        </div> */}

        {/* Message input */}
        <label htmlFor="message">Message</label>
        <div>
          <textarea
            className="message-input"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            required
          />
        </div>

        <div>
          <button className="form-submit-button" type="submit">
            Send Message
          </button>
        </div>
      </form>
      {/* end of form */}
    </>
  );
};
// end of data return

const Contact = () => {
  return (
    <>
      <div
        id="contact-container"
        className="container"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        <p className="project-paragraph">
          Have a project idea? Reach out if you're interested in working
          together to create stunning graphics or web solutions.
        </p>
        <h2 className="title-text-contact">Contact</h2>

        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
