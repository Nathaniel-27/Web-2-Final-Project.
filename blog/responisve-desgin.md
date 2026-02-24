---
title: Responsive-design 
description: This is a short blog post about what Responsive design is about and what it is used for in web development.
author: Nathaniel Johns
published: February 22, 2026
---

## Responsive Design  
HTML is responsive or fluid, which means if your HTML site has zero CSS in it and you shrink the window your browser will automatically reflow the text so it fits your viewport. Using fixed widths on your site is not a good practice as that can lead to things like scroll bars and make it feel cluttered or become too large on smaller screens like a smartphone screen.

RWD or Responsive Web Design is not a separate technology, it is instead a practice or approach to making websites and web apps that look good on all screen sizes. Before modern RWD came around the default advice for making websites responsive was to use the CSS float property for your layouts, meaning that every single h1, h2, nav, etc. would include the float property inside its CSS rule set and max-width properties would need to be set to 100% so images would not be too large on the page.

Float was replaced by flexbox, which makes building responsive layouts much easier and more simple without needing all those float properties. Modern CSS layout methods are a lot more straightforward and the modern approach is to use media queries, which is a piece of code that allows you to test certain screen sizes. For example if you wanted to target all your h1s on your web page a media query would look something like this:
```css
@media(max-width: 768px){
    h1{
        font-size: 16px;
        color: black;
    }
}
```
