var hasScrolled=false;
var hasClickedHelp = false;
var hasClickedStart = false;

// Scroll analytics event
$(window).scroll(function() {
  if(hasScrolled === false) {
    console.log("scrolled");
    hasScrolled = true;
    ga("send", "event", "pagescroll", "scroll");
  }
});

// click help analytics event
$("#menu-help").click(function() {
  var url=$(location).attr('href');

// only run on index and secondHome pagescroll
  if(url.includes('index') || url.includes('secondHome')) {
      console.log("Clicked help")
      if(hasClickedHelp === false) {
        hasClickedHelp = true;
        ga("send", "event", "help", "click");
      }
  }
});


//click start button analytics event
$("#start").click(function() {
  var url=$(location).attr('href');

// only run on index and secondHome pagescroll
  if(url.includes('index') || url.includes('secondHome')) {
      console.log("Clicked start")
      if(hasClickedStart === false) {
        hasClickedStart = true;
        ga("send", "event", "start", "click");
      }
  }
});
