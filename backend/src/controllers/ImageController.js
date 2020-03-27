const express = require("express");
const Image = require("../models/Image");

module.exports = {
  async index(request, response) {
    const image = await Image.find();

    return response.json(image);
  },
  async store(request, response) {
    const { filename } = request.file;

    const image = await Image.create({
      image: filename
    });

    return response.json(image);
  },
  async delete(request, response) {
    const { id } = request.params;

    const answer = await Image.findByIdAndDelete({
      _id: id
    });

    return response.json(answer);
  }
};
