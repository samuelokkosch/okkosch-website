const YTPlayerOverlay = document.querySelector(".youtube-overlay");
const YTLinks = document.querySelectorAll(".ytp-herzog")

YTLinks.forEach((link) => {
  link.addEventListener("click", () => {
    YTPlayerOverlay.classList.add("active");
  });
});

YTPlayerOverlay.addEventListener("click", () => {
  YTPlayerOverlay.classList.remove("active");
});