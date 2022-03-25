import mongoose from 'mongoose';

const Connection = async () => {
    try{
        const URL = '';
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
        console.log('Database connected succesfully ');
    } catch(error) {
        console.log('Error while connecting to MongoDB ', error);
    }
}

export default Connection;