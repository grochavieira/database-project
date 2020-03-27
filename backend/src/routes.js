const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");
const ImageController = require("./controllers/ImageController");

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get("/images", ImageController.index);

routes.post("/images", upload.single("image"), ImageController.store);

routes.delete("/images/:id", ImageController.delete);

module.exports = routes;
