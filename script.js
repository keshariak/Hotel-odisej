var line1 =document.querySelector("#line1")
var line2 =document.querySelector("#line2")
var line3 =document.querySelector("#line3")
var nav1 =document.querySelector("#nav #nav1")
flag=0
nav1.addEventListener("click",function(){
    if(flag==0){
    line1.style.rotate= "45deg"
    line1.style.transformOrigin= " 35% center"

    // line1.style.marginTop="8px"
    // line3.style.marginBottom="8px"
    line3.style.rotate= "-50deg"
    line3.style.transformOrigin= " 35% center"

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
    delay:0.8,
    duration:0.5
})
.from("#page1 img",{
    scale:0.5,
    delay:-0.5,
    ease:Power4.easeOut,
    duration:1.2,
    borderRadius:"15px"
})
.from(" #nav",{
    y:-50,
    opacity:0,
    duration:0.2,
    delay:-0.1
   
})





 var h2data=document.querySelectorAll(".container h2")
 h2data.forEach(function(data){
    var textData = data.textContent;
    var splitedh2=textData.split("")
    var clutter=""
    splitedh2.forEach(function(elem){
    clutter += `<span>${elem}</span>`

})

data.innerHTML =clutter

 })

 gsap.to("#page2-container h2 span ",{
    color:"#E3E3C4",
    stagger:0.2,
    scrollTrigger:{
        trigger: "#page2-container h2 span ",
        scroller: "body",
        // markers:true,
        start:"top 60%",
        end:"top -40%",
        scrub:2
    }
 })
 gsap.to("#page3-container h2 span ",{
    color:"#434B34",
    stagger:0.2,
    scrollTrigger:{
        trigger: "#page3-container h2 span ",
        scroller: "body",
        // markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:2
    }
 })
 gsap.to("#page6-container h2 span ",{
    color:"#E3E3C4",
    stagger:0.2,
    scrollTrigger:{
        trigger: "#page6-container h2 span ",
        scroller: "body",
        // markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:2
    }
 })
 gsap.to("#page7-container h2 span ",{
    color:"#434B34",
    stagger:0.2,
    scrollTrigger:{
        trigger: "#page7-container h2 span ",
        scroller: "body",
        // markers:true,
        start:"top 60%",
        end:"top -30%",
        scrub:2
    }
 })
 
 gsap.to("#page10-container h2 span ",{
    color:"#E3E3C4",
    stagger:0.2,
    scrollTrigger:{
        trigger: "#page10-container h2 span ",
        scroller: "body",
        // markers:true,
        start:"top 30%",
        end:"top -10%",
        scrub:2
    }
 })
 // PAFE 3 top ka animation


gsap.to("#page3 .svg1",{
    left:"-30%",
    scrollTrigger:{
        trigger:"#page3 svg",
        scroller:"body",
        start:"top 105%",
        end:"top -5%",
        scrub:3,
        // markers:true

    }
})
gsap.to("#page3 .svg2",{
    left:"10%",
    scrollTrigger:{
        trigger:"#page3 svg",
        scroller:"body",
        start:"top 105%",
        end:"top -5%",
        scrub:1,
        // markers:true

    }
})

// PAGE3 CONTENT ka animation
gsap.from("#page3-content",{
    y:40,
    opacity:0,
    duration:0.2,
    stagger:1,
    scrollTrigger:{
        trigger:"#page3-content h6",
        scroller:"body",
        start:"top 80%",
        end:"top 50%",
        scrub:1,
        // markers:true

    }

})
gsap.from("#page3-content #left h4",{
    y:40,
    opacity:0,
    duration:0.2,
    stagger:1,
    scrollTrigger:{
        trigger:"#page3-content h6",
        scroller:"body",
        start:"top 60%",
        end:"top 50%",
        scrub:1,
        // markers:true

    }

})
gsap.from("#page3-content #left #img",{
    y:40,
    opacity:0,
    duration:0.2,
    stagger:1,
    scrollTrigger:{
        trigger:"#page3-content h6",
        scroller:"body",
        start:"top 30%",
        end:"top 50%",
        scrub:1,
        // markers:true

    }

})
gsap.from("#page3-content #right #img2",{
    y:70,
    opacity:0,
    duration:2,
    stagger:1,
    scrollTrigger:{
        trigger:"#page3-content h6",
        scroller:"body",
        start:"top 10%",
        end:"top 50%",
        scrub:1,
        // markers:true

    }

})
// ////////////////////////////////////   PAGE4 STARAT  ////////////////////////////////////////////////////////////////

gsap.from("#page4 .section .sec ",{
    y:80,
    stagger:1,
    duration:2,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page4 .section .sec ",
        // markers:true,
        start:"top 100%",
        end:"top 10%",
        scrub:4,
        yoyo:true
    }

})
// /////////////////////////////////    PAGE 04 ANIMATION  ////////////////////////////////////////////////////////////////////
var p4img = document.querySelector("#page4 .section .sec #img")
var sec = document.querySelector("#page4 .section .sec")
var roomname =document.querySelector("#page4 .section .sec #room-name")
var p2btn = document.querySelector("#page4 .section .sec button")
sec.addEventListener("mouseenter",function(){
    p4img.style.left=0,
    roomname.style.left="23%",
    p4img.style.transition= "0.6s"
    roomname.style.transition= "0.6s"
    sec.style.backgroundColor= "#5B6647"
    roomname.style.color= "#E3E3C4"
    p2btn.style.backgroundColor= "#E3E3C4"
    p2btn.style.color= "#5B6647"
})
sec.addEventListener("mouseleave",function(){
    p4img.style.left="-23%",
    roomname.style.left=0,
    p4img.style.transition= "0.5s"
    roomname.style.transition= "0.5s"
    sec.style.backgroundColor= "#F7F7EE"
    roomname.style.color= "#5B6647"
    p2btn.style.backgroundColor= "#5B6647"
    p2btn.style.color= "#F7F7EE"
})





