import { Link, NavLink } from "react-router-dom";
import "./index.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper container">
        <div className="header__logo">
          <Link to={"/"}>Images</Link>
        </div>
        <div className="header__links">
          <NavLink to={"/about"}>О приложении</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
