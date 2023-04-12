const Post = require("../models/posts");
const fs = require("fs");

module.exports = class API {
  //fetch all posts
  static async fetchAllPosts(req, res) {
    try {
      const posts = await Post.find();
      res.status(200).json(posts);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
    // res.send("Working");
  }
  //fetchPostsById
  static async fetchPostsById(req, res) {
    const id = req.params.id;
    try {
      const post = await Post.findById(id);
      res.status(200).json(post);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  //create a post
  static async createPost(req, res) {
    const post = req.body;
    const imageName = req.file.filename;
    // const imageName = "test_img";
    post.image = imageName;
    try {
      await Post.create(post);
      res.status(201).json({ message: "Post created Successfully" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  //update a post
  static async updatePost(req, res) {
    const id = req.params.id;
    let newImage = "";
    if (req.file) {
      newImage = req.file.filename;
      try {
        fs.unlinkSync("./uploads/req.body.oldImage");
      } catch (err) {
        console.log(err);
      }
    } else {
      newImage = req.body.oldImage;
    }
    const newPost = req.body;
    newPost.image = newImage;

    try {
      await Post.findByIdAndUpdate(id, newPost);
      res.status(200).json({ message: "Post updated Successfully" });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  //delete a post
  static async deletePost(req, res) {
    const id = req.params.id;
    try {
      const result = await Post.findByIdAndDelete(id);
      if (result.image != "") {
        try {
          fs.unlinkSync("./uploads/" + result.image);
        } catch (err) {
          console.log(err);
        }
      }
      res.status(200).json({ message: "Post deleted Successfully" });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
};
