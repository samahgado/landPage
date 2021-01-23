# Landing Page Project
1- This project about creating a multi-section landing page dynamically using:
(javascript , ES6 , CSS style ,Stater page with HTML content).

2_ Its main purpose to build a dynamic navigation menu which add links dynamiclly in navigation
for any added section in static HTML page.

3 _ Add back to Top button dynamiclly to enhance the usability.

4 - When scrolling the active section in viewport will take a special style.

5 - when clicking in a specific link in the navigation menu,it scrolls in the same specifis active section.

6-All features are usable across modern desktop, tablet, and phone browsers.

# Steps for building that dynamic navigation menu:
# first we use these Global Variables
 1- Document.querySelectorAll();
 to return all sections in the document so we ca controll them.

 2 -Document.getElementById();
For controlling ul

3- Document.createDocumentFragment();
to enhance performance by decreasing repaint and reflow of the page.

# //steps for creating dynamically navigation menu as unorder list

# querySelectorAll();
1- Query all sections and keep them in variable.  

# forEach();
2-looping in all sections

# getAttribute();
3-Get the value of data-nav for every section and use it as textNode which changing by changing data-nav value. 

# Document.createTextNode();
4-creat textNode to the link.

# Document.createElement();
5-Creat link and li for every section.

# appendChild();
6-Append text in link , then Append link in list ,then Append li in fragment to avoid repaint and reflow and ,finally Append fragment into  ul (navigationMenu).

# Add EventListener to the links and use scrollIntoView().
# scrollIntoView({'behavior':'smooth'});
7-when click to a specific link (scrollintoview)return the same specific section to view port smoothly.

                                  ***************

 # GET the active section related to the active link:

# querySelectorAll();
1- Query all sections and keep them in variable

 # forEach();
2-looping in all sections

# getBoundingClientRect(); 
3- To return the section rect in viewport, and by using (if condition)show which active section in viewport.

# classList.remove();
(remove active class from sections)

# classList.add();
and(add it to the active section only)

# querySelectorAll();
Query all links and keep them in variable.

# forEach();
2-looping in all links.

# getAttribute();
to get data-nav value of active section , and by using (if condition) //if data-nav value of active section SAME to actvLink.textContent that is active section.

# classList.remove();
(remove active class from links)

## classList.add();
and(add it to the active link only)

                    **********************************
# .navbar__menu li a.your-active-class 
# section.your-active-class
we can use also css to style active section related to the active link.
#              _____________________________________________-

# Get back to top buttton 

# document.createElement();
1_ to creat button

 # appendChild();
 2_ append button to the page.

 # setAttribute( , );
3- to add id to the button or class so we can style it.
  # srollTop
 4- that return how much element move vertically

 #          ___________________________________

 # Recommend
 Build dynamic navigation for static site to improve the usability as we do not know how much content will be added to a page through a CMS or an API .