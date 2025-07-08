document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded and parsed");

  // Dropdown Menu Logic
  const usernameDropdown = document.getElementById("usernameDropdown");
  const dropdownMenu = document.getElementById("dropdownMenu");

  if (usernameDropdown && dropdownMenu) {
    console.log("Both dropdown elements found");

    usernameDropdown.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent the event from bubbling up to document
      dropdownMenu.classList.toggle("show");
      console.log("Dropdown toggled");
    });

    // Close dropdown if clicked outside of dropdown or username button
    document.addEventListener("click", (e) => {
      if (!usernameDropdown.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove("show");
        console.log("Dropdown closed");
      }
    });
  } else {
    console.log("Dropdown elements not found");
  }

  // Swiper Initialization for Services Slider
  const servicesSwiperContainer = document.querySelector(".servicesSwiper");

  if (servicesSwiperContainer) {
    const servicesSwiper = new Swiper(".servicesSwiper", {
      centeredSlides: true,          // Keep active slide centered
      slidesPerView: 'auto',         // Allow dynamic slide width
      spaceBetween: 30,              // Space between slides
      loop: true,                    // Enable infinite loop
      autoplay: {
        delay: 5000,                 // 5 seconds delay between slides
        disableOnInteraction: false, // Ensure autoplay doesn't stop after interaction
      },
      navigation: {
        nextEl: ".swiper-button-next",  // Next button
        prevEl: ".swiper-button-prev",  // Previous button
      },
      breakpoints: {
        // For screens larger than 768px, show up to 3 slides
        768: {
          slidesPerView: 3, 
          spaceBetween: 20,       // Adjust space between slides
        },
        // For screens larger than 480px, show up to 1 slide
        480: {
          slidesPerView: 1,
          spaceBetween: 15,       // Adjust space between slides for small screens
        }
      },
      on: {
        init: function () {
          console.log("Swiper initialized");
        },
        slideChange: function () {
          console.log("Slide changed");
        }
      }
    });
  } else {
    console.log("Swiper container not found");
  }
});
