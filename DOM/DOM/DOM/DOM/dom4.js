//  Traversing the DOM
// var item = document.querySelector('#items');

// parent node  ->
// console.log(item.parentNode);
// item.parentNode.style.backgroundColor = 'gray';
// console.log(item.parentNode.parentNode);



// parent element  ->
// console.log(item.parentElement);
// item.parentElement.style.backgroundColor = 'gray';
// console.log(item.parentElement.parentElement);



// child node    ->
// console.log(item.childNodes);


// children   ->
// console.log(item.children);
// console.log(item.children[2]);
// item.children[2].style.background = 'yellow';


// first child   ->
// console.log(item.firstChild);


// first element child  ->
// console.log(item.firstElementChild);
// item.firstElementChild.textContent = 'sharpner';


// last child   ->
// console.log(item.lastChild);


// last element child  ->
// console.log(item.lastElementChild);
// item.lastElementChild.style.color = 'pink';

// next sibling
// console.log(item.nextSibling);

// next elementSibling
// console.log(item.nextElementSibling);


// previous sibling
// console.log(item.previousSibling);

// previous elementSibling
// console.log(item.previousElementSibling);
// item.previousElementSibling.style.color = 'purple';


// CREATE ELEMENT

// create a div  ->
var parentE = document.createElement('Div');
var childE = document.createElement('p');
console.log(parentE);
console.log(childE);
// console.log(newDiv);

// add class  ->
parentE.className = 'ak';


//add id  ->
parentE.id = 'hello';

// add attribute  ->
parentE.setAttribute('title', 'hello Div');

// cretae textnode  ->
var newDivText = document.createTextNode('hello world');

// add to div  ->
parentE.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(parentE);

parentE.style.fontSize = '30px';

container.insertBefore(parentE, h1);
