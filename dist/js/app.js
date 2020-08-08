// Owl Carousel
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items: 4,
        margin: 30,
        autoplay: true,
        loop: true,
        dots: true,
        responsiveClass: true,
        responsive: {
            320: {
                items: 1
            },

            480: {
                items: 2
            },

            600: {
                items: 2
            },

            767: {
                items: 3
            },

            768: {
                items: 3
            },

            992: {
                items: 4
            }
        }
    })
})

// Glider Slder
new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    draggable: true,
    slidesToScroll: 1,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
})

// Init AOS
function aos_init() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

// Scroll to Top
const topBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', toggleTopBtn);

function toggleTopBtn(){
    if(window.scrollY < 60){
        topBtn.className = 'hide-desktop';
    }else{
        topBtn.className = 'fade-in';
    }
}

// Smooth Scroll Effect
$('#navbar ul li a, #scroll-top').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
        {
            scrollTop: $(hash).offset().top - 60
        },
        800
        );
    }
});

// Navigation Menu Toggler
const menuBar = document.getElementById('menu-bar');

menuBar.addEventListener('click', (e) => {
    e.preventDefault();

    document.getElementById('navbar').classList.add('active');

    document.body.style.overflow = 'hidden';

    document.getElementById('nav-menu').classList.add('active');

    document.querySelector('.hide-menu').classList.add('active');
})

document.querySelector('.hide-menu').addEventListener('click', (e) => {
    e.preventDefault();

    document.getElementById('navbar').classList.remove('active');

    document.body.style.overflow = 'scroll';

    document.getElementById('nav-menu').classList.remove('active');

    document.querySelector('.hide-menu').classList.remove('active');
})


// Navigation Menu Link
const dropdown = document.querySelector('.dropdown-link');

dropdown.addEventListener('click', toggleDropdown);

function toggleDropdown(e){
    e.preventDefault();

    if(e.target.classList.contains('fas')){
        if(e.target.className === 'fas fa-chevron-down'){
            dropdown.classList.add('active');
    
            e.target.className = 'fas fa-chevron-up';
        }else{
            dropdown.classList.remove('active');

            e.target.className = 'fas fa-chevron-down';
        }
    }
}

const navLinks = document.querySelectorAll('#navbar ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        if(!e.target.classList.contains('fas')){
            document.getElementById('navbar').classList.remove('active');

            document.body.style.overflow = 'scroll';
        
            document.getElementById('nav-menu').classList.remove('active');
        
            document.querySelector('.hide-menu').classList.remove('active');
        }
    })
})