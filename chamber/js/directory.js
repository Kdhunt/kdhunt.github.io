const directoryDataUri = "http://127.0.0.1:5500/chamber/thorntonDirectory.json";
var businessContainer = document.querySelector(".business-display-wrapper");
fetch(directoryDataUri)
  .then((response) => response.json())
  .then((businesses) => {
    console.log(businesses);
    
    businesses.forEach(business=>{
        let block = `
        <div class="businesslisting">
            <div class="bImg"><img alt="${business.name}" src="images/${business.id}${business.media}" loading="lazy" /></div>
            <div class="bName"><h4>${business.name}</h4></div>
            <div class="bPhone">${business.phone}</div>
            <div class="bUrl">${business.url}</div>
            <div class="bAddress">${business.address}</div>
            <div class="bDesc">${business.description}</div>
            <div class="bLevel ${business.level}">${business.level} Member</div>
        </div>
    `
    businessContainer.insertAdjacentHTML("beforeend", block);
    });

  });
document.querySelector(".icon.icon-table2").addEventListener("click",(e)=>{
    businessContainer.classList.remove("list");
});
document.querySelector(".icon.icon-list").addEventListener("click",(e)=>{
    businessContainer.classList.add("list");
});
