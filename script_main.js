let page;
let pages = ["animation_page", "make_tea", "drink_tea"];

function switchPage() {
  for (page = 0; page < pages.length; page++) {
    let displayStatus = false;
    document.getElementByClassName("myDIV").style.display = "none";
  }
}


function getPage(){
  let pageName = document.querySelector('.' + pages[0]);
  let style = getComputedStyle(pageName);
};