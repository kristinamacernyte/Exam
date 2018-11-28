const optionOne = document.querySelector('.option1');
const dropDown = document.querySelector('.drop-down');
const barIcon = document.querySelector('.baricon');
const topnav = document.querySelector('#topnav');
const scrollTopBtn = document.querySelector('#scroll-top');
const mobileDiv = document.querySelector('.mobilediv');

optionOne.addEventListener('mouseenter', function() {
  dropDown.classList.toggle('drop-down--active');
});

optionOne.addEventListener('mouseleave', function() {
  dropDown.classList.toggle('drop-down--active');
});

/*
barIcon.addEventListener('click', function() {
  mobileDiv.style.height = '300px';
});
*/


barIcon.addEventListener('click', function() {

 if (mobileDiv.style.height === '1500px') {
    mobileDiv.style.height = '0px'
  } else {
    mobileDiv.style.height = '1500px'
  }

});

scrollTopBtn.addEventListener('click', function () {
  window.scroll({top: 0, left: 0, behaviour: 'smooth'})
});

window.addEventListener('scroll', function(e){
  console.log(window.scrollY)
  if(window.scrollY > 60) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
})
