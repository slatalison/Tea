let page;
let pages = ["animation_page", "make_tea", "drink_tea"];
var $nextButton12 = $(".nextButton12");
var $nextButton23 = $(".nextButton23");
var $animation_page = $(".animation_page");
var $drink_tea = $(".drink_tea");
var $make_tea = $(".make_tea");
var $restart = $(".restart");

// function switchPage() {
//   for (page = 0; page < pages.length; page++) {
//     let displayStatus = false;
//     document.getElementByClassName("myDIV").style.display = "none";
//   }
// }


// function getPage(){
//   let pageName = document.querySelector('.' + pages[0]);
//   let style = getComputedStyle(pageName);
// };


$nextButton12.click(function () {
  $make_tea.fadeIn();
  $nextButton23.fadeIn();
  $animation_page.hide();
  $(this).hide();
});

$nextButton23.click(function () {
  $make_tea.hide();
  $drink_tea.fadeIn();
  $restart.fadeIn();
  $(this).hide();

});

$restart.click(function () {
  location.reload(true);
});