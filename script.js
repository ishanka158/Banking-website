'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
    e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click',openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});



console.log(document.documentElement);
console.log(document.head);
console.log(document.body);


const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');

const allBttons = document.getElementsByTagName('button');
console.log(allBttons);

console.log(document.getElementsByClassName('btn'));

// const message = document.createElement('div');
// message.classList.add('cookie-message');

// message.innerHTML = "We use cookies for improve functionality and analytics, <button class='btn btn--close-cookie'> Got it! </button>";

// // header.prepend(message);

// header.append(message);

// document.querySelector('.btn--close-cookie').addEventListener('click', function(){
//     message.remove();
// });

// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

document.documentElement.style.setProperty('--color-primary','orangered')

const btnScrollTo = document.querySelector('.btn--scroll-to');

const section1 = document.querySelector('#section--1');


btnScrollTo.addEventListener('click', function(e){
    section1.scrollIntoView({
        behavior: 'smooth'
    });
});


// document.querySelectorAll('.nav__link').forEach(function(el){
//     el.addEventListener('click', function(e){
//         e.preventDefault();
//         const id =this.getAttribute('href');
//         console.log(id);
//         document.querySelector(id).scrollIntoView({behavior:'smooth'});        
//     });
// });

document.querySelector('.nav__links').addEventListener('click',function(e){
    e.preventDefault();

    if(e.target.classList.contains('nav__link')){
        const id = e.target.getAttribute('href');
        console.log(id);
        document.querySelector(id).scrollIntoView({
            behavior:'smooth'
        });
    }
})


const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');

const tabsContent = document.querySelectorAll('.operations__content');


tabContainer.addEventListener('click',function(e){
    const clicked = e.target.closest('.operations__tab');
    console.log(clicked);
    if(!clicked) return;

    tabs.forEach(t=>t.classList.remove('operations__tab--active'));   

    clicked.classList.add('operations__tab--active');

    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');

});

const nav = document.querySelector('.nav');

const opacityHandler = function(e,opacity){
  if(e.target.classList.contains('nav__link')){
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el=>{
      if(el !==link) el.style.opacity = opacity});
      logo.style.opacity = opacity;
    }
}

nav.addEventListener('mouseover', function(e){
  opacityHandler(e,0.5)
});


nav.addEventListener('mouseout', function(e){
  opacityHandler(e,1)
});


// const obsCallback = function(){

// };

// const obsOptions = {
//   root: null,
//   threshold:0.1
// };

// const observer = new IntersectionObserver(obsCallback,obsOptions);
// observer.observe(section1)


const headerr = document.querySelector('.header');

const stickyNav = function(entries){
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
  
};

const headerObserver = new IntersectionObserver(
  stickyNav,{
    root:null,
    threshold:0,
    rootMargin: '-90px'
  }
);

headerObserver.observe(headerr);

const allSectionss = document.querySelectorAll('.section');

const revealSection = function(entries,observer){
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root:null,
  threshold:0.15,
});

allSectionss.forEach(function(section){
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});



const imgTaerget = document.querySelectorAll('img[data-src]');

const loadImg = function (entries,observer){

  const [entry] = entries;

  if(!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function(){
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};


const imgObserver = new IntersectionObserver(loadImg,{
  root:null,
  threshold:0,
});

imgTaerget.forEach(img => imgObserver.observe(img));

let cuurentSlide = 0;
const maxSlide = slides.length;

const slides = document.querySelectorAll('.slider');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

const slider = document.querySelector('.slider');

slides.forEach((s,i)=>(s.style.transform = `translateX(${100*i}%)`));

btnRight.addEventListener('click',function(){
 
  if(cuurentSlide === maxSlide -1){
    cuurentSlide= 0;
  }else{
    cuurentSlide++;
  }
 
slides.forEach((s,i)=>(s.style.transform = `translateX(${100*(i-cuurentSlide)}%)`));
});





