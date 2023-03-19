import img from '../img/projects/02-big.jpg';
// import projects from 'helpers/projectsList';
import ButtonGitHub from 'components/ButtonGitHub/ButtonGitHub';

const ProjectPage = () => {
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">Video service</h1>

          <img src={img} alt="" className="project-details__cover" />

          <div className="project-details__desc">
            <p>Skills: React, Node.js, MongoDB</p>
          </div>

          <ButtonGitHub link="https://github.com" />
        </div>
      </div>
    </main>
  );
};

export default ProjectPage;
