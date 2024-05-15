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
