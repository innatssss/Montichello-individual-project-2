// map
let marker;

$(document).ready(function () {
  function initMap() {
    const map = new google.maps.Map($("#map")[0], {
      zoom: 14,
      center: { lat: 40.669998, lng: -73.894333 },
      disableDefaultUI: true,
    });

    marker = new google.maps.Marker({
      map: map,
      draggable: true,
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
$(document).ready(function () {
  $(window).on("scroll", function () {
    var link = $(".navbar a.dot");
    var top = $(window).scrollTop();

    $(".sec").each(function () {
      var id = $(this).attr("id");
      var height = $(this).height();
      var offset = $(this).offset().top - 100;
      if (top >= offset && top < offset + height) {
        link.removeClass("active");
        $(".navbar")
          .find('[data-scroll="' + id + '"]')
          .addClass("active");
      }
    });
  });
});

// fade anuimation

let elementsArray = document.querySelectorAll(".sec");
window.addEventListener("scroll", fadeIn);
function fadeIn() {
  for (var i = 0; i < elementsArray.length; i++) {
    var elem = elementsArray[i];
    var distInView = elem.getBoundingClientRect().top - window.innerHeight + 40;
    if (distInView < 0) {
      elem.classList.add("inView");
    } else {
      elem.classList.remove("inView");
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
