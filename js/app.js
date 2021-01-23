/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
// To return all sections in the document.
let sections = document.querySelectorAll("section");   
// For controlling ul
const navigationMenu = document.getElementById("navbar__list");
//To enhance performance
const fragment = document.createDocumentFragment();


//steps for creating dynamically navigation as unorder list
//1-looping in all sections
sections.forEach( section => {
//a-Get the value of data-nav for every section
    let text = section.getAttribute("data-nav");
//b- creat textNode which changing by changing data-nav value.
    let textNode = document.createTextNode(text);
//c-Creat link for every section
    let sectionLink = document.createElement("a");
    //inline css style (font color of links)
    sectionLink.style.color = "black";
//d-creat li for every section
    let newLi = document.createElement("li");
//2-Append text in link     
        sectionLink.appendChild(textNode);
//3-Append link in list
        newLi.appendChild(sectionLink);
//4-Append li in fragment to avoid repaint and reflow
        fragment.appendChild(newLi);
//5-when click to a specific link (scrollintoview)return the same specific section to view port smoothly
        sectionLink.addEventListener('click', function () {

            section.scrollIntoView({ behavior : 'smooth'})
        });

    });
//6- Append fragment into  ul (navigationMenu)
    navigationMenu.appendChild(fragment);
 


//Get the active section related to active link:

//On scrolling the function of getting both of active section and link will excute
    window.addEventListener("scroll",() => {
        //Get all sections 
        let sections = document.querySelectorAll("section");
        //*- looping in every section to know which section in viewport
        sections.forEach( activeSec => {
        //To return the section rect in viewport    
            let sectionRect =activeSec.getBoundingClientRect()
         //using this condition show which active section in viewport    
            if (sectionRect.top >=0 && sectionRect.top < 200 ){
         //looping to :
                sections.forEach( activeSec => {
                    //1-(remove active class from sections)
                    activeSec.classList.remove("your-active-class");
                    
                } );
                //2- and(add it to the active section only)
                activeSec.classList.add("your-active-class");
                
            
                

                //to return all links 
                let links = document.querySelectorAll("a");
                //to get data-nav value of active section
                let secNavtext = activeSec.getAttribute("data-nav")
                //looping in links to get the active link which related to active section
                links.forEach(actvLink => {
                    //if data-nav value of active section SAME to actvLink.textContent that is it.
                    if (actvLink.textContent == secNavtext){


                        let links2 = document.querySelectorAll("a");
                        //So looping in links
                        links2.forEach(actvLink => {
                        //1-(remove active class from links)
                           actvLink.classList.remove("your-active-class");
                           
                        }

            
                        );
                        //2- and(add it to the active link only)
                        actvLink.classList.add("your-active-class")
                        

                        
                    }
                } )
              }
            
    
         });
        
    });
//Creat back to top button
    let topBtn = document.createElement("button");
//text of buttoon
    topBtn.innerHTML = "Top";
//Append button to document
     document.body.appendChild(topBtn);
// add id  to button so we can style it
    topBtn.setAttribute("id", "btn");

//when click in button it returs the top of page
    topBtn.addEventListener("click",() => {
        document.documentElement.scrollTop = 0;
        
        
    });
    //when scroll show the button  by using
    // (scrollTop) that return how much element move vertically
    window.onscroll = () => {
        (document.documentElement.scrollTop > 50) ? topBtn .style.display = "block"
        : topBtn.style.display = "none";
        
         } ;


