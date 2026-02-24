1.What is the difference between getElementById,getElementsByClassName, and querySelector / querySelectorAll?

1---ANSWER--

The differece between getElementById,getElementsByClassName, and querySelector / querySelectorAll is that if we write 
|||getElementById we can choose the specific item which we gava id in html file.

|||getElementByClassName use for classnames like if we take a div and give some class name the getElementByClassName help to the class and it return lots of elements form different sections.

||| quarySelectorAll workes like css like if we show complex thing in Html by js we can use  quarySelectorAll. It workes like that if we set an id in section then take that id and in this id there are lot of sections in those sections we want to get one specific span and that time we could use the quarySelectorAll althoug it always retunr in NodeList .It is a very flexible element it can return anything (id,class, tag, div, p, span and more).

||| querySelector is very smiler with quarySelectorAll but it can return only fist thing in section or id . For example if we set an id in a section and in this section there are three span tag if we use only querySelector it retrun us the first span tag.


2.How do you create and insert a new element into the DOM?

2---ANSWER---


Creating and inserting means that we are create a html element in dom .
||| we can use create element make new html thing in dom use js . For this we use document.createElement tag For example if we are make a div with createElement and after that we can add text, class, id or attribute in that element.

||| Insert element mainly use for insert that element into the dom using the appendchild method . if we create a new div in dom and we want insert in out html body that the body should be parent and the div is child , And that type we can use create and insert element.



3. What is Event Bubbling? And how does it work?

||| event bubbling means when it happend on particular child it dose not stop there it goes up and it took there parentelment until the full code note end.

||| it work like if we set a function in a button and the div and the body and after if we click the button the will give the exptected output but when we click the div part the boutton and div both are gives me output and lastly if we click the body for the bubblig reason the hole part will be work and show clicked.


4 .  What is Event Delegation in JavaScript? Why is it useful?

||| event delegation means that we add eventlistener on the parent . If we click on a child the event goes up to the parent for the bubbling and then we can check by parent which child was clicked.we can delete child from the parent to use this method. Delegation is very useful beacuse it take short time, we dont need to more and more eventListener ,codes show more clear and etc.



5.What is the difference between preventDefault() and stopPropagation() methods?

||| stopPropagation use for sotops the event from gioing up to parent element. example if we click a button inside a div then the button and div will run beacuse of bubblig but if we use stopPropagation than it will be stop and it run only the button the parent div will not run.

||| preventDefault usally use for froms , links , buttons and etc. preventdefault usally does stop default action form element example if we runnig one page but we dont want to go this page to another page that time we use that element preventdefault.