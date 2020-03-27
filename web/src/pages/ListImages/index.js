import React, { useState, useEffect } from "react";

import Header from "../../components/Header";
import api from "../../services/api";

import "./styles.css";

export default function ListImages() {
  const [images, setImages] = useState([]);

  async function loadImages() {
    const { data } = await api.get("/images");
    console.log(data);
    setImages(data);
  }

  useEffect(() => {
    loadImages();
  }, []);

  async function handleDelete(id) {
    console.log(id);
    const response = await api.delete(`/images/${id}`);

    console.log(response);
    loadImages();
  }

  return (
    <>
      <Header list="selected" />
      <div className="list-image-container">
        {images.map(image => (
          <div key={image._id} className="image-block">
            <img src={image.image_url} alt="" />
            <button onClick={() => handleDelete(image._id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
}
