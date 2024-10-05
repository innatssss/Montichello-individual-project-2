// map
let marker;

$(document).ready(function () {
  function initMap() {
    const map = new google.maps.Map($("#map")[0], {
      zoom: 14,
      center: { lat: 40.669998, lng: -73.894333 },
      disableDefaultUI: true,
      styles: [
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#e9e9e9",
            },
            {
              lightness: 17,
            },
          ],
        },
        {
          featureType: "landscape",
          elementType: "geometry",
          stylers: [
            {
              color: "#f5f5f5",
            },
            {
              lightness: 20,
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#ffffff",
            },
            {
              lightness: 17,
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#ffffff",
            },
            {
              lightness: 29,
            },
            {
              weight: 0.2,
            },
          ],
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [
            {
              color: "#ffffff",
            },
            {
              lightness: 18,
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "geometry",
          stylers: [
            {
              color: "#ffffff",
            },
            {
              lightness: 16,
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
            {
              color: "#f5f5f5",
            },
            {
              lightness: 21,
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [
            {
              color: "#dedede",
            },
            {
              lightness: 21,
            },
          ],
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              visibility: "on",
            },
            {
              color: "#ffffff",
            },
            {
              lightness: 16,
            },
          ],
        },
        {
          elementType: "labels.text.fill",
          stylers: [
            {
              saturation: 36,
            },
            {
              color: "#333333",
            },
            {
              lightness: 40,
            },
          ],
        },
        {
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [
            {
              color: "#f2f2f2",
            },
            {
              lightness: 19,
            },
          ],
        },
        {
          featureType: "administrative",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#fefefe",
            },
            {
              lightness: 20,
            },
          ],
        },
        {
          featureType: "administrative",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#fefefe",
            },
            {
              lightness: 17,
            },
            {
              weight: 1.2,
            },
          ],
        },
      ],
    });

    marker = new google.maps.Marker({
      map: map,
      draggable: true,
      icon: "assets/svg/Pin.svg",
      animation: google.maps.Animation.DROP,
      position: { lat: 40.669998, lng: -73.894333 },
    });

    marker.addListener("click", toggleBounce);
  }

  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

  window.initMap = initMap;
});

// slick slider news

$(() => {
  var slider = $(".slide-news");

  slider.slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  });
});

// side navigation
// $(document).ready(function () {
//   $(".sec").each(function () {
//     var id = $(this).attr("id");
//     var height = $(this).height();
//     var offset = $(this).offset().top - 100;
//     if (top >= offset && top < offset + height) {
//       link.removeClass("active");
//       $(".navbar")
//         .find('[data-scroll="' + id + '"]')
//         .addClass("active");
//     }
//   });
// });

// fade anuimation

let elementsArray = document.querySelectorAll(".sec");
window.addEventListener("scroll", fadeIn);
function fadeIn() {
  for (var i = 0; i < elementsArray.length; i++) {
    var elem = elementsArray[i];
    var distInView = elem.getBoundingClientRect().top - window.innerHeight + 40;
    if (distInView < 0) {
      elem.classList.add("inView");
      // } else {
      //   elem.classList.remove("inView");
      // }
    }
  }
}
fadeIn();

// form validation
function formValidation() {
  let isValid = true;

  // Reset error messages
  $(".error-message").html("");

  // validate email
  const email = $("#email").val().trim();
  if (email === "") {
    $("#emailError").html("Email is required").css("color", "red");
    isValid = false;
  } else if (!isValidEmail(email)) {
    $("#emailError")
      .html("Please enter a valid email address")
      .css("color", "red");
    isValid = false;
  }

  // validate username
  const username = $("#name").val().trim();
  if (username === "") {
    $("#userNameError").html("Username is required").css("color", "red");
    isValid = false;
  } else if (username.length < 2) {
    $("#userNameError")
      .html("Username should contain at least 2 characters")
      .css("color", "red");
    isValid = false;
  }

  return isValid;
}

// valedate patterns
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// smoose scroll on click
// wait untill the all content load
document.addEventListener("DOMContentLoaded", function () {
  const navbarLinks = document.querySelectorAll(".navbar a.dot");
  const sections = document.querySelectorAll(".sec");

  // Function to highlight the active link on scroll
  function highlightActiveLink() {
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 60; // Offset for the navbar height
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        navbarLinks.forEach((link) => {
          link.classList.remove("active"); // Remove 'active' class from all links
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active"); // Add 'active' class to the matching link
          }
        });
      }
    });
  }

  navbarLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default anchor behavior
      const targetId = this.getAttribute("href"); // Get target section ID from href
      const targetSection = document.querySelector(targetId);

      // Scroll smoothly to the target section
      window.scrollTo({
        top: targetSection.offsetTop - 50, // Adjust the position based on navbar height
        behavior: "smooth", // Enable smooth scroll behavior
      });
    });
  });

  // Add scroll event listener for highlighting active link
  window.addEventListener("scroll", highlightActiveLink);
});
