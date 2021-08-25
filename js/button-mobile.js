const btn = document.querySelector("button#btn-mobile");
const nav = document.querySelector("#nav");

console.log(btn)
console.log(nav)
btn.addEventListener("click", e =>{
    nav.classList.toggle("active");
})