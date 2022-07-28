//byTag

var li = document.getElementsByTagName('li');
console.log(li);
li[1].textContent = 'hello2';
li[1].style.fontWeight = 'bold';
li[1].style.background = 'yellow';

// gives an error
// li.style.background = 'gray';

// do like this
for(var i=0; i<li.length; i++){
    li[i].style.background = 'gray';
}




// byClass
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// items[1].textContent = 'hello2';
// // items[1].style.fontWeight = 'bold';
// items[1].style.background = 'yellow';
// items[2].style.background = 'green';

// for(var i=0; i<items.length; i++){
//     items[i].style.fontWeight = 'bold';
// }