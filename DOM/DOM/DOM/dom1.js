// this is how we access html content but not modified

// console.log(document.all[12]);
// document.all[12].textContent = 'ak';
// console.log(document.title)
// document.title = 123;
// document.body[3] = 'hello';
 


// now we see css selectors (style atrributes)

// console.log(document.getElementById('header-title'));

// let headv = document.getElementById('header-title');
// headv.textContent = 'hello';
// headv.innerHTML = '<h1>hello</h1>';

// var m = document.getElementById('main-header');
// m.style.borderBottom = 'solid 10px #000 ';


// byClass
var items = document.getElementsByClassName('list-group-item');
console.log(items);
items[1].textContent = 'hello2';
// items[1].style.fontWeight = 'bold';
items[1].style.background = 'yellow';
items[2].style.background = 'green';

for(var i=0; i<items.length; i++){
    items[i].style.fontWeight = 'bold';
}

// // gives an error
// // items.style.background = 'gray';

// // do like this
// for(var i=0; i<items.length; i++){
//     items[i].style.background = 'gray';
// }