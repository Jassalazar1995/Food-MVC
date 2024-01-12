const express = require('express')

const app = express()

const fruits = require('./models/fruits')

PORT = 5000

// set up the engine
const jsxEngine = require('jsx-view-engine')

//call our engine
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

// "root" route
app.get('/', (req,res) => {
    res.send('Hello world')
})

// "index" route
app.get('/fruits',(req,res) =>{
    res.render('Index', { fruits: fruits })
})

// "show" route
app.get('/fruits/:index', (req,res) => {
    res.render('Show', {fruit: fruits[req.params.index]})
    //res.send(fruits[req.params.index])
})

app.listen(PORT,()=>{
    console.log('listeninon port ' + PORT)
})