// ////////////////////////////////////   PAGE 05 STARAT  ////////////////////////////////////////////////////////////////


gsap.to("#page5 #svg1",{
    left:"-76%",
    duration:2,
    scrollTrigger:{
        trigger:"#page5 svg",
        scroller:"body",
        start:"top 105%",
        end:"top -5%",
        scrub:1,
        // markers:true

    }
})
gsap.to("#page5 #svg2",{
    left:"-70%",
    duration:2,
    scrollTrigger:{
        trigger:"#page5 svg",
        scroller:"body",
        start:"top 105%",
        end:"top -5%",
        scrub:5,
        // markers:true

    }
})
// ////////////////////////////////////   PAGE 06 STARAT  ////////////////////////////////////////////////////////////////



gsap.from("#page6 h6,#page6 #container",{
    y:100,
    stagger:1,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page6 #container ",
        scroller:"body",
        // markers  :true,
        start:"top 100%",
        end:"top 70%",
        scrub:3
    }
})
// ////////////////////////////////////   PAGE 07 STARAT  ////////////////////////////////////////////////////////////////


gsap.to("#page7 .svg1",{
    left:"-30%",
    scrollTrigger:{
        trigger:"#page7 svg",
        scroller:"body",
        start:"top 105%",
        end:"top -5%",
        scrub:3,
        // markers:true

    }
})
gsap.to("#page7 .svg2",{
    left:"10%",
    scrollTrigger:{
        trigger:"#page7 svg",
        scroller:"body",
        start:"top 105%",
        end:"top -5%",
        scrub:1,
        // markers:true

    }
})

////////////////////////////////////   PAGE 08 STARAT  ////////////////////////////////////////////////////////////////

gsap.to("#page8 #img1",{
    left:"-30%",
    scrollTrigger:{
        trigger:"#page8 #img1   ",
        scroller:"body",
        start:"top 105%",
        end:"top -5%",
        scrub:1,
        // markers:true

    }
})
gsap.to("#page8 #img2",{
    right:"-30%",
    scrollTrigger:{
        trigger:"#page8 #img2 ",
        scroller:"body",
        start:"top 105%",
        end:"top -5%",
        scrub:1,
        // markers:true

    }
})

gsap.from("#page8 h1 ,h5",{
    opacity:0,
    delay:2,
    scale:0.3,
    scrollTrigger:{
        trigger:"#page8 h1 ",
        scroller:"body",
        start:"top 60%",
        end:"top -5%",
        scrub:1,
        // markers:true

    }
})
gsap.from("#page8 h4",{
    opacity:0,
    y:60,
    scrollTrigger:{
        trigger:"#page8 h1 ",
        scroller:"body",
        start:"top 23%",
        end:"top -5%",
        scrub:1,
        // markers:true

    }
})


////////////////////////////////////   PAGE 09 STARAT  ////////////////////////////////////////////////////////////////


gsap.from("#page9",{
    height:"50vh",
    y:60,
    scrollTrigger:{
        trigger:"#page9",
        scroller:"body",
        start:"top 90%",
        end:"top -5%",
        scrub:1,
        // markers:true

    }
})



gsap.to("#page9 #svg1",{
    left:"-76%",
    duration:0.1,
    scrollTrigger:{
        trigger:"#page9 svg",
        scroller:"body",
        start:"top 60%",
        end:"top -5%",
        scrub:2,
        // markers:true

    }
})
gsap.to("#page9 #svg2",{
    left:"-70%",
    duration:0.5,
    scrollTrigger:{
        trigger:"#page9 svg",
        scroller:"body",
        start:"top 60%",
        end:"top -5%",
        scrub:2,
        // markers:true

    }
})


gsap.from("#page10-center #img1,#page10-center #img2,#page10-center #img3",{
    opacity:0,
    y:30,
    scrollTrigger:{
        trigger:"#page10-center #img1,#page10-center #img2,#page10-center #img3",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end: "top 60%",
        scrub:5,
    }
})

gsap.from("#page11>h2, #page11>h5",{
    opacity:0,
    y:50,
    stagger:1,
    scrollTrigger:{
        trigger:"#page11>h2, #page11>h5",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end: "top 30%",
        scrub:2,
        yoyo:true
    }
})
gsap.from("#page11 #left",{
    opacity:0,
    y:50,
    stagger:1,
    scrollTrigger:{
        trigger:"#page11 #left",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end: "top 30%",
        scrub:2,
    }
})

gsap.from("#page11>#right>h2,#page11 #right>h6,#page11 #right h4",{
    opacity:0,
    y:60,
    duration:0.5,
    stagger:1,
    scrollTrigger:{
        trigger:"#page11 #right",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end: "top 10%",
        scrub:2,
        yoyo:true
    }
})



gsap.from("#page12 #left",{
    opacity:0,
    y:50,
    stagger:1,
    scrollTrigger:{
        trigger:"#page12 #left",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end: "top 30%",
        scrub:2,
    }
})

gsap.from("#page12>#right>h2, #page12 #right>h6, #page12 #right h4",{
    opacity:0,
    y:60,
    duration:0.5,
    stagger:1,
    scrollTrigger:{
        trigger:"#page12 #right",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end: "top 10%",
        scrub:2,
        yoyo:true
    }
})




gsap.from("#page13",{
    height:"20vh",
    y:60,
    scrollTrigger:{
        trigger:"#page13",
        scroller:"body",
        start:"top 90%",
        end:"top 14%",
        scrub:1,
        // markers:true

    }
})

