
const Veggie = require('./models/veggie.cjs')
const express = require('express') 
const path = require('path') 
const cors = require('cors')
const morgan = require('morgan')
const PORT = 3001;
const app = express();
const Fruit = require('./models/Fruit.cjs')

require('dotenv').config();

require('./config/db.cjs')

app.use(cors({
    origin: "*"
}))

app.use(morgan('dev'))


app.use(express.json()); // adds .body to the request

// "/"
// serve the html and js of our react app (dist folder)


app.get('/fruits',async (req,res)=>{
    let fruitsFromDb = await Fruit.find();
    res.send(fruitsFromDb)
})

app.post("/fruits", async (req,res)=>{
    console.log(req.body);
    let fruit = req.body;
    console.log(fruit)
    let responseFromDB = await Fruit.create(fruit);
    console.log(responseFromDB)
    res.send("Route is good!");
})

app.get("/", (req, res) => {
    res.send("here is your valuable data")
    
})

app.get('/veggies', async (req,res)=>{
    let veggiesFromDB = await Veggie.find();
    res.send(veggiesFromDB)
})
app.post('/veggies', async (req,res)=>{
    let dbResponse = await Veggie.create(req.body);
    res.status(201).send(dbResponse)
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});