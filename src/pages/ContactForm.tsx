import emailjs from "@emailjs/browser";

const sendEmail = (event: any) => {
  event.preventDefault();
  alert("submitted");
  emailjs.sendForm(
    "service_7ccxvub",
    "template_p1k4fes",
    event.target,
    "hHI4usfbXLzqXzY0J"
  );
};

const ContactForm = () => {
  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <h1> Conctact Me!</h1>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={sendEmail}
      >
        <label>Your Email:</label>
        <input type="text" className="email_from" name="email_from" />
        <label>Message:</label>
        <textarea className="message" name="message" />
        <button>Click Me!</button>
      </form>
    </div>
  );
};

export default ContactForm;
