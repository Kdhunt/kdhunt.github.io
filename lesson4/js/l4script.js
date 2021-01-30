var current_date = new Date();
let copydt = document.getElementById('copydt');
copydt.innerText = current_date.getFullYear();
let updatedt = document.getElementById('updatedt')
updatedt.innerHTML =
("0" + current_date.getMonth()+1).slice(-2)
+"/"+("0" + current_date.getDate()).slice(-2)
+"/"+current_date.getFullYear()
+" "+current_date.getHours()
+":"+current_date.getMinutes()
+":"+current_date.getSeconds()
;

document.getElementById("menu_toggle").addEventListener("click", ()=>{
    document.getElementById("nav_menu").classList.toggle("menu_active");
});
