let backdrop = document.querySelector(".backdrop");
let modal =  document.querySelector(".modal");
let selectPlanBtns = document.querySelectorAll(".plan button");
let closeModalBtn = document.querySelector(".modal__action--negative");
let toggleMobileNavOn = document.querySelector(".toggle-button");
let toggleMobileNavOff = document.querySelector(".mobile-nav");
let mobileNav = document.querySelector(".mobile-nav");


// let testing = document.querySelector('.main-footer__link');
// let testPlans = document.querySelector('#plans')
// testing.addEventListener('click', function(){
//   testPlans.style.backgroundColor = "blue";
// });



for(var i = 0; i < selectPlanBtns.length; i++) {
  selectPlanBtns[i].addEventListener("click", function() {
        // modal.style.display = "block";
        // backdrop.style.display = "block";
        // modal.className = "open"; // This will actually override the complete class list
        modal.classList.add('open');
        backdrop.classList.add('open');
  });
}

toggleMobileNavOn.addEventListener("click", openMobileNav)

toggleMobileNavOff.addEventListener("click", closeMobileNaV);

if(closeModalBtn){
  closeModalBtn.addEventListener("click", closeModal);
}

backdrop.addEventListener("click", closeModal);


function closeModal() {
  // modal.style.display = "none";
  // backdrop.style.display = "none";
  modal.classList.remove('open');
  backdrop.classList.remove('open');      
}

function openMobileNav () {
  // mobileNav.style.display = "block";
  // backdrop.style.display = "block";
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
}

function closeMobileNaV () {
  // mobileNav.style.display = "none";
  // backdrop.style.display = "none";
  mobileNav.classList.remove('open');
  backdrop.classList.remove('open');   
}

