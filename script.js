const myName = document.querySelector('.name');
myName.addEventListener('mouseenter', function() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    myName.style.color = color;
});

const icon = document.querySelector('.emoji');
icon.addEventListener('mouseenter', function() {
    let emoji = '0x1F';
    const letters = '0123456789ABCDEF';
    emoji += Math.floor(Math.random() * 4 + 3);
    for (let i = 0; i < 2; i++){
        emoji += letters[Math.floor(Math.random() * 16)]; 
    }
    icon.textContent = String.fromCodePoint(emoji) + ", ";
});

const about = document.querySelector('#about');
about.addEventListener('click', function(){
    window.location.href = 'about.html';
});

const projects = document.querySelector('#projects');
projects.addEventListener('click', function(){
    window.location.href = 'projects.html';
});

const skills = document.querySelector('#skills');
skills.addEventListener('click', function(){
    window.location.href = 'skills.html';
});

const connect = document.querySelector('#connect');
connect.addEventListener('click', function(){
    window.location.href = 'connect.html';
});

