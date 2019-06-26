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
  var datepicker = document.querySelectorAll('.datepicker');
  var datepickerInstance = M.Datepicker.init(datepicker, {
    disableWeekends: true
  });
  var scrollspy = document.querySelectorAll('.scrollspy');
  var scrollspyInstances = M.ScrollSpy.init(scrollspy);
});
