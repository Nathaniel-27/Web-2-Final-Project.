# JSON and how we use it in web development
JSON stands for Javascript Object Notation, it is a standard text based format for representing structured data  based on javascript object syntax. The most common use case if for stringifying objects and data so they can be transported and transimmited across the web. So if you were hired to be part of a team to make a web page that had a form that allowed users to file bug reports for a gaming company, for an example the first thing was there in game name or more commonly called username this is a very simple sample of what the object would look like JSON'ed 
 
 ## JSON code sample
 stringifying an object 
 ```javascript
 const bugReports = [
    {userName: "John14", issue: "I cant get passed lvl 15 as it crashes during loading"},
    {userName: "CaptionJackS24", issue: "Can not login in as my game loads, then freezes before crashing"},

 ]

 JSON.stringify(bugReports);
```
Converting JSON back to a Javascript object
```JSON
const jsonObjectString = bugReports = [
    {userName: "John14", issue: "I cant get passed lvl 15 as it crashes during loading"},
    {userName: "CaptionJackS24", issue: "Can not login in as my game loads, then freezes before crashing"},

 ]
JSON.parse(jsonObjectString);
```

    Why we stringify, web developers stringify as you cant just send plain JS objects over the internet as it just wont work so using JSON to stringify your obejcts allows you to send your JS objects over the internet. Where youll mostly see JSON used in web development is forms where your sending the data to a web server to be stored in a data base like SQL. So in essence when your working with anyhting that requires sending data over the internet you will use JSON to achieve this.