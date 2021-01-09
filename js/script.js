var current_date = new Date();


document.addEventListener("DOMContentLoaded", ()=>{
    if (document.readyState === "interactive" || document.readyState === "complete" ) {
        document.getElementById('copydt').innerText = current_date.getFullYear();
        document.getElementById('updatedt').innerText = 
        ("0" + current_date.getMonth()+1).slice(-2)
        +"/"+("0" + current_date.getDate()).slice(-2)
        +"/"+current_date.getFullYear()
        +" "+current_date.getHours()
        +":"+current_date.getMinutes()
        +":"+current_date.getSeconds()
        ;
        document.getElementById('updatedt').innerText = current_date.now();
    }
});


