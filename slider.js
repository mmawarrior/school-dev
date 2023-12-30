// Initialize Splide slider with specified configuration
var splide = new Splide("#main-slider", {
    width: 600,
    height: 300,
    pagination: false,
    cover: true
  });
  
  // Get all thumbnail elements and initialize each one
  var thumbnails = document.getElementsByClassName("thumbnail");
  var current; // Variable to store the currently active thumbnail
  
  // Loop through each thumbnail to set up click event listeners
  for (var i = 0; i < thumbnails.length; i++) {
    initThumbnail(thumbnails[i], i);
  }
  
  // Function to initialize a thumbnail with a click event listener
  function initThumbnail(thumbnail, index) {
    thumbnail.addEventListener("click", function () {
      // Go to the corresponding slide when a thumbnail is clicked
      splide.go(index);
    });
  }
  
  // Event listener for the "mounted" and "move" events of the Splide slider
  splide.on("mounted move", function () {
    // Get the thumbnail corresponding to the current slide index
    var thumbnail = thumbnails[splide.index];
  
    if (thumbnail) {
      // Remove the "is-active" class from the previously active thumbnail
      if (current) {
        current.classList.remove("is-active");
      }
  
      // Add the "is-active" class to the current thumbnail, marking it as active
      thumbnail.classList.add("is-active");
      current = thumbnail; // Update the current active thumbnail
    }
  });
  
  // Mount (initialize) the Splide slider
  splide.mount();
  