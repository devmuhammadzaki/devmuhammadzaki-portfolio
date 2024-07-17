(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
})();

document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  // Check if the loader has been shown before
  if (sessionStorage.getItem("loaderShown") === "true") {
    // Loader has been shown before, so hide it immediately
    loader.style.display = "none";
    content.style.display = "block";
  } else {
    // Loader hasn't been shown before, so show it
    loader.style.display = "block";
    content.style.display = "none";

    window.addEventListener("load", function () {
      // Hide the loader and show the content
      loader.style.display = "none";
      content.style.display = "block";

      // Set session storage to remember that the loader has been shown
      sessionStorage.setItem("loaderShown", "true");
    });
  }
});
