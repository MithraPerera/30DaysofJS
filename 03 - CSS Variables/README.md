# Overrview

Use JS to update CSS variables and edit the Spacing, Blur and Background Color of the image on screen.

# Lessons Learned

- The -- in variable names is the convention so that it is backwards compatable and the highest place to declare variables is in :root which is kind of like declaring attributes in html.

- People convert their NodeList to an Array because it gives you access to all the methods that comes with Arrays. But one of the recent additions to the NodeList Prototype is the forEach method.

- we use the mousemove event so that even just moving the slider constantly triggers the callback function

- data attribute in HTML is something you made up and can be anything prefixed with data-

- in the handleUpdate function we use this.name(where this is pointing to the input variable that called it) to create the variable and then set it to the value + the suffix which is just "px". Thus, creating the variable how it is in the CSS.
