const express = require('express');
const hbs = require('hbs');
var app = express();
hbs.registerPartials(__dirname + '/views/Partials1');
app.set('view engine' , 'hbs');
app.use(express.static(__dirname + '/public'));
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()

})

app.get('/',(req,res) => {
  res.render('Home_page.hbs', {
    pageTitile: 'Home'
  });
});

app.get('/About',(req,res) => {
  res.render('About_page.hbs', {
    pageTitile: 'About Us'
  });
});
app.get('/Contact',(req,res) => {
  res.render('Contact.hbs', {
    pageTitile: 'Contact Us'
  });
});
app.get('/Reach',(req,res) => {
  res.render('Reach.hbs', {
    pageTitile: 'Reach Us'
  });
});
app.listen(9000, () => {
  console.log("Server running successfully in port no - 9000");
})
