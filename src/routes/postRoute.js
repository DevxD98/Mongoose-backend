import express from 'express';
import { User } from '../models/postSchema';

const app = express();

export const getAllposts = app.get('/posts', async (req, res) => {
    console.log('GET /posts');
});

export const addPost = app.post('/addPost', async (req, res) => {
    const newPost = new User({
        userID: req.body.userID,
        id: req.body.id,
        title: req.body.title,
        body: req.body.body
    })
    await newPost.save().
    then(() => {
        console.log('Post added');
    }).catch((err) => { 
        console.error('Error adding post', err);
    });
});
