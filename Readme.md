**1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**

| getElementById                                                                 | getElementByClassName                                                                 | querySelector / querySelectorAll                                                                 |
|-------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| getElementById use for get the element of id.It always return single element. | getElementByClassName use for get element of class. It always return collection of HTML. It is look-like array but it is not. It called array like object . | querySelector returns first elements that matches with the the css selector. querySelector returns ALL elements that matches with the the css selector. |

**2. How do you create and insert a new element into the DOM?**

Answer: First catch select parent element through getElementById where I want to append  new element. Now create new element. Set inner content. Append with the parent div. For Example:  

```javascript
const container = document.getElementById('container');
const newH1 = document.createElement('h1');
newH1.innerText = 'This is h1';
container.appendChild(newH1);
```
**3. What is Event Bubbling and how does it work?**

Answer: Event Bubbling is a way where event travel in the DOM. For example:  
when someone click a button that trigger the click event and it bubble-up to the parent element, then grandparent.  
**Flow-diagram:** `child --> parent --> grandparent --> document`

**4. What is Event Delegation in JavaScript? Why is it useful?**

Answer: Event Delegation is a technique in js where put a single event listener instead of adding Listener of each child.  
It is very useful. Because:  
- It saves memory and make codebase faster.  
- It works automatically for new element.

**5. What is the difference between preventDefault() and stopPropagation() methods?**

Answer:  
- **preventDefault()**: stops the browser to doing normal action, like from taking to a new page.  
- **stopPropagation()**: stop the event from "bubbling up" and triggering parent elements.
