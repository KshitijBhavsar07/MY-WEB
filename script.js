
window.addEventListener("scroll", function () {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 0);
});


const burger = document.getElementById('burger');
const nav = document.getElementById('nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('toggle');
});


const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 60, 
            behavior: "smooth"
        });
    });
});
const starsContainer = document.querySelector('.galaxy');
const meteorsContainer = document.createElement('div');
meteorsContainer.className = 'meteors';
document.body.appendChild(meteorsContainer);

function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    
  
    const size = Math.random() * 3 + 2; 
    star.style.width = `${size}px`;
    star.style.height = star.style.width;

   
    const fallDuration = Math.random() * 3 + 2; 
    star.style.animation += `, fall ${fallDuration}s linear forwards`;
    star.style.animationDelay = `${Math.random() * 2}s`; 

    starsContainer.appendChild(star);
}

function createMeteor() {
    const meteor = document.createElement('div');
    meteor.className = 'meteor';

   
    const size = Math.random() * 10 + 5; 
    meteor.style.width = `${size}px`;
    meteor.style.height = `${size / 2}px`; 
    
    meteor.style.left = `${-size}px`;
    meteor.style.top = `${Math.random() * 20}vh`; 

    
    const fallDuration = 5; 
    meteor.style.animation = `meteorFall ${fallDuration}s linear forwards`;

    meteorsContainer.appendChild(meteor);

    
    setTimeout(() => {
        meteor.remove();
    }, fallDuration * 1000);
}


for (let i = 0; i < 100; i++) {
    createStar();
}


setInterval(createMeteor, 5000); 
document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const suggestion = document.getElementById('suggestion').value;

    
    alert(`Thank you for your feedback!\nEmail: ${email}\nMobile: ${mobile}\nSuggestion: ${suggestion}`);

    
    document.getElementById('feedback-form').reset();
});
const boxes = document.querySelectorAll('.box');
let delay = 0;


function floatBox(box, delay) {
    setTimeout(() => {
        box.style.animation = `floating 20s linear infinite`;
    }, delay);
}


boxes.forEach((box, index) => {
    floatBox(box, index * 2000);  
});
