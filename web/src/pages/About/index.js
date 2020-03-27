import React from "react";

import Header from "../../components/Header";

import "./styles.css";

export default function About() {
  return (
    <>
      <Header about="selected" />
      <div className="about-container">
        <div className="title-block">
          <span>Integrantes do Grupo</span>
        </div>

        <div className="members-block">
          <div className="name-block">
            <span>Guilherme Rocha</span>
            <span>Ibrahim</span>
            <span>Matheus Elias</span>
            <span>Renan Martins</span>
            <span>Thomas Anderson</span>
            <span>Victor Masumoto</span>
          </div>

          <div className="ra-block">
            <span>RA: 22.118.024-3</span>
            <span>RA: 22.000.000-0</span>
            <span>RA: 22.000.000-0</span>
            <span>RA: 22.000.000-0</span>
            <span>RA: 22.118.175-3</span>
            <span>RA: 22.000.000-0</span>
          </div>
        </div>
      </div>
    </>
  );
}
