const portland = document.querySelector('.portland');
const slider = document.querySelector('.slider');
const logo = document.getElementById('#logo');
const nav = document.querySelector('.nav-links');
const title = document.querySelector('.title');

const tl = new TimelineMax();

tl.fromTo(
    portland,1,
    {height: '0%'},
    {height: '70%', ease: Power2.easeInOut}
).fromTo(
    portland,
    1.2,
    {width: '0%'},
    {width: '100%', ease: Power2.easeInOut}
)
