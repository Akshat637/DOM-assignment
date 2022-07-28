// QUARYSELECTOR
// its work only for one item

var qu = document.querySelector('.title');
console.log(qu);

var input = document.querySelector('input');
input.value = 'ak';

// we can use both
// var sub = document.querySelector('input[type="submit"]');
var sub = document.querySelector('.btn-dark');
console.log(sub);
sub.value = 'SEND';

var item = document.querySelector('.list-group-item');
item.style.color = 'green';

var lastitem = document.querySelector('.list-group-item:last-child');
lastitem.style.color = 'blue';

var inn = document.querySelector('.list-group-item:last-child');
inn.visibility= 'hidden';
console.log(inn);

var twolastitem = document.querySelector('.list-group-item:nth-child(2)');
twolastitem.style.color = 'purple';




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