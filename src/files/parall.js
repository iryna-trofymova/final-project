$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    $(".header").addClass("scroll");
  } else {
    $(".header").removeClass("scroll");
  }
});

//parallax
const animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 20;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - animItemHeight / animStart;
      }
      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageXOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_active");
      } else {
        animItem.classList.remove("_active");
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  setTimeout(() => {
    animOnScroll();
  }, 300);
}

let bg = document.querySelector(".mouse-parallax-bg");
window.addEventListener("mousemove", function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  bg.style.transform = "translate(-" + x * 50 + "px, -" + y * 50 + "px)";
});

//Передвижение элементов в зависимости от движения мыши
var currentX = "";
var currentY = "";
var movementConstant = 0.09;
$(document).mousemove(function (e) {
  if (currentX == "") currentX = e.pageX;
  var xdiff = e.pageX - currentX;
  currentX = e.pageX;
  if (currentY == "") currentY = e.pageY;
  var ydiff = e.pageY - currentY;
  currentY = e.pageY;
  $(".parallax_contanier div").each(function (i, el) {
    var movement = (i + 1) * (xdiff * movementConstant);
    var movementy = (i + 1) * (ydiff * movementConstant);
    var newX = $(el).position().left + movement;
    var newY = $(el).position().top + movementy;
    $(el).css("left", newX + "px");
    $(el).css("top", newY + "px");
  });
});
