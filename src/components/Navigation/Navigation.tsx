import "./style.scss";
import { ReactComponent as LogoIcon } from "../../assets/images/logo.svg";

export const Navigation = () => {
  return (
    <div className="navigation">
      <LogoIcon className="navigation_logo" />
      <nav className="navigation_list">
        <a className="navigation_list-link" href="">
          Features
        </a>
        <a className="navigation_list-link" href="">
          Partners
        </a>
        <a className="navigation_list-link" href="">
          Stories
        </a>
      </nav>
      <button className="navigation_button">Download for free</button>
    </div>
  );
};
