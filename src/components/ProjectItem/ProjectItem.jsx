import { Link } from 'react-router-dom';
import './style.css';

const ProjectItem = ({ title, img, projectId }) => {
  return (
    <li className="project">
      <Link to={`/projects/${projectId - 1}`}>
        <img src={img} alt={title} className="project__img" />
        <h3 className="project__title">{title}</h3>
      </Link>
    </li>
  );
};

export default ProjectItem;
