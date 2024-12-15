const list = document.querySelector('#categories');
const items = document.querySelectorAll('.item');


// console.log(list);
console.log(`Number of categories: ${list.children.length}`);
// console.log(items.length);

console.log(items.forEach(item => {
    const title = item.querySelector('h2').textContent;

    console.log(`Category: ${title}`);

    const elemCount = item.querySelectorAll('li');

    console.log(`Elements: ${elemCount.length}`);
}));