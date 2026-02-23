const port = 8080; // We'll run the server on port 8080

// IMPORTS
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {getBlogList, convertMarkdown} = require("./modules/markdown-helpers")
const pathToBlogFolder = __dirname + '/blog/';

// MIDDLEWARE
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTES
app.get('/', (req, res) => {
  res.render('home', {
     title: "My Home Page"
  });
});


app.get('/blog', (req, res)=>{
  const blogList = getBlogList(pathToBlogFolder);
  res.render('blog-list', {
    title: "Blog",
    posts: blogList
  });
});





app.get("/blog/:post", (req, res) => {
  try{
    const pathToFile = pathToBlogFolder + req.params.post + ".md";
    console.log("Markdown file: " + pathToFile);
    const obj = convertMarkdown(pathToFile);
    res.render('blog-post', {
       title: obj.data.title,
       description: obj.data.description,
       author: obj.data.author,
       published: obj.data.published,
       content: obj.html
    });
  }catch(error){
    console.log(error);
    res.status(404).redirect("/404");
  }
});

app.get('/contact', (req, res) => {
  res.render('contact', {
     title: "Contact Me"
  });
});

/* app.post('/contact/submit', (req, res) => {

  // Extract the form input from the request body:
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const comments = req.body.comments;
  // Note: You could extract the form input with a single line that 'de-structures' the request body:
  //const {firstName, lastName, email, comments} = req.body;

  // Make sure none of the variables are empty (falsy)
  if(firstName && lastName && email && comments){
    res.send("TODO: more validation and send an email");
    // TODO: make sure the email entered into the form is a valid email address
    // TODO: make sure the form does not include spam
    // TODO: send an email to YOUR email address with the data entered into the form
  }else{
    res.status(400).send("Invalid request - there is at least one empty input in the form")
  }

}); */
app.post('/contact/submit', (req, res) => {

  // import the contact-helper functions that we need
  const {isValidContactFormSubmit, sendEmailNotification} = require("./modules/contact-helpers");

  // Extract the form input from the request body:
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const comments = req.body.comments;
  // Note: You could extract the form input with a single line that 'de-structures' the request body:
  //const {firstName, lastName, email, comments} = req.body;

  // Validate the variables
  if(isValidContactFormSubmit(firstName, lastName, email, comments)){
    res.send("TODO: Everything is valid, so send an email to my email account");
  }else{
    res.status(400).send("Invalid request - input is not valid");
  }

});


app.get("/404", (req, res) => {
  res.status(404);
  res.render('default-layout', {
     title: "Page Not Found",
     content: "<h1>Sorry!</h1><h3>We can't find the page you're requesting.</h3>"
  });
});

app.all('/*path', (req, res) => {
  res.status(404).redirect("/404");
});
// START THE SERVER
const server = app.listen(port, () => {
   console.log("Waiting for requests on port %s", port);
});