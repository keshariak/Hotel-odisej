var line1 =document.querySelector("#line1")
var line2 =document.querySelector("#line2")
var line3 =document.querySelector("#line3")
var nav1 =document.querySelector("#nav #nav1")
flag=0
nav1.addEventListener("click",function(){
    if(flag==0){
    line1.style.rotate= "45deg"
    // line1.style.marginTop="8px"
    // line3.style.marginBottom="8px"
    line3.style.rotate= "-45deg"
    line2.style.scale= 0
    flag=1

    }
    else{
        line1.style.rotate= "0deg"
    line3.style.rotate= "0deg"
    line2.style.scale= 1
    flag=0

    }
    
})

var tl= gsap.timeline()
tl.from("#page1 svg",{
    y:-50,
    opacity:0,
    delay:0.3,
    duration:0.5
})
.from("#page1 img",{
    scale:0.5,
    delay:-0.5,
    ease:Power4.easeOut,
    duration:1,
    borderRadius:"15px"
})
.from(" #nav",{
    y:-50,
    opacity:0,
    duration:0.2,
    delay:-0.1
   
})