(function () {
  var carouselContent = document.querySelector("#carouselContent");
  var btnLeft = document.querySelector("#btnLeft");
  var btnRight = document.querySelector("#btnRight");

  var carouselLeftValue = 0;
  var totalWidth = carouselContent.getBoundingClientRect().width;
  var widthToMove = 180 + 16 + 180 + 16;
  var arrowBtnWidth = 50;
  var noOfSlides = totalWidth / widthToMove;
  var currentSlide = 1;

  btnLeft.addEventListener("click", moveCaraouselRight);
  btnRight.addEventListener("click", moveCaraouselLeft);

  manageButtons();

  function moveCaraouselLeft() {
    if (currentSlide == 1) carouselLeftValue -= widthToMove - arrowBtnWidth;
    else carouselLeftValue -= widthToMove;

    currentSlide++;
    manageButtons();
    carouselContent.style.left = `${carouselLeftValue}px`;
  }

  function moveCaraouselRight() {
    if (currentSlide == 2) carouselLeftValue = 8;
    else carouselLeftValue += widthToMove;

    currentSlide--;
    manageButtons();
    carouselContent.style.left = `${carouselLeftValue}px`;
  }

  function manageButtons() {
    if (currentSlide == noOfSlides - 1) btnRight.classList.remove("show");
    else btnRight.classList.add("show");

    if (currentSlide == 1) btnLeft.classList.remove("show");
    else btnLeft.classList.add("show");
  }
})();
