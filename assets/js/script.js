function toggleButtonVisibility() {
    var button = document.getElementById('top_bt');
    var navi = document.getElementById("navigation_bar");
    if (window.scrollY > 400) {
      button.style.display = 'block';
      navi.style.position = "fixed";
      navi.style.backgroundColor = "#0A0A0A";
    } else {
      button.style.display = 'none';
      navi.style.position = "static";
      navi.style.backgroundColor = "transparent";
    }
  }
  
  // Add event listener for scroll event
  window.addEventListener('scroll', function() {
    toggleButtonVisibility();
  });
  
  // Call the function initially to set the initial state of the button
  toggleButtonVisibility();

  