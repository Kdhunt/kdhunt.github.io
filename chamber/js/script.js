const weatherAlert = document.querySelector(".weather-alert");
const curDate = new Date();
weatherAlert.querySelector('.close').addEventListener('click', e =>{
    weatherAlert.classList.remove("active");
})
const nav = document.querySelector("nav");
document.querySelector(".nav-toggle-mobile").addEventListener("click",e=>{
    
    if(nav.classList.contains("show")){
        nav.classList.remove("show");
    }else{
        nav.classList.add("show");
    }
});