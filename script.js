const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');

let stars = [];
const numberOfStars = 160; // Fewer stars for a less dense background

// Set canvas size
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Star class
class Star {
    constructor(x, y, radius, alpha, delta, isBlinking) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.alpha = alpha;
        this.delta = delta;
        this.isBlinking = isBlinking;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
        ctx.fill();
        ctx.closePath();
    }

    update() {
        if (this.isBlinking) {
            this.alpha += this.delta;

            if (this.alpha <= 0.1 || this.alpha >= 1.0) {
                this.delta = -this.delta;
            }
        }
        this.draw();
    }
}

// Create stars
function init() {
    stars = [];
    for (let i = 0; i < numberOfStars; i++) {
        addStar(Math.random() * canvas.width, Math.random() * canvas.height);
    }
}

function addStar(x, y) {
    const radius = Math.random() * 1; // Smaller stars
    const isBlinking = Math.random() < 0.5; // 50% of stars will blink
    const alpha = isBlinking ? Math.random() * 0.5 + 0.2 : Math.random() * 0.2 + 0.8; // Blinking stars have initial alpha between 0.2 and 0.7, static stars between 0.8 and 1.0
    const delta = isBlinking ? (Math.random() * 0.02) + 0.01 : 0; // Blinking stars change alpha more quickly
    stars.push(new Star(x, y, radius, alpha, delta, isBlinking));
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
        star.update();
    });
}

// Event listener to add new stars on click
window.addEventListener('click', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    addStar(x, y);
});

init();
animate();

// script.js
const text = document.querySelector(".sec-text");
const textLoad = ()=>
{
    setTimeout(()=>
    {
        text.textContent = "Web Developer"
        
    },0)
    setTimeout(()=>
    {
        text.textContent = "Freelancer"
        
    },4000)
    setTimeout(()=>
    {
        text.textContent = "Creative Coder"
        
    },8000)
}
textLoad()
setInterval(textLoad,12000)


window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('nav-blur');
        navbar.classList.remove('nav-transparent');
    } else {
        navbar.classList.add('nav-transparent');
        navbar.classList.remove('nav-blur');
    }
});

// Initial state
document.getElementById('navbar').classList.add('nav-transparent');
let menuList = document.getElementById("menulist")
menuList.style.maxHeight = "0px";

function toggleMenu(){
    if(menuList.style.maxHeight == "0px")
    {
        menuList.style.maxHeight = "300px";
    }
    else{
        menuList.style.maxHeight = "0px";
    }
}
// email js
(function() {
    emailjs.init('lZssBnERw3H94vcvT');
  })();

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const templateParams = {
      from_name: formData.get('name'),
      to_name: 'Vandan',
      from_email: formData.get('email'),
    //   from_contact: formData.get('contact'),
    contact_number: formData.get('contact'),
      to_email: 'vandans304@gmail.com',
      message: formData.get('message')
    };

    emailjs.send('service_lmmspsj', 'template_oyo54yw', templateParams)
      .then(function(response) {
        alert('Thank you for your message. I will get back to you soon!');
        form.reset();
      }, function(error) {
        alert('Sorry, something went wrong. Please try again later.');
        console.log(error);
      });
  });
