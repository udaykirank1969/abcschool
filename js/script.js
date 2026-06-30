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