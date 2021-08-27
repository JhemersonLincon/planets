


//click botão da class tbn-mobile
const btn_mobile = document.querySelector("button#btn-mobile");
const nav = document.querySelector("#nav");
const area = document.querySelector("div.ações")
btn_mobile.addEventListener("click", e =>{
    nav.classList.toggle("active");
    area.classList.toggle("hidden")
})



// click e apaga os botôes das class btn
const btns = document.querySelectorAll(".btn");
btns.forEach(Element =>{
    
    Element.addEventListener("click", function(){
        btns.forEach(elements =>{
            elements.classList.remove("selected")
        })
        this.classList.add("selected")
        
    })
})