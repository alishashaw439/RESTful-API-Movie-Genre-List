const express = require('express');
const app = express();
app.use(express.json());

const genres = [
    {id:1, genre:'Comedy'},
    {id:2, genre:'Horror'},
    {id:3, genre:'Action'},
    {id:4, genre:'Romantic'},
    {id:5, genre:'Drama'},
    {id:6, genre:'Sad'},
    {id:7, genre:'Sci-Fi'},
    {id:8, genre:'Fantasy'},
]

