# What I learned about Web accessibility  
Firstly, Web Accessibility is about accessibility especially for those whose abilities are limited, the purpose is to ensure the web is accessible to all and the web is designed to be accessible for all.

    A first good step to making a web site web accessible is to use a semantic HTML which means to use a header tag, nav tag, article tag, etc. instead of just a generic div as the new tags, that also help with your sites search engine optimization meaning it will be more likely to be seen. Color blindness is another common type of impairment so using colors like #1a1a1a text on a #f8f8f8 background or #f8f8f8 text on a #1a1a1a background these are a softer version of the usual #000000 or #212121 text on a #ffffff background which is the default colors for light mode and #e0e0e0 or #f5f5f5 text on a #121212 or #1e1e1e background which is the base dark mode

    Another very important part of web accessibility is having alt text on images which is a requirement as you can get into a lot of legal trouble as not making your website web accessible violates the Americans with disabilities act. Consequences for violating the ADA are fines of $75-150 thousand dollars, costly demand letters and can ruin your brand's image and reputation and a lawsuit can be damaging or potentially bankrupt you if you are a smaller or small business. There is no need to worry if you site is ADA compliant as a quick google search you can find plenty of compliance checkers and tools that are available for free. So there is zero reason for your website to ever be ADA non compliant. 

    ARIA or Accessible rich internet applications are a collection of HTML attrubutes that are added to a page to give screen readers more context when plain HTML just isnt enough.


### Code Samples
Non Web accessible HTML
```
<div class="nav">Home Page</div>
<div class="blogs">Blog Post</div>

```
Web Accessible HTML
```
<nav>Home Page</nav>
<main>Content goes here</main>

ARIA code samples 
```
<button aria-label="Sample button">Click ME!</button>
```
<input aria-describedby="username-hint">
<span id="username-hint">Enter your username</span>
```
