import React, { useState, useMemo } from "react";

import Header from "../../components/Header";
import camera from "../../assets/camera.svg";

import "./styles.css";

import api from "../../services/api";

export default function UploadImages() {
  const [image, setImage] = useState(null);

  const preview = useMemo(() => {
    return image ? URL.createObjectURL(image) : null;
  }, [image]);

  async function handleSubmit() {
    if (image !== null) {
      const data = new FormData();

      data.append("image", image);

      const response = await api.post("/images", data);

      console.log(response);

      setImage(null);

      alert("The image was uploaded sucessfully!");
    } else {
      alert("Please, you need to browse a image first to submit!");
    }
  }

  return (
    <>
      <Header upload="selected" />
      <div className="upload-image-container">
        <div className="input-block">
          <label
            id="image"
            style={{ backgroundImage: `url(${preview})` }}
            className={image ? "has-image" : ""}
          >
            <input
              type="file"
              onChange={event => setImage(event.target.files[0])}
            />
            <img src={camera} alt="Select img" />
          </label>
        </div>
        <div className="submit-block">
          <button onClick={() => handleSubmit()}>Submit</button>
        </div>
      </div>
    </>
  );
}
