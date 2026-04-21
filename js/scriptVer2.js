/* ===== ナビをドラッグで横スクロール（完全版） ===== */
const slider = document.querySelector('.fixed-menu');
const links = document.querySelectorAll('.menu a');

let isDown = false;
let isDragging = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  isDragging = false;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
});

slider.addEventListener('mouseup', () => {
  isDown = false;

  // ドラッグ後にクリック復活
  setTimeout(() => {
    links.forEach(link => link.style.pointerEvents = 'auto');
  }, 0);
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;

  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;

  if (Math.abs(walk) > 5) {
    isDragging = true;

    // ドラッグ中はリンク完全無効
    links.forEach(link => link.style.pointerEvents = 'none');
  }

  slider.scrollLeft = scrollLeft - walk;
});

// ===== 作品クリック制御（ドラッグ対応） =====
document.addEventListener("DOMContentLoaded", () => {

  const works = document.querySelector('.works-grid');
  const cards = document.querySelectorAll('.work-card');

  let isDown2 = false;
  let isDragging2 = false;
  let startX2;
  let scrollLeft2;

  works.addEventListener('mousedown', (e) => {
    isDown2 = true;
    isDragging2 = false;
    startX2 = e.pageX - works.offsetLeft;
    scrollLeft2 = works.scrollLeft;
  });

  works.addEventListener('mouseleave', () => {
    isDown2 = false;
  });

  works.addEventListener('mouseup', () => {
    isDown2 = false;
  });

  works.addEventListener('mousemove', (e) => {
    if (!isDown2) return;

    const x = e.pageX - works.offsetLeft;
    const walk = (x - startX2) * 2;

    if (Math.abs(walk) > 5) {
      isDragging2 = true;
    }

    works.scrollLeft = scrollLeft2 - walk;
  });

  // クリック処理
  cards.forEach(card => {
    card.addEventListener('click', () => {
      if (!isDragging2) {
        const modalId = card.dataset.modal;
        openModal(modalId);
      }
    });
  });

});

function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}