function openLightbox(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const caption = document.getElementById("lightbox-caption");

  if (!lightbox || !lightboxImg) return;

  lightboxImg.src = img.src;
  caption.textContent = img.dataset.caption || "";

  document.body.classList.add("no-scroll");
  lightbox.style.display = "flex";
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox) return;

  lightbox.style.display = "none";
  document.body.classList.remove("no-scroll");
}

// ✅ NEW: close when clicking the dark background
document.addEventListener("click", (e) => {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox || lightbox.style.display !== "flex") return;

  // only close if the background itself was clicked
  if (e.target === lightbox) {
    closeLightbox();
  }
});