const box_space = document.querySelector("ul.box");

const widht = window.innerWidth;

console.log(widht)
const stars = 50;
for(let i=0; i<stars; i++){
    const li = document.createElement("li");
    li.classList.add("stars");
    const randomposition = Math.floor(Math.random() * (widht - 10)+10)
    const delay = Math.random() * (10 -1)+1
    li.style.opacity = `0`
    li.style.top = `${randomposition}px`
    li.style.left = `${randomposition}px`
    li.style.animationDelay = `${delay}s`
    box_space.appendChild(li)

}
