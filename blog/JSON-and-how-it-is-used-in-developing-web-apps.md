---
title: JSON and how we use it in web development
description: This is a short blog about what JSON is and how web developers use it in there web apps.
author: Nathaniel Johns
published: February 22, 2026
---

Your blog content goes here!

## JSON and how we use it in web development
JSON stands for Javascript Object Notation, it is a standard text based format for representing structured data  based on javascript object syntax. The most common use case if for stringifying objects and data so they can be transported and transimmited across the web. So if you were hired to be part of a team to make a web page that had a form that allowed users to file bug reports for a gaming company, for an example the first thing was there in game name or more commonly called username this is a very simple sample of what the object would look like JSON'ed 

Why we stringify: web developers stringify because you cant just send plain JS objects over the internet as it just wont work. Using JSON to stringify your objects allows you to send your JS objects over the internet. Where you'll mostly see JSON used in web development is forms where you're sending the data to a web server to be stored in a database like SQL. So in essence when working with anything that requires sending data over the internet you will use JSON to achieve this.

 ## JSON code sample
 stringify an object 
```javascript
 const bugReports = [
    {userName: "John14", issue: "I cant get passed lvl 15 as it crashes during loading"},
    {userName: "CaptionJackS24", issue: "Can not login in as my game loads, then freezes before crashing"},

 ]

 JSON.stringify(bugReports);
```
Converting JSON back to a Javascript object
```json
const jsonObjectString = bugReports = [
    {userName: "John14", issue: "I cant get passed lvl 15 as it crashes during loading"},
    {userName: "CaptionJackS24", issue: "Can not login in as my game loads, then freezes before crashing"},

 ]
JSON.parse(jsonObjectString);
```

   