window.addEventListener("load", function() {
  var loader = document.getElementById("loader");
  var overlay = document.querySelector(".overlay");
  var fadeOutDelay = 1500; // Delay in milliseconds before fading out

  setTimeout(function() {
    loader.classList.add("fade-out");
    overlay.classList.add("fade-out");
    overlay.addEventListener("animationend", function() {
      overlay.style.pointerEvents = "none"; // Disable pointer events on the overlay after fading out
    });
  }, fadeOutDelay);
});
