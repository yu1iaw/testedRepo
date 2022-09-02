'use strict';

console.log('Hello World!');

const tail = document.querySelector('.tail');
const chase = tail.animate([
    {left: 'calc(50% - 80px)', top: 'calc(95vh / 2 - 50px)'},
    {left: 'calc((50% - 80px) + 240px)', top: 'calc(95vh / 2 - 50px)'},
    {left: 'calc((50% - 80px) + 240px)', top: 'calc((95vh / 2 - 50px) - 200px)'}, 
    {left: 'calc(50% - 80px)', top: 'calc((95vh / 2 - 50px) - 200px)'},
    {left: 'calc(50% - 80px)', top: 'calc(95vh / 2 - 50px)'}
], {
    duration: 53000,
    iterations: 2,
    fill: "forwards"
});
