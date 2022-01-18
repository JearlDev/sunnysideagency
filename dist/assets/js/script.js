const navLinkWrapper = document.querySelector('.navLinkWrapper');
// const dropdownBtn = document.querySelector('.fa-bars');
const navDisplayer = document.querySelector('#mobileNavDisplayer');
const downArrow = document.querySelector('.downArrow');


window.addEventListener('resize', navRespond);
window.addEventListener('load', navRespond);
downArrow.addEventListener('click', arrowScroll);


function toggleMobileNav(){
  navDisplayer.classList.toggle('showOrHide');
}

function navRespond(){
  if(window.innerWidth < 768){
    navLinkWrapper.innerHTML = '<li class="mobileDropdownBtn"><a href="#" ><i onclick="toggleMobileNav();" class="fas fa-bars"></i></a></li>';
  }else{
    navLinkWrapper.innerHTML = '<li class="navLink"><a href="#" >About</a></li><li class="navLink"><a href="#">Services</a></li><li class="navLink"><a href="#">Projects</a></li><li class="navLink contactLink"><a href="#">Contact</a></li>';
  }
}


function arrowScroll(){
  document.getElementById("letsGo").scrollIntoView({behavior: "smooth"});
}