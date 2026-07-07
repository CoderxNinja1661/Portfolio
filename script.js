/*=========================
LOADER
=========================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1200);

});


/*=========================
MOBILE MENU
=========================*/

const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.onclick = () => {

    navbar.classList.toggle("active");

};


/*=========================
CLOSE MENU
=========================*/

document.querySelectorAll(".navbar a").forEach(link => {

    link.onclick = () => {

        navbar.classList.remove("active");

    };

});


/*=========================
STICKY HEADER
=========================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "rgba(5,8,22,.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    }

    else{

        header.style.background = "rgba(5,8,22,.35)";
        header.style.boxShadow = "none";

    }

});


/*=========================
TYPING EFFECT
=========================*/

const words = [

    "Data Analyst",

    "Python Developer",

    "SQL Specialist",

    "Power BI Enthusiast",

    "MCA Student"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    const current = words[wordIndex];

    if(!deleting){

        typing.textContent = current.substring(0,charIndex++);

        if(charIndex > current.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }

    else{

        typing.textContent = current.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting ? 60 : 120);

}

typeEffect();


/*=========================
SCROLL REVEAL
=========================*/

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.20
});

document.querySelectorAll(

".section,.project-card,.skill-card,.service-card,.certificate-card,.stat-card,.timeline-item,.info-box"

).forEach(el=>{

    el.classList.add("fade-up");

    observer.observe(el);

});


/*=========================
ACTIVE NAVBAR
=========================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 150;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") == "#" + current){

            link.classList.add("active");

        }

    });

});


/*=========================
SCROLL TO TOP
=========================*/

const scrollBtn = document.createElement("button");

scrollBtn.id = "scrollTop";

scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';

document.body.appendChild(scrollBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        scrollBtn.style.display = "block";

    }

    else{

        scrollBtn.style.display = "none";

    }

});

scrollBtn.onclick = ()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


/*=========================
COUNTER ANIMATION
=========================*/

const counters = document.querySelectorAll(".stat-card h2");

const counterObserver = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

let counter = entry.target;

let target = parseInt(counter.innerText);

let count = 0;

function update(){

count++;

counter.innerText = count + "+";

if(count < target){

requestAnimationFrame(update);

}

}

update();

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});


/*=========================
PROJECT HOVER
=========================*/

document.querySelectorAll(".project-card").forEach(card=>{

card.addEventListener("mousemove",e=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;

const y = e.clientY - rect.top;

const rotateX = -(y - rect.height/2)/18;

const rotateY = (x - rect.width/2)/18;

card.style.transform =

`perspective(1000px)

rotateX(${rotateX}deg)

rotateY(${rotateY}deg)

scale(1.03)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform =

"perspective(1000px) rotateX(0) rotateY(0) scale(1)";

});

});


/*=========================
SMOOTH SCROLL
=========================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(

this.getAttribute("href")

).scrollIntoView({

behavior:"smooth"

});

});

});


/*=========================
CUSTOM CURSOR GLOW
=========================*/

const glow = document.createElement("div");

glow.id = "cursor-glow";

document.body.appendChild(glow);

glow.style.position = "fixed";
glow.style.width = "25px";
glow.style.height = "25px";
glow.style.borderRadius = "50%";
glow.style.background = "#00dbde";
glow.style.pointerEvents = "none";
glow.style.filter = "blur(18px)";
glow.style.opacity = ".6";
glow.style.zIndex = "9999";
glow.style.transition = ".05s";

document.addEventListener("mousemove",(e)=>{

glow.style.left = e.clientX - 12 + "px";
glow.style.top = e.clientY - 12 + "px";

});


/*=========================
CONSOLE MESSAGE
=========================*/

console.log(

"%cWelcome to Hariom Gupta Portfolio",

"font-size:24px;color:#00dbde;font-weight:bold;"

);