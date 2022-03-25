import Post from '../models/BlogSchema.js';

export const createPost = async(request, response) => {
    console.log(request.body);
    try{
        const post = await new Post(request.body);
        post.save();
        response.status(200).json("blog saved successfully");
    } catch(error){
        response.status(500).json(error)
    }
}

export const getAllPosts = async(request, response) => {
    console.log(request.body);
    try{
        let post = await Post.find({});
        post.save();
        response.status(200).json("blog saved successfully");
    } catch(error){
        response.status(500).json(error)
    }
}

export const getAllPost = async(request, response) => {
    console.log(request.body);
    try{
        let post = await Post.findById();
        response.status(200).json(post);
    } catch(error){
        response.status(500).json(error)
    }
}

