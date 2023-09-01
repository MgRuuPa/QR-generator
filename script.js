let btn = document.getElementById("btn") ;
let main = document.getElementById("main") ;
let qr = document.getElementById("qr");
let input = document.getElementById("input") ;
let img = document.querySelector("img");
let down = document.getElementById("down") ;
let link;


btn.addEventListener("click", () => {
    let show = input.value ;
    input.value = "" ;
    if(!show) return ;
    main.classList.add("show") ;
    qr.style.opacity = 1 ;
    down.style.opacity = 1 ;
    down.style.pointerEvents = "auto" ;
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${show}`;
    link = img.src;
    console.log(link) ;
})

function downloadImage() {
    const a = document.createElement("a");
    a.href = link;
    a.download = "qr_code.png"; // Change the filename as needed
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  
down.addEventListener("click", downloadImage);