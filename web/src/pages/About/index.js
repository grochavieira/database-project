import React from "react";

import Header from "../../components/Header";

import "./styles.css";

export default function About() {
  return (
    <>
      <Header about="selected" />
      <div className="about-container">
        <div className="title-block">
          <span>Developers</span>
        </div>

        <div className="members-block">
          <div className="name-block">
            <span>Guilherme Rocha</span>
            <span>Ibrahim Jamil</span>
            <span>Matheus Elias</span>
            <span>Renan Martins</span>
            <span>Thomas Anderson</span>
            <span>Victor Masumoto</span>
          </div>

          <div className="ra-block">
            <span>RA: 22.118.024-3</span>
            <span>RA: 22.118.183-7</span>
            <span>RA: 22.118.167-0 </span>
            <span>RA: 22.118.025-0</span>
            <span>RA: 22.118.175-3</span>
            <span>RA: 22.118.030-0</span>
          </div>
        </div>
      </div>
    </>
  );
}
