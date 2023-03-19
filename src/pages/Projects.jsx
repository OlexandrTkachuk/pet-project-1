import ProjectItem from 'components/ProjectItem/ProjectItem';
import projects from 'helpers/projectsList';

const Projects = () => {
  return (
    <>
      <main className="section">
        <div className="container">
          <h2 className="title-1">Projects</h2>

          <ul className="projects">
            {projects.map(({ title, img, id }) => (
              <ProjectItem key={id} title={title} img={img} projectId={id} />
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Projects;
