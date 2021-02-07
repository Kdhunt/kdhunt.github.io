var current_date = new Date();
const days = ['Sunday','Monday','Tuesday', 'Wednesday', 'Thurssday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let copydt = document.getElementById('copydt');
copydt.innerText = current_date.getFullYear();
// Wednesday, 24 January 2021
let updatedt = document.getElementById('updatedt');
updatedt.innerHTML = days[current_date.getDay()]+", "
+("0" + current_date.getDate()).slice(-2)+" "
+months[current_date.getMonth()]+" "
+current_date.getFullYear()

;

document.getElementById("menu_toggle").addEventListener("click", ()=>{
    document.getElementById("nav_menu").classList.toggle("menu_active");
});


    let banner = document.getElementsByClassName("banner_bar")[0];
    if(current_date.getDay() == 6){
        banner.style.display = "block";
    }




