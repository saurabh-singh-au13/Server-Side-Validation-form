const express = require('express');
const bodyParser = require('body-parser')
const { check, validationResult } = require('express-validator');
const app = express()
const port = 9000

// how to set a templating engine 
// just follow

app.set('view engine', 'ejs')
const urlencodedParser = bodyParser.urlencoded({ extended: false})

//how to navigate to the engine
//just follow

app.get('', (req, res) =>{
    res.render('index')
})
app.get('/register', (req, res) =>{
    res.render('register')
})

app.post('/register',urlencodedParser, [
    check('fname', 'name must be of 3 character long')
    .exists()
    .isLength({ min: 3})


], (req, res) =>{

        const error = validationResult(req)
        if(!error.isEmpty()){
            return res.ststus(422).json(error.array())
        }
    
})
app.listen(port, () => console.info(`App Listining on port:${port}`))
