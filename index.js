const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const chef = require('./Data/chef.json')
const recipe = require('./Data/recipe.json')
app.use(cors())
app.get('/', (req, res)=>{
    res.send('Recipe is comming')
});

app.get('/chef', (req, res)=>{
    res.send(chef)
})

app.get('/chef/:id',(req, res)=>{
    const id = parseInt(req.params.id);
    console.log(id)
    const selectedChef = chef.find(c=> c.id === id);
    res.send(selectedChef)
})
app.get('/recipe', (req,res)=>{
    res.send(recipe)
})


app.listen(port, ()=>{
    console.log(`Food Recipe chef is comming on port: ${port}`)
})

