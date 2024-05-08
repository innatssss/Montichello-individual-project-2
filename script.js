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

// slick slider

$(() => {
  var slider = $(".slide-news");
  
  slider.slick({
    dots: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  });
});
