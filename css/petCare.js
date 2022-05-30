function myFunction(x) {
    x.classList.toggle("change");
    
    var navMenu = document.getElementById("mobileNav");

    if (navMenu.style.display === "block") {
        navMenu.style.display = "none";
      } else {
        navMenu.style.display = "block";
      }    
  }