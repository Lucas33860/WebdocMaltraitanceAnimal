document.getElementById("second-page").style.display = "none";

document.getElementById("start").addEventListener("click", function () {
  document.getElementById("first-page").style.display = "none";
  document.getElementById("second-page").style.display = "block";
});

function showLoader() {
  const loader = document.createElement("div");
  loader.className = "loader";
  loader.innerHTML = '<div class="spinner"></div>';
  document.body.appendChild(loader);
}

function hideLoader() {
  const loader = document.querySelector(".loader");
  if (loader) {
    loader.remove();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline({
    defaults: { duration: 1.5, ease: "power2.out" },
    delay: 2,
  });

  // Initial settings for images and text
  gsap.set("#imageTop", { y: 140, opacity: 1 });
  gsap.set("#imageBottom", { y: -140, opacity: 1 });
  gsap.set("#textContent", { y: 50, opacity: 0, scale: 0.8 });

  // Animation timeline
  tl.to("#imageTop", { opacity: 1, duration: 0.2 }) // Fade-in image top slowly
    .to("#imageBottom", { opacity: 1, duration: 0.2 }, "<") // Fade-in image bottom slowly
    .to("#imageTop", { y: 30, duration: 1 }, 0) // Move image top to final position
    .to("#imageBottom", { y: -30, duration: 1 }, "<") // Move image bottom to final position
    .to("#textContent", {
      y: 0,
      opacity: 1,
      scale: 1,
      ease: "elastic.out(1, 0.5)", // Stylized text animation
    });
});
