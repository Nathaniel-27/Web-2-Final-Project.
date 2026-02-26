const port = 8080; // We'll run the server on port 8080

// IMPORTS
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {getBlogList, convertMarkdown} = require("./modules/markdown-helpers")
const pathToBlogFolder = __dirname + '/blog/';
app.use((req, res, next) => {
   if (process.env.NODE_ENV === 'production') {
      if (req.headers['x-forwarded-proto'] !== 'https')
         // the statement for performing our redirection
         return res.redirect('https://' + req.headers.host + req.url);
      else
         return next();
   }else{
      return next();
   }
});

// MIDDLEWARE
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTES
app.get('/', (req, res) => {
  // res.render('home', {
  //   title: "My Home Page"
  // });
  res.redirect("/blog");
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

app.post('/contact/submit', (req, res) => {

  // import the helper functions that we need
  const {isValidContactFormSubmit, sendEmailNotification} = require("./modules/contact-helpers");

  // Destructure the req.body object into variables
  const {firstName, lastName, email, comments} = req.body;

  // Validate the variables
  if(isValidContactFormSubmit(firstName, lastName, email, comments)){
    // Everything is valid, so send an email to YOUR email address with the data entered into the form
    const message = `From: ${firstName} ${lastName}\n
                    Email: ${email}\n
                    Message: ${comments}`;

    function sendEmailNotification(message, callback){

  // import the node mailer package
  const nodemailer = require('nodemailer');

  const DOMAIN = "YOUR DOMAIN GOES HERE" // ex: mywebsite.com
  const EMAIL_SERVER = "mail." + DOMAIN;
  const EMAIL_ADDRESS = "_mainaccount@" + DOMAIN;
  const EMAIL_PASSWORD = "YOUR cPanel PASSWORD GOES HERE";

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: EMAIL_SERVER,
    port: 465,
    secure: true,
    auth: {
      user: EMAIL_ADDRESS,
      pass: EMAIL_PASSWORD,
    },
  });

  const email = {
    from: EMAIL_ADDRESS,
    to:EMAIL_ADDRESS,
    subject: 'Contact Submit From Your Website',
    text: message
 };

 transporter.sendMail(email, callback);
}

  }else{
    res.status(400).send("Invalid request - data is not valid")
  }

});

sendEmailNotification(message, (err, info) => {
  if(err){
    console.log(err);
    res.status(500).send("There was an error sending the email");
  }else{
    // Render a template that confirms the contact form info was recieved:
    res.render("default-layout", {
      title: "Contact Confirmation",
      content: "<h2>Thank you for contacting me!</h2><p>I'll get back to you ASAP.</p>"
    })
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