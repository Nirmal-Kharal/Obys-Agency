function locomotivejs(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

// ----------------------------Loading Animation---------------------
function loadingAnimation() {
  let tl = gsap.timeline();




  tl.from(".line h1", {
    y: 150,
    stagger: 0.2, //stagger help you to push element 1 by  1
    duration: 0.6,
    delay: 0.3,
  });




  tl.from("#line-part1", {
    opacity: 0,
    onStart: function () {
      // ---------------------------- Timer part-------------------
      let h5Timer = document.querySelector("#line-part1 h5");
      h5Timer.textContent = "";
      // you can say set interval is some kind of loop which repreat it self pver the time
      let grow = 0;

      setInterval(() => {
        if (grow <= 100) {
          h5Timer.textContent = grow;
          grow++;
        }
      }, 33);
    },
  });




  tl.to(".line h2", {
    animationName: "anime",
    opacity: 1,
  });
  tl.to("#loader", {
    opacity: 0,
    duration: 0.2,
    delay: 4,
  });





  tl.to("#loader", {
    display: "none",
  });

  tl.from("#page1", {
    y: 1600,
    opacity: 0,
    duration: 0.5,
    ease: Power4,
  });

  tl.from ("#nav",{
  opacity : 0

  
  })
  tl.from ("#hero1 h1 ,#hero2 h1,#hero3 h2,#hero4 h1",{
    y : 200,
    duration :1,
    // delay : .1
    stagger: .3

  
  })
  tl.from ("#hero1 h1 ,#page2" , {
    opacity:0,
  },"-=1.2")
}


function cursorAnimation() {
 

  document.addEventListener("mousemove",(event)=>{
    gsap.to("#crsr",{
      left : event.x,
      top : event.y
    })
    
    });
    Shery.makeMagnet("#nav #navPart1 h3"); 
 
}


loadingAnimation();
// cursorAnimation();
locomotivejs();