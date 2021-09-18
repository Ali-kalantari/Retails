import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { useLocation } from "react-router-dom";

const Header2 = () => {
  const location = useLocation();

  const { pathname } = location;
  console.log(pathname);

  const splitLocation = pathname.split("/");
  console.log(splitLocation);
  return (
    <>
      <ul className="header-ul">
        <li>
          <Link className={splitLocation[1] === "" ? "active" : ""} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={splitLocation[1] === "tour" ? "active" : ""}
            to="/tour"
          >
            tour
          </Link>
        </li>
        <li>
          <Link
            className={splitLocation[1] === "acc" ? "active" : ""}
            to="/acc"
          >
            acc
          </Link>
        </li>
      </ul>
    </>
  );
};
export default Header2;
