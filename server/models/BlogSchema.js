import mongoose from 'mongoose';

const BlogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    body: {
        type: String, 
        required: false,
    },
    picture: {
        type: String, 
        required: false,
    },
    created_at: {
        type: String, 
        required: null,
    },
    username: {
        type: String, 
        required: true, 
    }, 
    categories: {
        type: String, 
        required: true, 
    }
})
    
const Post = mongoose.model('Post', BlogSchema);
    
    //para poder importar en otros lugares
export default post;