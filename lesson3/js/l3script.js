var current_date = new Date();
    let copydt = document.getElementById('copydt');
    copydt.innerHTML = current_date.getFullYear();
    let updatedt = document.getElementById('updatedt')
    updatedt.innerHTML =
    ("0" + current_date.getMonth()+1).slice(-2)
    +"/"+("0" + current_date.getDate()).slice(-2)
    +"/"+current_date.getFullYear()
    +" "+("0" + current_date.getHours()).slice(-2)
    +":"+("0" + current_date.getMinutes()).slice(-2)
    +":"+("0" + current_date.getSeconds()).slice(-2)
    ;

