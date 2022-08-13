// Toggle Mobile Nav
const mobileNav = document.querySelector(".navbar");
const toggleChange = document.querySelector(".navbar-toggler");

toggleChange.addEventListener("click", () => {
  toggleChange.classList.toggle("change");
  mobileNav.classList.toggle("mobile-nav");
});

// Event Swiper Slider Options
const swiperBanner = new Swiper(".banner-swiper", {
  slidesPerView: 1,
  navigation: false,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  spaceBetween: 25,
});

// Product Swiper Slider Options
const swiper2 = new Swiper(".product-swiper", {
  slidesPerView: 5,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  speed: 700,
  spaceBetween: 30,
  breakpoints: {
    100: {
      slidesPerView: 1,
    },
    650: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1500: {
      slidesPerView: 5,
    },
  },
});
