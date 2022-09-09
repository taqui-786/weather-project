const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path')
const port = process.env.PORT || 8000;
const staticpath= path.join(__dirname,"../public")
const viewspath= path.join(__dirname,"../templates/views")
const partialpath= path.join(__dirname,"../templates/partials")
app.set('view engine','hbs' );
app.set('views', viewspath)
hbs.registerPartials(partialpath)
app.use(express.static(staticpath))
app.get('', (req,res) =>{
    res.render('index');
});
app.get('/weather', (req,res) =>{
    res.render('weather');
});
app.get('/about', (req,res) =>{
    res.render("about")
});
app.get('/contact', (req,res) =>{
    res.render("contact")
});
app.get('*', (req,res) =>{
    res.render("error404")
});
app.listen(port,()=>{console.log("listinig to " + port)})