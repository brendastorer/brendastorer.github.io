*This is a work in progress by me, a Girl Develop It instructor currently teaching this course in NYC. A lot of the material is over 2 years old, so I am working on updating it while I teach.*

# CORE INTERMEDIATE HTML/CSS

This is from the official Girl Develop It Core Intermediate HTML/CSS curriculum. It was developed through the contributions of Garann Means, Alexis Goldstein, Julie Pagano, Lindsey Bieda, and Izzy Johnston.

The course is meant to be taught in 4 two-hour sections or 2 4-hour sections. The total course material, including time for in-class practice, should be approximately 8 hours. It is highly recommended that students be required to take the Core HTML/CSS curriculum, or demonstrate knowledge of HTML/CSS prior to attending class, as knowledge of HTML and CSS are assumed.

## Classes

### Class 1

HTML and CSS Review and Introduction to HTML5

Present a review of HTML and CSS, build a basic html page using industry conventions for naming and spacing elements. Review will cover the concepts of resetting css, having a #header, #footer, #main, using a #wrapper for centering. Review will also cover floating, the box model, and cascading precedence.

Learn how to use HTML form elements to add a (non-functioning) form to the basic html page.

Introduction to HTML5 will cover the history of HTML5, the advances, the drawbacks and the concepts of semantics. It will introduce semantic elements and form additions. Students will update the html page to use semantic elements and forms.

### Class 2
Introduction to CSS3

Students will be introduced to new CSS3 properties and abilities, including rounded corners, drop shadows, gradients, opacity, @font-face. Students will also learn to use transformations, transitions, and animation. Finally, students will learn about the new selectors and pseudo-selectors that can be used in CSS3.

Time permitting, students will learn about HTML5 and CSS3 columns and Flexbox.

### Class 3

Advances in HTML5

This class will cover additions to HTML5 beyond semantics. A significant portion of the class will focus on microdata, its formatting, and its potential effects on search and accessibility. The class will also cover new treatment of multimedia, geolocation, and, time permitting, storage.

### Class 4

Introduction to Responsive Design and Compatibility

This class will be split into two topics. The first will cover the concepts of responsive design and focus on the use of media queries. As responsive design can be its own course, the concepts will be covered broadly, rather than deeply.

The second topic will be about compatibility with older browsers. This will include use of libraries such as Modernizr or HTML5Shiv and will also discuss the struggles of designing a website for compatibility.

## Cloning Reveal submodule

Reveal is a submodule. To clone it correctly or learn more, see [these instructions](http://git-scm.com/book/en/Git-Tools-Submodules#Cloning-a-Project-with-Submodules).

## Theme customization in Reveal

You can change theme colors by changing the theme css to any of the following options:
```html
  <link rel="stylesheet" href="css/theme/gdidefault.css" id="theme">
  <link rel="stylesheet" href="css/theme/gdilight.css" id="theme">
  <link rel="stylesheet" href="css/theme/gdisunny.css" id="theme">
  <link rel="stylesheet" href="css/theme/gdicool.css" id="theme">
```
You can change the text editor theme by changing the highlight.js css to the following options:
```html
  <link rel="stylesheet" href="lib/css/dark.css">
  <link rel="stylesheet" href="lib/css/light.css">
```
You can change transition by changing the reveal transition property in Reveal.initialize
```javascript
  Reveal.initialize({
  				transition:  'default', // default/cube/page/concave/zoom/linear/none
  			});
```
