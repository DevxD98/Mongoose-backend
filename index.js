import express from 'express';
import mongoConfig from './config/config.js';
import { getAllposts, addPost } from './src/routes/postRoute.js';

const app = express()
const port = 3000;

await mongoConfig();

app.get('/', (req, res) => {
    res.send('lol');
})

app.listen(port, () => {
  console.log('Server is running on port 3000')
})
