// Initialize Materialize Functionality

document.addEventListener("DOMContentLoaded", function() {
  var sidenav = document.querySelectorAll(".sidenav");
  var sidenavInstances = M.Sidenav.init(sidenav);
  var materialbox = document.querySelectorAll('.materialboxed');
  var materialboxInstances = M.Materialbox.init(materialbox);
  var parallax = document.querySelectorAll('.parallax');
  var parallaxInstances = M.Parallax.init(parallax);
  var tabs = document.querySelectorAll('.tabs');
  var tabsInstances = M.Tabs.init(tabs);
  var carousel = document.querySelectorAll('.carousel');
  var carouselInstances = M.Carousel.init(carousel, {numVisible:13, fullWidth: true, duration: 10000});
  var carouselElem = document.getElementById("carousel-auto")
  var carouselInstance = M.Carousel.getInstance(carouselElem);  
  setInterval(function() {
    carouselInstance.next();
  }, 10500);
  carouselInstance.next();
  var scrollspy = document.querySelectorAll('.scrollspy');
  var scrollspyInstances = M.ScrollSpy.init(scrollspy);
});
