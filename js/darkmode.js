function toggleDark() {
  document.body.classList.toggle("light");

  // simpan status ke localStorage
  if (document.body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }

  updateIcon();
}

// cek saat halaman dibuka
window.onload = function () {
  let theme = localStorage.getItem("theme");

  if (theme === "light") {
    document.body.classList.add("light");
  }

  updateIcon();
};

// ganti icon tombol
function updateIcon() {
  const btn = document.querySelector(".dark-toggle");

  if (document.body.classList.contains("light")) {
    btn.innerHTML = "☀️";
  } else {
    btn.innerHTML = "🌙";
  }
}