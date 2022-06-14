const mongoose = require("mongoose");


const postSchema = new mongoose.Schema({
  postcontent: {type:String},
  likes: {type:Number},
  comment: [String]
})

const Posts = mongoose.model("User", postSchema);

async function createpost(c) {  //c content
  
    const newContent = await Posts.create({
      c
    });
  
    return newContent;
  }

  async function updatePost(id,c) {
    const uPost = await User.updateOne({"_id": id}, {$set: { c: c}});
    return uPost;
  }

  async function deletePost(id) {
    await User.deleteOne({"_id": id});
  };

  module.exports = { 
    createpost, updatePost, deletePost
  };