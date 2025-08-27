1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer:
getElementById : getElementById use for catch the element of id.It always return single element.
getElementByClassName: getElementByClassName use for catch element of class. It always return collection of HTML. It is look-like array but it is not. It called array like object .     
querySelector : querySelector returns first elements that matches with the the css selector.
querySelectorAll: querySelector returns ALL elements that matches with the the css selector.


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

