document.addEventListener("DOMContentLoaded", () => {

  const modal = document.getElementById("modal");
  const title = document.getElementById("modal-title");
  const text = document.getElementById("modal-text");
  const closeBtn = document.querySelector(".close");

  // ❗ CEK DULU ADA ATAU NGGAK
  if (modal && title && text && closeBtn) {

    document.querySelectorAll(".box").forEach(box => {
      box.addEventListener("click", () => {
        title.innerText = box.dataset.title;
        text.innerHTML = box.dataset.text.replace(/\n/g, "<br><br>");
        modal.classList.add("show");
      });
    });

    closeBtn.addEventListener("click", () => {
      modal.classList.remove("show");
    });

    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("show");
      }
    });

  }

});

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  const feature = document.querySelector(".feature");

  if (feature) {
    // efek zoom out + gerak
    const scale = 140 - scrolled * 0.1;
    const blur = scrolled * 0.01;

    feature.style.backgroundSize = scale + "%";
    feature.style.filter = `grayscale(100%) contrast(120%) brightness(80%) blur(${blur}px)`;
  }
});

function openConfirm(link) {
  const popup = document.getElementById("confirmPopup");
  const confirmLink = document.getElementById("confirmLink");

  confirmLink.href = link;
  popup.classList.add("active");
}

function closeConfirm() {
  document.getElementById("confirmPopup").classList.remove("active");
}

const modal = document.getElementById("modal");
const title = document.getElementById("modal-title");
const text = document.getElementById("modal-text");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".box").forEach(box => {
  box.addEventListener("click", () => {
    title.innerText = box.dataset.title;
    text.innerHTML = box.dataset.text.replace(/\n/g, "<br><br>");
    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});