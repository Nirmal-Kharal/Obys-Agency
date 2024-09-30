// ----------------------------Loading Animation---------------------

let tl = gsap.timeline()

tl.from(".line h1",{
y:150,
stagger:.2 ,//stagger help you to push element 1 by  1
duration : .6,
delay : .3
})

tl.from("#line-part1",{
    opacity : 0,
    onStart : function() {
        // ---------------------------- Timer part-------------------
let h5Timer = document.querySelector("#line-part1 h5")
h5Timer.textContent=''
// you can say set interval is some kind of loop which repreat it self pver the time
let grow = 0;

setInterval(() => {
    if(grow <=100){
    h5Timer.textContent=grow;
    grow++
}
   
},33);
    }
})
tl.to(".line h2",{
    animationName : "anime",
    opacity: 1
})
tl.to("#loader",{
    opacity :0,
    duration: .2,
    delay : 4

})


tl.to("#loader",{
    display : "none",
    
})

tl.from("#page1",{
    y : 1600,
    opacity : 0,
    duration:.5,
    ease:Power4
})



