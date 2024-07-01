import "./HomePage.scss";
import logo from "../../src/assets/images/logo.svg";
import "@fortawesome/fontawesome-free/css/all.min.css";

const HomePage = () => {
  return (
    <div className="page-container">
      <div className="intro-section">
        <h1>Hi! I m Filip</h1>
        <h2>I m a Web Developer</h2>
        <p>
          I'm a Swinburne University graduate, honing my skills as a Web
          Developer. With a passion for crafting digital experiences.
        </p>
        <div className="buttons-div">
          <button className="page-button">About Me</button>
          <button className="page-button-projects">
            My Projects <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        <div className="resume-link">
          <a href="/Filip_Tlatlik_Resume_2024.pdf" download="FilipResume.pdf">
            <h2>Get My Resume Here! </h2>
          </a>
        </div>
        <div className="page-description">
          <div>
            <p>Lives In</p>
            <h2>Melbourne</h2>
          </div>
          <div>
            <p>Experience</p>
            <h2>2+ Years</h2>
          </div>
          <div>
            <p>Date of Birth</p>
            <h2>Oct 1999</h2>
          </div>
        </div>
      </div>
      <div className="logo-section">
        <img src={logo} />
      </div>
      <div className="links-section">
        <a
          href="https://www.linkedin.com/in/filip-tlatlik-28921a158/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a
          href="https://github.com/Majron25?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default HomePage;
