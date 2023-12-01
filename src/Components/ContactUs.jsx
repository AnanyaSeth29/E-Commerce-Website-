import React from "react";

const globalStyles = {
  html: {
    background: "SlateBlue",
    boxSizing: "border-box",
  },
  body: {
    background: "white",
    width: "90%",
    maxWidth: "800px",
    margin: "50px auto",
    fontFamily: "Calibri, Arial, sans-serif",
    padding: "20px",
  },
  h1: {
    textAlign: "center",
  },
  p: {
    textAlign: "center",
  },
  label: {
    display: "block",
    margin: "1em 0 .2em",
  },
  input: {
    display: "block",
    width: "100%",
    padding: ".3em",
    fontSize: "20px",
    backgroundColor: "#fbfbfb",
    border: "solid 1px #CCC",
    resize: "vertical",
  },
  textarea: {
    display: "block",
    width: "100%",
    padding: ".3em",
    fontSize: "20px",
    backgroundColor: "#fbfbfb",
    border: "solid 1px #CCC",
    resize: "vertical",
    minHeight: "180px",
  },
  select: {
    color: "indigo",
  },
  option: {
    color: "blue",
    background: "lavenderBlush",
  },
  "input[type=checkbox]": {
    display: "inline",
    width: "auto",
    color: "red",
  },
  "input[type=submit]": {
    background: "lightcoral",
    margin: "1em 0 0",
    color: "white",
    border: "none",
    borderRadius: "8px",
    transition: "all .3s ease-out",
  },
  "input:focus, input:hover, select:focus, select:hover, textarea:focus, textarea:hover":
    {
      backgroundColor: "lavenderBlush",
    },
};

const Form = () => {
  return (
    <div style={globalStyles.html}>
      <div style={globalStyles.body}>
        <form action="#" method="post">
          <h1 style={globalStyles.h1}>Contact Us</h1>
          <p style={globalStyles.p}>
            Please take a moment to get in touch, we will get back to you
            shortly.
          </p>

          <div className="column">
            <label style={globalStyles.label} htmlFor="the-name">
              Your Name
            </label>
            <input
              style={globalStyles.input}
              type="text"
              name="name"
              id="the-name"
            />

            <label style={globalStyles.label} htmlFor="the-email">
              Email Address
            </label>
            <input
              style={globalStyles.input}
              type="email"
              name="email"
              id="the-email"
            />

            <label style={globalStyles.label} htmlFor="the-phone">
              Phone Number
            </label>
            <input
              style={globalStyles.input}
              type="tel"
              name="phone"
              id="the-phone"
            />

            <label style={globalStyles.label} htmlFor="the-reason">
              How can we help you?
            </label>
            <select style={globalStyles.select} name="reason" id="the-reason">
              <option value="">Choose one</option>
              <option value="Designs">I need more designs</option>
              <option value="Products">I Wanna Buy Products</option>
              <option value="Query">I Wanna more about your business</option>
            </select>
          </div>
          <div className="column">
            <label style={globalStyles.label} htmlFor="the-message">
              Message
            </label>
            <textarea
              style={globalStyles.textarea}
              name="message"
              id="the-message"
            ></textarea>
            <label style={globalStyles.label}>
              <input
                style={globalStyles["input[type=checkbox]"]}
                type="checkbox"
                name="newsletter"
                value="yes"
              />{" "}
              Join our mailing list?
            </label>
            <input
              style={globalStyles["input[type=submit]"]}
              type="submit"
              value="Send Message"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
