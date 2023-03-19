import { useParams } from 'react-router-dom';
import ButtonGitHub from 'components/ButtonGitHub/ButtonGitHub';
import projects from 'helpers/projectsList';

const ProjectPage = () => {
  const { projectId } = useParams();
  const { title, largeImage, skills } = projects[projectId];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{title}</h1>

          <img
            src={largeImage}
            alt={title}
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>{skills}</p>
          </div>

          <ButtonGitHub link="https://github.com" />
        </div>
      </div>
    </main>
  );
};

export default ProjectPage;
