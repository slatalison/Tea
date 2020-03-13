// let page;
// let pages = ["animation_page", "make_tea", "drink_tea"];

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

//切换三个页面
//reference https://codepen.io/rashidnaushad/pen/VaKMBJ
var $nextButton12 = $(".nextButton12");
var $nextButton23 = $(".nextButton23");
var $animation_page = $(".animation_page");
var $drink_tea = $(".drink_tea");
var $make_tea = $(".make_tea");
var $restart = $(".restart");

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

//animation页take user input
$(document).ready(function () {
  // Get value on button click and show alert
  $(".nextButton12").click(function () {
    var str = $("#playerName").val();
    console.log("Hello " + str + " ~");
  });

});



//drag and drop
//reference https://codepen.io/byronglover/pen/oxjgEK

//用→切换ingredient视图
var ig_container1 = document.getElementById("ig_container1");
var ig_container2 = document.getElementById("ig_container2");

function showHide() {
  if (ig_container1.style.display !== "none") {
    ig_container1.style.display = "none";
    ig_container2.style.display = "block";
  } else {
    ig_container1.style.display = "block";
    ig_container2.style.display = "none";
  }
};

//make tea页批量创建div以及load image
const all_ingredient_images = [
  "blacktea-1.png",
  "blacktea-2.png",
  "blacktea.png",
  "cane sugar.png",
  "cheese.png",
  "chilli powder.png",
  "fruits.png",
  "greentea-1.png",
  "greentea-2.png",
  "greentea-3.png",
  "greentea-4.png",
  "greentea.png",
  "ice.png",
  "pencil powder.png",
  "vinegar.png",
  "water.png",
  "whipped cream.png",
  "whole milk-1.png",
  "whole milk-2.png",
  "whole milk-3.png",
  "whole milk.png",
  "001-orange.png",
  "002-apple.png",
  "003-persimmon.png",
  "004-ginger.png"
];

let imgSwitch = 0;
let row1 = document.getElementById("row1");
let row2 = document.getElementById("row2");
let row3 = document.getElementById("row3");

document.addEventListener("DOMContentLoaded", () => {
  loadImages1()
});

loadImages1 = () => {
  for (let i = 0; i < 6; i++) {
    let newImg = document.createElement('img');
    newImg.className = "ingredient_images";
    newImg.id = "ingredientNo" + i;
    newImg.src = "visual/" + all_ingredient_images[i];
    row1.appendChild(newImg);
  };
  for (let i = 6; i < 10; i++) {
    let newImg = document.createElement('img');
    newImg.className = "ingredient_images";
    newImg.id = "ingredientNo" + i;
    newImg.src = "visual/" + all_ingredient_images[i];
    row2.appendChild(newImg);
  };
  for (let i = 10; i < 14; i++) {
    let newImg = document.createElement('img');
    newImg.className = "ingredient_images";
    newImg.id = "ingredientNo" + i;
    newImg.src = "visual/" + all_ingredient_images[i];
    row3.appendChild(newImg);
  };
  for (let i = 14; i < 19; i++) {
    let newImg = document.createElement('img');
    newImg.className = "ingredient_images";
    newImg.id = "ingredientNo" + i;
    newImg.src = "visual/" + all_ingredient_images[i];
    row4.appendChild(newImg);
  };
};

//点击一种ingredient 报出id，并将结果传入下一页

let myTea = [];

$(document).ready(function () {
  $('.ingredient_images').click(function () {
    myTea.push(this.id);
    let newImg = document.createElement('img');
    newImg.src = this.src;
    newImg.className = "movingIg";
    $(".cup_container").append(newImg);
    $.each(myTea, function (index, value) {
      $(".test").append("<p>" + index + ": " + value + '<br>' + "</p>");
    });
  });
});

