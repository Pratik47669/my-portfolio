import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Freelance</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Developed multiple full-stack web applications using MERN stack.
              Built responsive user interfaces and robust backend APIs.
              Implemented authentication, database design, and deployment
              solutions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>Personal Projects</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Created interactive web applications using React and modern
              JavaScript. Focused on user experience design and performance
              optimization. Learned and implemented various frontend frameworks
              and libraries.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>Learning & Growth</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Continuously learning new technologies and best practices.
              Building complex applications with 3D graphics and animations.
              Exploring advanced concepts in full-stack development and DevOps.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
