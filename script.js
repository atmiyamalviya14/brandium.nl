function cursor() {
  var main = document.querySelector(".cursor-div");
  var cursor = document.querySelector(".cursor");

  main.addEventListener("mousemove", function (dets) {
    gsap.to(".cursor", {
      x: dets.x,
      y: dets.y,
      duration: 0.5,
    });
  });
}
cursor();

function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".cursor-div"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".cursor-div" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".cursor-div", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".cursor-div").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
loco();
// PAGE 1
function breakTheText() {
  var clutter = "";

  document
    .querySelector(".mainheading h1")
    .textContent.split(" ")
    .forEach(function (dets) {
      clutter += `<span class ="a">${dets}</span>`;

      document.querySelector(".mainheading h1").innerHTML = clutter;
    });
  var clutter = "";

  document
    .querySelector(".design h1")
    .textContent.split(" ")
    .forEach(function (dets) {
      clutter += `<span class ="a">${dets}</span>`;

      document.querySelector(".design h1").innerHTML = clutter;
    });
  var clutter = "";

  document
    .querySelector(".digital h1")
    .textContent.split(" ")
    .forEach(function (dets) {
      clutter += `<span class ="a">${dets}</span>`;

      document.querySelector(".digital h1").innerHTML = clutter;
    });
  var clutter = "";

  document
    .querySelector(".experience h1")
    .textContent.split(" ")
    .forEach(function (dets) {
      clutter += `<span class ="a">${dets}</span>`;

      document.querySelector(".experience h1").innerHTML = clutter;
    });
}
breakTheText();
gsap.from(".mainheading h1 .a", {
  y: 400,
  duration: 0.6,
  stagger: 0.1,
});

// PAGE 2

function string() {
  var path = "M 10 125 Q 900 125 1800 125";

  var finalpath = "M 10 125 Q 900 125 1800 125";

  var string = document.querySelector("#string");

  string.addEventListener("mousemove", function (dets) {
    path = `M 10 125 Q ${dets.x} ${dets.y} 1800 100`;

    gsap.to("svg path", {
      attr: { d: path },
      duration: 0.5,
      ease: "expoScale(0.5,7,none)",
    });
  });

  string.addEventListener("mouseleave", function () {
    gsap.to("svg path", {
      attr: { d: finalpath },
      duration: 1.5,
      ease: "elastic.out(1,0.2)",
    });
  });
}
string();

var clutter = "";

document
  .querySelector("#page2 #page2text h1")
  .textContent.split(" ")
  .forEach(function (dets) {
    clutter += `<span class ="a">${dets} </span>`;

    document.querySelector("#page2 #page2text h1").innerHTML = clutter;
  });

gsap.from("#page2 #page2text h1 .a", {
  scrollTrigger: {
    trigger: "#page2 #page2text h1 .a",
    scroller: ".cursor-div",
    start: "center 75%",
    end: "center 25%",
    scrub: 0.5,
    scroller: ".cursor-div",
    markers:true,
  },
  y:110,
  duration:.6,
  delay:.5,
});


