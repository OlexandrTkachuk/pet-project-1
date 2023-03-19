import './style.css';
import gitHubIcon from '../../img/icons/gitHub-black.svg';

const ButtonGitHub = ({ link }) => {
  return (
    <a href={link} className="btn-outline">
      <img src={gitHubIcon} alt="GitHub repo" />
      GitHub repo
    </a>
  );
};

export default ButtonGitHub;
