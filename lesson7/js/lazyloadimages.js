const toLoad = document.querySelectorAll("img[data-src]");

let loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => { image.removeAttribute("data-src")}
}
if('IntersectionObserver' in window){
    let imgObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            //check if it is an image
            if (entry.isIntersecting){
                if(entry.target.tagName == 'IMG'){
                    loadImages(entry.target);
                }
                observer.unobserve(entry.target);
            } 
        });
    }, {
        threshhold: 1,
        rootMargin: "0px 0px 200px 0px"
    });

    toLoad.forEach((image) => {
        imgObserver.observe(image);
    });
}
else{
    toLoad.forEach((image) => {
       // loadImages(image);
    });
}