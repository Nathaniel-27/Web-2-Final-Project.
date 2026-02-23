# Responsive Design  
HTML is a responsive or fluid, which means if your html site has zero CSS in it and you shrink the window your browser will automatically reflow the text so it fits your view port. Using Things like fixed widths on your site is not a good practice as that can lead to things like scroll bars and make it feel cluttered or become to large on smaller screens like a smartphone screen. RWD or responsive web design is not a separate technology it is instead a practice or approach to making websites and web apps that look good on all screen sizes and are responsive.   

    Before modern RWD came around the default advice for making websites responsive was to use the CSS float property for your layouts meaning that every single H1, H2, <nav>, etc. would include the float property inside its CSS rule set and max-width properties would need to be set to 100% as to not have images be too large on the page. Float was replaced by flex box, which makes building resposive layouts much easier and more simple with out needing all those float properties. Modern CSS layout methods are a lot more straight forward and responsive as the modern approach is to use media queries which is a piece of code that allows you to test certain screen sizes so for example if you wanted to test all your H1's on your web page a media query would look something like this.
    ```CSS
    @media(max-width: 768px){
        h1{
            font-size: 16px;
            color: black;
        }
    }
    ```
