(function (){
  let currentScrollPosition = 0;
  let scrollAmount = 180;
  
  const sCont = document.querySelector(".tag");
  const hScroll = document.querySelector(".scroll-container");
  const btnLeft = document.querySelector("#leftBtn");
  const btnRight = document.querySelector("#rightBtn");
  var scrollContainer = document.querySelector(".scroll-container");
  
  btnLeft.style.opacity = "0";
  
  let maxScroll = -sCont.offsetWidth + hScroll.offsetWidth;
  
  btnLeft.addEventListener('click', moveCarouselLeft);
  btnRight.addEventListener('click', moveCarouselRight);
  
  function moveCarouselLeft(){
      currentScrollPosition += (1 * scrollAmount);
      
      if(currentScrollPosition >= 0) {
          currentScrollPosition = 0;
          btnLeft.style.opacity = "0";
          btnLeft.style.pointerEvents = "none";
      }else {
          btnLeft.style.opacity = "1";
          btnLeft.style.pointerEvents = "auto";
      }

      if(currentScrollPosition <= maxScroll){ 
          currentScrollPosition = maxScroll; 
          btnRight.style.opacity = "0" ;
          btnRight.style.pointerEvents = "none"; 
      }else { 
          btnRight.style.opacity = "1" ; 
          btnRight.style.pointerEvents = "auto"; 
      }
      
      sCont.style.transform="translateX(" + currentScrollPosition + "px)"; 
  }
  
  function moveCarouselRight(){
      currentScrollPosition += (-1 * scrollAmount);

      if(currentScrollPosition >= 0) {
        currentScrollPosition = 0;
        btnLeft.style.opacity = "0";
        btnLeft.style.pointerEvents = "none";
      }else {
          btnLeft.style.opacity = "1";
          btnLeft.style.pointerEvents = "auto";
      }
      
      if(currentScrollPosition <= maxScroll){ 
          currentScrollPosition = maxScroll; 
          btnRight.style.opacity = "0" ;
          btnRight.style.pointerEvents = "none"; 
      }else { 
          btnRight.style.opacity = "1" ; 
          btnRight.style.pointerEvents = "auto"; 
      }
      sCont.style.transform="translateX(" + currentScrollPosition + "px)"; 
    }
})();