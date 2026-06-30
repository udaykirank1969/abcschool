// ===================================
// ST Thomas School - script.js
// ===================================
// Mobile Menu
const menuToggle=document.getElementById("menu-toggle");
const navbar=document.getElementById("navbar");
menuToggle.addEventListener("click",()=>{
 navbar.classList.toggle("show");
});
// Close menu after clicking a link
document.querySelectorAll("#navbar a").forEach(link=>{
 link.addEventListener("click",()=>{
 navbar.classList.remove("show");
 });
});
// ===============================
// Hero Image Slider
// ===============================
const hero=document.querySelector(".hero");
const images=[
 "images/hero1.jpg",
 "images/hero2.jpg",
 "images/hero3.jpg"
];
let current=0;
function changeHeroImage(){
 current=(current+1)%images.length;
 hero.style.background=
 `linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.55)),
 url('${images[current]}')`;
 hero.style.backgroundSize="cover";
 hero.style.backgroundPosition="center";
}
// Change every 5 seconds
setInterval(changeHeroImage,5000);
// Sticky Navbar

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.classList.add("scrolled");

}

else{

header.classList.remove("scrolled");

}

});
// ===============================
// Counter Animation
// ===============================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter = entry.target;

const target = +counter.dataset.target;

let count = 0;

const speed = target / 100;

const updateCounter = ()=>{

count += speed;

if(count < target){

counter.innerText = Math.ceil(count);

requestAnimationFrame(updateCounter);

}else{

counter.innerText = target + "+";

}

};

updateCounter();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>counterObserver.observe(counter));
// ===============================
// Back To Top
// ===============================


const backToTop = document.getElementById("backToTop");

if(backToTop){

    window.addEventListener("scroll",()=>{

        if(window.scrollY>400){

            backToTop.classList.add("show");

        }else{

            backToTop.classList.remove("show");

        }

    });

    backToTop.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}
// ===============================
// Loading Screen
// ===============================

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if(loader){

        setTimeout(function(){

            loader.style.opacity = "0";

            loader.style.visibility = "hidden";

        },2000);

    }

});
// ===============================
// Scroll Progress Bar
// ===============================

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});