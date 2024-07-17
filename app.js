document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  function showLoader() {
    loader.style.display = "flex";
    content.style.display = "none";
  }

  function hideLoader() {
    loader.style.display = "none";
    content.style.display = "block";
  }

  if (!sessionStorage.getItem("loaderDisplayed")) {
    showLoader();

    window.addEventListener("load", function () {
      hideLoader();
      sessionStorage.setItem("loaderDisplayed", "true");
    });
  } else {
    hideLoader();
  }
});

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
