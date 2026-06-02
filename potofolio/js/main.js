const words = [
 "infinite learning 2026",
 "Frestar Project",
  "Mobile devoloper",
  "Python Developer",
  "frontend Developer",
  "Java script",
];

let i = 0;
let j = 0;
let isDeleting = false;

function type() {
  let current = words[i];

  if (isDeleting) {
    j--;
  } else {
    j++;
  }

  document.getElementById("typing").innerText =
    current.substring(0, j);

  if (!isDeleting && j === current.length) {
    isDeleting = true;
    setTimeout(type, 1200);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(type, isDeleting ? 60 : 120);
}

type();