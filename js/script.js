var current_date = new Date();
/*document.getElementById('copydt').innerText = current_date.getFullYear();
    document.getElementById('updatedt').innerText = 
    ("0" + current_date.getMonth()+1).slice(-2)
    +"/"+("0" + current_date.getDate()).slice(-2)
    +"/"+current_date.getFullYear()
    +" "+current_date.getHours()
    +":"+current_date.getMinutes()
    +":"+current_date.getSeconds()
    ;
*/
/*document.addEventListener("DOMContentLoaded", () => {
    console.log(document.readyState);
    if (document.readyState === "interactive" || document.readyState === "complete" ) {
        document.getElementById('copydt').innerText = current_date.getFullYear();
        document.getElementById('updatedt').innerText = 
        ("0" + current_date.getMonth()+1).slice(-2)
        +"/"+("0" + current_date.getDate()).slice(-2)
        +"/"+current_date.getFullYear()
        +" "+current_date.getHours()
        +":"+("0" + current_date.getMinutes()+1).slice(-2)
        +":"+("0" + current_date.getSeconds()+1).slice(-2)
        ;
    }
});
*/


    var current_date = new Date();
    let copydt =  document.getElementById('copydt');
    copydt.innerHTML = current_date.getFullYear();
    document.getElementById('updatedt').innerHTML = 
    ("0" + current_date.getMonth()+1).slice(-2)
    +"/"+("0" + current_date.getDate()).slice(-2)
    +"/"+current_date.getFullYear()
    +" "+current_date.getHours()
    +":"+current_date.getMinutes()
    +":"+current_date.getSeconds()
    ;

