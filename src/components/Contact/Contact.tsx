import React, { FC } from "react";
import paperPlane from "../../Static/img/paper-plane.svg";
import "./Contact.css";

interface ContactProps {
  mailerState: {
    name: string;
    email: string;
    message: string;
  };
  handleEmailStateChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
  sendEmail: React.FormEventHandler<HTMLFormElement>;
  isValidEmail: (string) => boolean;
  formRef: React.LegacyRef<HTMLFormElement> | undefined;
}

const Contact: FC<ContactProps> = ({
  mailerState,
  handleEmailStateChange,
  sendEmail,
  isValidEmail,
  formRef,
}) => {
  return (
    <div className="contact-container">
      <div className="contact-sub-container">
        <div className="contact-text">
          <p id="contact-text-head">Get In Touch</p>
          <p id="contact-text-subhead">
            I'm interested in job and freelance opportunities. However, if you
            have any other requests or questions please don't hesitate to reach
            out:
          </p>
        </div>
        <div className="contact-form">
          <form ref={formRef} onSubmit={sendEmail}>
            <div className="contact-name-email">
              <div className="contact-name">
                <label id="contact-name-label">Name*</label>
                <input
                  type="text"
                  name="name"
                  id="contact-name-input"
                  value={mailerState.name}
                  onChange={handleEmailStateChange}
                ></input>
                <p
                  className={
                    mailerState.name.length < 2
                      ? "validation-entry entry-invalid"
                      : "validation-entry entry-valid"
                  }
                >
                  {mailerState.name
                    ? `${mailerState.name.length} / 2 characters`
                    : ""}
                </p>
              </div>
              <div className="contact-email">
                <label id="contact-email-label">E-mail*</label>
                <input
                  type="email"
                  name="email"
                  id="contact-email-input"
                  value={mailerState.email}
                  onChange={handleEmailStateChange}
                ></input>
                <p
                  className={
                    !isValidEmail(mailerState.email)
                      ? "validation-entry entry-invalid"
                      : "validation-entry entry-valid"
                  }
                >
                  {mailerState.email && !isValidEmail(mailerState.email)
                    ? "Invalid Email"
                    : ""}
                </p>
              </div>
            </div>
            <label>Message*</label>
            <textarea
              id="contact-message"
              name="message"
              value={mailerState.message}
              onChange={handleEmailStateChange}
            ></textarea>
            <p
              className={
                mailerState.message.length < 25
                  ? "validation-entry entry-invalid"
                  : "validation-entry entry-valid"
              }
            >
              {mailerState.message
                ? `${mailerState.message.length} / 25 characters`
                : ""}
            </p>
            <button
              type="submit"
              id="contact-submit"
              disabled={
                mailerState.name.length < 2 ||
                !mailerState.email ||
                !isValidEmail(mailerState.email) ||
                mailerState.message.length < 25
              }
            >
              Send Message!
              <img src={paperPlane} id="paper-plane" alt="paper-plane"></img>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
