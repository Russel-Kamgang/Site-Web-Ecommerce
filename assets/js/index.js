var menuBtn = document.getElementById("menuBtn");
var sideBar = document.getElementById("menu");
var closeBtn = document.getElementById("closeBtn");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});

window.addEventListener("scroll", () => {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 480 && menu.classList.contains("active")) {
    menu.classList.remove("active");
  }
});

var swiper = new Swiper(".swiperHome", {
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next-1",
    prevEl: ".swiper-button-prev-1",
  },
});

var swiper = new Swiper(".swiperPopular", {
  spaceBetween: 15,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next-2",
    prevEl: ".swiper-button-prev-2",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    568: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
    },
    968: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});

var swiper = new Swiper(".swiperFeatured", {
  spaceBetween: 15,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next-3",
    prevEl: ".swiper-button-prev-3",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    568: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
    },
    968: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});

var swiper = new Swiper(".swiperDeals", {
  spaceBetween: 15,
  loop: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next-4",
    prevEl: ".swiper-button-prev-4",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    568: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
    968: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1600: {
      slidesPerView: 5,
    },
  },
});

// Deals Time
// Durée initiale en secondes (8h = 8 * 60 * 60)
let timeLeft = 8 * 60 * 60;

function updateCountdown() {
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  // Affichage avec 2 chiffres
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0"
  );
  document.getElementById("seconds").textContent = String(seconds).padStart(
    2,
    "0"
  );

  // Arrêter le compte à rebours à 0
  if (timeLeft > 0) {
    timeLeft--;
  }
}

// Appelle updateCountdown chaque seconde
setInterval(updateCountdown, 1000);

// Lancer immédiatement pour éviter le 1s de décalage initial
updateCountdown();

// Scroll Reveal Animation
const animate = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: "2500",
  delay: "400",
});

animate.reveal(".header");
animate.reveal("#home", { distance: "10px" });
animate.reveal("#shop");
animate.reveal("#shop2");
animate.reveal(".box-2,.box-3,.box-4", {
  interval: 100,
});
animate.reveal("#swiper-wrapper");
animate.reveal("#deals");
