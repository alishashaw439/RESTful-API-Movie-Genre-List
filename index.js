const express = require('express');
const Joi = require('joi');
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
]

app.get('/',(req,res)=>{
    res.send(genres);
});

app.post('/api/genres',(req,res)=>{
    const {error} = validateGenre(req.body);
    if(error){
        return res.status(400).send(error.details[0].message);
    }
    const body = {
        id: genres.length +1,
        genre : req.body.genre
    }
    genres.push(body);
    res.send(genres);
})

app.put('/api/genres/:id',(req,res)=>{
    const result = genres.find(g => g.id === parseInt(req.params.id));
    if(!result) return res.status(404).send("The id does not exist");
    const {error} = validateGenre(req.body);
    if(error){
        return res.status(400).send(error.details[0].message);
    }
    result.genre = req.body.genre;
    res.send(genres);
})


app.delete('/api/genres/:id',(req,res)=>{
    const result = genres.find(g => g.id === parseInt(req.params.id));
    if(!result) return res.status(404).send("The id does not exist");
    const index = genres.indexOf(result);
    genres.splice(index,1);
    res.send(genres);
})


function validateGenre(body){
    const schema = Joi.object({
        genre: Joi.string().min(3).required()
    });
    return schema.validate(body);
}



const port = process.env.PORT || 3000;
app.listen(port,()=> console.log('Server started at '+port));

