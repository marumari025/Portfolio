function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

/* ===== モーダル外クリックで閉じる ===== */
window.addEventListener("click", (e) => {
  document.querySelectorAll(".modal").forEach(modal => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

/* ===== 雷生成（背景） ===== */
const container = document.getElementById("thunder-container");

setInterval(() => {
  const thunder = document.createElement("div");
  thunder.className = "thunder";
  thunder.textContent = "⚡";
  thunder.style.left = Math.random() * 100 + "%";
  thunder.style.animationDuration =
    4 + Math.random() * 4 + "s, " +
    3 + Math.random() * 3 + "s";

  container.appendChild(thunder);

  setTimeout(() => thunder.remove(), 8000);
}, 700);
