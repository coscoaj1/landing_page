import { React, useState } from "react";
import { Link } from "react-router-dom";
import { faMapSigns } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const logo = <FontAwesomeIcon icon={faMapSigns} />;

const Header = ({ ...otherProps }) => {
  const [active, setActive] = useState(false);

  const onClick = () => {
    setActive(!active);
  };
  return (
    <header className="relative ">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-2.5">
        <div className="w-full text-2xl">{logo}</div>

        <div onClick={onClick} className={`md:hidden uppercase`}>
          Menu
        </div>
        <nav
          className={`
                    ${!active && `hidden`}
                     absolute flex flex-col top-full left-0 z-20
                     md:static md:w-auto md:flex`}
        >
          <ul className="md:flex-row md:flex">
            <li className="list-none">
              <Link
                to="/"
                className="flex w-full text-base uppercase hover:text-red-600 cursor-pointer pt-2.5 px-2.5"
              >
                Home
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                className="flex w-full text-base uppercase hover:text-red-600 cursor-pointer pt-2.5 px-2.5"
              >
                About
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                className="flex w-full text-base uppercase hover:text-red-600 cursor-pointer pt-2.5 px-2.5"
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
