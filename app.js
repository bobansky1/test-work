//animation
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0 ) {
    let animationFrameId = null;
    window.addEventListener('scroll', () => {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(animOnScroll);
    });

    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
               
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                    
                }
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.scrollX || document.documentElement.scrollLeft,
            scrollTop = window.scrollY || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    requestAnimationFrame(animOnScroll);
}


//burger
const dropdown = document.querySelector('.burger-icon');
const btnDrop = document.querySelector('.burger__menu');

dropdown.addEventListener('click', function() {
	btnDrop.classList.toggle('_active');
	dropdown.classList.toggle('_active');
});

//header backgroundColor
document.addEventListener('DOMContentLoaded', function () {
	var header = document.getElementById('mainHeader');
	var scrollPosition = window.scrollY;
  
	function updateHeader() {
	  var currentPosition = window.scrollY;
  
	  if (currentPosition > scrollPosition) {
		// Скролл вниз
		header.style.backgroundColor = '#000000b7'; // Новый цвет фона при скролле вниз
	  } else {
		// Скролл вверх
		header.style.backgroundColor = '#00000000'; // Возвращаем исходный цвет фона
	  }
  
	  scrollPosition = currentPosition;
	}

	window.addEventListener('scroll', updateHeader);
  });

// swiper
var swiper = new Swiper(".mySwiper", {
	slidesPerView: 3,
	direction: 'horizontal',
	grid: {
	  rows: 2,
	},
	spaceBetween: 20,
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
  },
  breakpoints: {

  320: {
	slidesPerView: 2,
	spaceBetween: 20
  },

  992: {
	slidesPerView: 2,
	spaceBetween: 10
  },
  1300: {
	slidesPerView: 3,
	spaceBetween: 10
  },

},
});



gsap.registerPlugin(ScrollTrigger);
gsap.set(".header", { y: -200 });

gsap.fromTo(".header", {
  y: -200
}, {
  y: 0,
  duration: 1,
  scrub: 1,
  ease: "power1.inOut"
});

gsap.set(".animate-text", { x: -200, opacity:0, });

gsap.fromTo(".animate-text", {
  x: -200,
  opacity:0,
}, {
  x: 0,
  opacity:1,
  delay: 2,
  duration: 1,
  scrub: 1,
  ease:"back.out(2.7)"
});

gsap.set(".animate-text2", { x: 2000, opacity:0, });

gsap.fromTo(".animate-text2", {
  x: 2000,
  opacity:0,
}, {
  x: 0,
  opacity:1,
  scrub: 1,
  delay: 1,
  duration: 1,
  ease:"power1.out",
});

gsap.set(".animate-text3", { x: -1000, opacity:0, });

gsap.fromTo(".animate-text3", {
  x: -1000,
  opacity:0,
}, {
  x: 0,
  opacity:1,
  delay: 1,
  scrub: 1,
  duration: 2,
  ease:"power1.out",
});

gsap.to(".a1", {
	opacity: 1,
	duration: 1,
	delay:2.5,
	ease: "power1.out",
	scrub: 1,
});
gsap.to(".a2", {
	opacity: 1,
	duration: 1,
	delay:2.7,
	ease: "power1.out",
	scrub: 1,
});
gsap.to(".a3", {
	opacity: 1,
	duration: 1,
	delay:2.9,
	ease: "power1.out",
	scrub: 1,
});
gsap.to(".a4", {
	opacity: 1,
	duration: 1,
	delay:3.1,
	ease: "power1.out",
	scrub: 1,
});

gsap.to(".block__registr", {
	opacity: 1,
	duration: 1,
	delay:3.1,
	ease: "power1.out",
	scrub: 1,
});

gsap.set(".opaciti-title", { y: 100, scale: 0.5, opacity:0, });
gsap.to(".opaciti-title", {
  scrollTrigger: {
    trigger: ".opaciti-title",
    start: "top bottom",
    end: "top center",
    scrub: 1,
	
  },
  y: 0,
  opacity:1,
  duration: 3,
    scale: 1,
  ease: "power1.inOut"
});
