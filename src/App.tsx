import React, { FC, useState, useRef } from "react";
import projectsData from "./data/projectsData";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/Projects";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import nycSnowBg from "./Static/img/nyc-snow.jpg";
import { Parallax } from "react-parallax";
import emailjs from "@emailjs/browser";
import "./App.css";

const App: FC = () => {
  const [isNavExpanded, setIsNavExpanded] = useState<boolean>(false);
  const [navBgColor, setNavBgColor] = useState<boolean>(false);
  const [mailerState, setMailerState] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: "",
    email: "",
    message: "",
  });

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const featuredProjectRefs = useRef<HTMLDivElement[]>([]);
  const contactRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleHomeClick = () => {
    if (homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
      setIsNavExpanded(false);
    }
  };

  const handleAboutClick = () => {
    if (aboutMeRef.current) {
      aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
      setIsNavExpanded(false);
    }
  };

  const handleProjectsClick = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
      setIsNavExpanded(false);
    }
  };

  const handleContactClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
      setIsNavExpanded(false);
    }
  };

  const isValidEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  const handleEmailStateChange = (e) => {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = (e) => {
    if (e) e.preventDefault();

    if (!mailerState.name) {
      alert("Please enter your name");
    } else if (!mailerState.email) {
      alert("Please enter your email address");
    } else if (!isValidEmail(mailerState.email)) {
      alert("Please enter a valid email address");
    } else if (mailerState.message.length < 25) {
      alert("Please ensure your message is more than 25 characters");
    } else {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID as string,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string,
          formRef.current as HTMLFormElement,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY as string
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Message sent! Thanks for reaching out");
            setMailerState({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            console.log(error.text);
            alert(
              "There was an error sending the message, please try again later"
            );
          }
        );
    }
  };

  return (
    <div className="main-container" ref={homeRef}>
      <Navbar
        isNavExpanded={isNavExpanded}
        setIsNavExpanded={setIsNavExpanded}
        navBgColor={navBgColor}
        setNavBgColor={setNavBgColor}
        handleHomeClick={handleHomeClick}
        handleAboutClick={handleAboutClick}
        handleProjectsClick={handleProjectsClick}
        handleContactClick={handleContactClick}
      />
      <Parallax
        blur={0}
        bgImage={nycSnowBg}
        bgImageAlt="nyc-snow"
        strength={300}
      >
        <div className="intro-box">
          <Intro />
        </div>
      </Parallax>
      <main className="main-body-box">
        <div className="about-box" ref={aboutMeRef}>
          <AboutMe />
        </div>
        <div className="projects-box" ref={projectsRef}>
          <Projects
            projectsData={projectsData}
            featuredProjectRefs={featuredProjectRefs}
          />
        </div>
        <div className="contact-box" ref={contactRef}>
          <Contact
            mailerState={mailerState}
            handleEmailStateChange={handleEmailStateChange}
            sendEmail={sendEmail}
            isValidEmail={isValidEmail}
            formRef={formRef}
          />
        </div>
      </main>
      <footer className="footer-box">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
