1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer:
getElementById          ||  getElementByClassName      || querySelector / querySelectorAll
-----------------------    ----------------------        --------------------------------
getElementById use for  || getElementByClassName use for|| querySelector returns first 
catch the element of id.|| catch element of class. It   || elements that matches with the
It always return single || always return collection of  || the css selector.
element.                || HTML. It is look-like array  || querySelector returns ALL
                        || but it is not. It called     || elements that matches with the
                        || array like object            || the css selector.


2.How do you create and insert a new element into the DOM?
Answer: First catch select parent element through getElementById where i want to append  new element. . Now create new element.Set inner content.Append with the parent div. For Example. 
"const container=document.getElementById('container')
const newH1=document.createElement('h1')
newH1.innerText='This is h1'
container.appendChild(newH1)
"

3.What is Event Bubbling and how does it work? 
Answer: Event Bubbling is a way where event travel in the DOM. For example
when someone click a button that trigger the click event and it bubble-up to the parent element,then grandparent.
chid-->parent-->grandparents-->document

