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