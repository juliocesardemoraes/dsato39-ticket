<<<<<<< HEAD
const mongoose = require("mongoose");

const livroSchema = mongoose.Schema(
  {
=======
const mongoose = require ('mongoose')

const livroSchema = mongoose.Schema({
>>>>>>> dee1e64e2467585b8764a100b1426b9f9c344f16
    id: Number,
    titulo: String,
    num_paginas: Number,
    isbn: String,
    editora: String,
  },
  {
    timestamps: true,
  }
);

const livroModel = mongoose.model("livros", livroSchema);

module.exports = livroModel;
