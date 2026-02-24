---
title: Web Accessibility
description: This is a short article about what I learned about web accessibility 
author: Nathaniel Johns
published: February 22, 2026
---

Your blog content goes here!

# What I learned about Web accessibility  
Firstly, Web Accessibility is about accessibility especially for those whose abilities are limited, the purpose is to ensure the web is accessible to all and the web is designed to be accessible for all.

    A first good step to making a web site web accessible is to use a semantic HTML which means to use a header tag, nav tag, article tag, etc. instead of just a generic div as the new tags, that also help with your sites search engine optimization meaning it will be more likely to be seen. Color blindness is another common type of impairment so using colors like #1a1a1a text on a #f8f8f8 background or #f8f8f8 text on a #1a1a1a background these are a softer version of the usual #000000 or #212121 text on a #ffffff background which is the default colors for light mode and #e0e0e0 or #f5f5f5 text on a #121212 or #1e1e1e background which is the base dark mode

    Another very important part of web accessibility is having alt text on images which is a requirement as you can get into a lot of legal trouble as not making your website web accessible violates the Americans with disabilities act. Consequences for violating the ADA are fines of $75-150 thousand dollars, costly demand letters and can ruin your brand's image and reputation and a lawsuit can be damaging or potentially bankrupt you if you are a smaller or small business. There is no need to worry if you site is ADA compliant as a quick google search you can find plenty of compliance checkers and tools that are available for free. So there is zero reason for your website to ever be ADA non compliant. 

    ARIA or Application rich internet appliactions is a collection of HTML attrubites that give more context to screen readers when plain html just isnt enough for the screen reader. For example, adding an aria-label to a submit button tells the screen reader exactly what the button does. Another common use is on form input is aria-describedby, which provieds additional hints or error messages when the form is missing input or input is not correct.

### Code Samples

Non Web accessible HTML:
```html
Home Page
Blog Post
```

Web Accessible HTML:
```html
Home Page
Content goes here
```

ARIA code samples:
```html
Click ME!
```
```html

Enter your username
```
