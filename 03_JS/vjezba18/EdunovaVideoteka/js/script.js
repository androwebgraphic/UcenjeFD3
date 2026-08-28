// ===== Video Data =====
const videos = [
  {
    file: "video/andreas.webm",
    name: "Andreas",
    role: "Edunova Toaster Hijackers"
  },
  {
    file: "video/Olha.webm",
    name: "Olha",
    role: "Edunova Toaster Hijackers"
  },
  {
    file: "video/SeanKusec.webm",
    name: "Sean Kusec",
    role: "Edunova Toaster Hijackers"
  },
  {
    file: "video/TomislavJakopec.webm",
    name: "Tomislav Jakopec",
    role: "Edunova Toaster Hijackers"
  },
  {
    file: "video/TomislavJurcevic.webm",
    name: "Tomislav Jurcevic",
    role: "Edunova Toaster Hijackers"
  },
  {
    file: "video/ivicaj.webm",
    name: "Ivićaj",
    role: "Edunova Toaster Hijackers"
  }
];

// ===== DOM References =====
const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const modalPrev = document.getElementById("modalPrev");
const modalNext = document.getElementById("modalNext");
const modalVideo = document.getElementById("modalVideo");
const modalName = document.getElementById("modalName");
const modalRole = document.getElementById("modalRole");

let currentIndex = 0;

// ===== Build Gallery Cards =====
function buildGallery() {
  videos.forEach(function (video, index) {
    var card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-index", index);
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", "Play video of " + video.name);

    card.innerHTML =
      '<div class="card__video-wrap">' +
        '<video class="card__video" src="' + video.file + '" muted preload="metadata" loop></video>' +
        '<div class="card__play">' +
          '<div class="card__play-icon"></div>' +
        '</div>' +
      '</div>' +
      '<div class="card__info">' +
        '<div class="card__name">' + video.name + '</div>' +
        '<div class="card__role">' + video.role + '</div>' +
      '</div>';

    gallery.appendChild(card);

    // Hover preview: play/pause muted video on hover
    var vid = card.querySelector(".card__video");

    card.addEventListener("mouseenter", function () {
      vid.currentTime = 0;
      vid.play().catch(function () {});
    });

    card.addEventListener("mouseleave", function () {
      vid.pause();
      vid.currentTime = 0;
    });

    // Click to open modal
    card.addEventListener("click", function () {
      openModal(index);
    });

    // Keyboard: Enter or Space
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(index);
      }
    });
  });
}

// ===== Modal Functions =====
function openModal(index) {
  currentIndex = index;
  updateModalContent();
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  modalVideo.pause();
  modalVideo.removeAttribute("src");
  modalVideo.load();
}

function updateModalContent() {
  var video = videos[currentIndex];
  modalVideo.src = video.file;
  modalName.textContent = video.name;
  modalRole.textContent = video.role;
  modalVideo.load();
  modalVideo.play().catch(function () {});
}

function showPrev() {
  currentIndex = (currentIndex - 1 + videos.length) % videos.length;
  updateModalContent();
}

function showNext() {
  currentIndex = (currentIndex + 1) % videos.length;
  updateModalContent();
}

// ===== Mobile nav buttons (created in JS for cleanliness) =====
function createMobileNav() {
  var nav = document.createElement("div");
  nav.classList.add("modal__mobile-nav");

  var prevBtn = document.createElement("button");
  prevBtn.textContent = "\u276E";
  prevBtn.setAttribute("aria-label", "Previous video");
  prevBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    showPrev();
  });

  var nextBtn = document.createElement("button");
  nextBtn.textContent = "\u276F";
  nextBtn.setAttribute("aria-label", "Next video");
  nextBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    showNext();
  });

  nav.appendChild(prevBtn);
  nav.appendChild(nextBtn);

  // Insert mobile nav after video element inside the player
  var player = document.querySelector(".modal__player");
  if (player) {
    player.appendChild(nav);
  }
}

// ===== Event Listeners =====
modalOverlay.addEventListener("click", closeModal);
modalClose.addEventListener("click", closeModal);
modalPrev.addEventListener("click", showPrev);
modalNext.addEventListener("click", showNext);

// Keyboard navigation
document.addEventListener("keydown", function (e) {
  if (!modal.classList.contains("active")) return;

  if (e.key === "Escape") {
    closeModal();
  } else if (e.key === "ArrowLeft") {
    showPrev();
  } else if (e.key === "ArrowRight") {
    showNext();
  }
});

// Touch swipe support
var touchStartX = 0;
var touchEndX = 0;

modal.addEventListener("touchstart", function (e) {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

modal.addEventListener("touchend", function (e) {
  touchEndX = e.changedTouches[0].screenX;
  var diff = touchStartX - touchEndX;
  if (Math.abs(diff) > 60) {
    if (diff > 0) {
      showNext();
    } else {
      showPrev();
    }
  }
}, { passive: true });

// ===== Initialise =====
buildGallery();
createMobileNav();
