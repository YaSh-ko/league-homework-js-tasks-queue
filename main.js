const button = document.getElementById('button');
const block = document.querySelector('.block');


console.log("task 1");

Promise.resolve().then(() => {
  console.log("microtask 1");
})

block.style.color = 'green';

setTimeout(() => {
  console.log("task 2");

  Promise.resolve().then(() => {
    console.log("microtask 2");
  })

  Promise.resolve().then(() => {
    console.log("ahother microtask 2");
  })

}, 1000);

setTimeout(() => {
  console.log("task 3");

  Promise.resolve().then(() => {
    console.log("microtask 3");
  })

  block.textContent = 'by';


}, 3000);
