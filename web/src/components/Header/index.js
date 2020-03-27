import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Header(props) {
  return (
    <>
      <header className="container">
        <ul>
          <li>
            <Link className={`${props.upload}`} to="/">
              Upload Images
            </Link>
          </li>
          <li>
            <Link className={`${props.list}`} to="/list">
              List Images
            </Link>
          </li>
          <li>
            <Link className={`${props.about}`} to="/about">
              About
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}
