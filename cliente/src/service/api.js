
import express from 'express';
import mongoose from 'mongoose';

const app = express();

const Post = mongoose.model("post", BlogSchema);

app.get("/create", function(req, res){
    Post.find(function(err, foundBlogs){
        if (!err) {
            res.send(foundBlogs);
        } else {
            res.send(err);
        }
    });
});

app.listen(3000, function(){
    console.log("server started on port 3000");
});

app.post("/create", function(req, res){
    req.body.title
    req.body.picture
    req.body.created_at
    req.body.username
    req.body.categories  
})

/* OTRA OPCION, EMPLEANDO AXIOS. 

import axios from 'axios';


const URL = 'http://localhost:8000'

export const createPost = async (post) => {
    try{
        return await axios.post(`${URL}/create`, post)
    } catch (error) {
        console.log('Error while calling createPost API ', error);
    } 
}

export const getAllPosts = async (post) => {
    try{
        let response = await axios.get(`${URL}/posts`)
        return response;
    } catch (error) {
        console.log('Error while calling getAllPosts API ', error);
    } 
}

export const getPost = async (post) => {
    try{
        let response = await axios.get(`${URL}/posts`)
        return response;
    } catch (error) {
        console.log('Error while calling getAllPosts API ', error);
    } 
}

export const updatePost = async (id, post) => {
    try{
        let response = await axios.put(`${URL}/update/${id}, post`)
        return response;
    } catch (error) {
        console.log('Error while calling updatePost API ', error);
    } 
}

export const deletePost = async (id) => {
    try{
        return await axios.delete(`${URL}/delete/${id}`)
        return response;
    } catch (error) {
        console.log('Error while calling deletePost API ', error);
    } 
}
*/