import Header from "../customelement/header/header.js";

customElements.define("header-element", Header);

const btns = document.querySelectorAll('.btnform')
btns.forEach(btn =>{
    btn.addEventListener("click",form_data)
})



function form_data(e){
    console.log(e.target);
    const formElement = document.querySelector("form")
    const formData = new FormData(formElement);
}