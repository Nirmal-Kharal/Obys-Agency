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
cursorAnimation();