// let scrollContainer = document.querySelector(".slide-news");
// let backBtn = document.querySelector(".left-arrow");
// let nextBtn = document.querySelector(".right-arrow");

// scrollContainer.addEventListener("wheel", (evt) => {
//   evt.preventDefault();
//   scrollContainer.scrollLeft += evt.deltaY;
// });

// nextBtn.addEventListener("click", () => {
//   scrollContainer.style.scrollBehavior = "smooth";
//   scrollContainer.scrollLeft += 370;
// });

// backBtn.addEventListener("click", () => {
//   scrollContainer.stale.scrollBehavior = "smooth";
//   scrollContainer.scrollLeft -= 370;
// });

// Get the container and button elements
// const container = document.querySelector(".slide-news");
// const leftButton = document.querySelector(".left-arrow");
// const rightButton = document.querySelector(".right-arrow");

// // Define the scroll distance for each click
// const scrollDistance = 300; // Adjust this value as needed

// // Function to scroll left
// function scrollLeft() {
//   container.scrollLeft -= scrollDistance;
// }

// // Function to scroll right
// function scrollRight() {
//   container.scrollLeft += scrollDistance;
// }

// // Add click event listeners to the buttons
// leftButton.addEventListener("click", scrollLeft);
// rightButton.addEventListener("click", scrollRight);

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
