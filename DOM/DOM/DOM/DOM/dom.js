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
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// items[1].textContent = 'hello2';
// items[1].style.fontWeight = 'bold';
// items[1].style.background = 'yellow';

// // gives an error
// // items.style.background = 'gray';

// // do like this
// for(var i=0; i<items.length; i++){
//     items[i].style.background = 'gray';
// }


//byTag

// var li = document.getElementsByTagName('li');
// console.log(li);
// li[1].textContent = 'hello2';
// li[1].style.fontWeight = 'bold';
// li[1].style.background = 'yellow';

// // gives an error
// // li.style.background = 'gray';

// // do like this
// for(var i=0; i<li.length; i++){
//     li[i].style.background = 'gray';
// }

// QUARYSELECTOR
// its work only for one item

// var qu = document.querySelector('.title');
// console.log(qu);

// var input = document.querySelector('input');
// input.value = 'ak';

// // we can use both
// // var sub = document.querySelector('input[type="submit"]');
// var sub = document.querySelector('.btn-dark');
// console.log(sub);
// sub.value = 'SEND';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'green';

// var lastitem = document.querySelector('.list-group-item:last-child');
// lastitem.style.color = 'blue';

// var twolastitem = document.querySelector('.list-group-item:nth-child(2)');
// twolastitem.style.color = 'purple';




// QUARYSELECTORALL

// var items = document.querySelectorAll('.title');
// console.log(items);
// items[0].textContent = 'hiiiii';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');
// for(var i=0; i<odd.length; i++){
//     odd[i].style.backgroundColor = 'gray';
//     even[i].style.backgroundColor = 'lightpink';
// }


