// ===== مشغل الفيديو =====
const video = document.getElementById("myVideo");
const playPauseBtn = document.getElementById("playPause");
const muteBtn = document.getElementById("mute");
const volumeSlider = document.getElementById("volume");
const fullscreenBtn = document.getElementById("fullscreen");

// تشغيل/إيقاف الفيديو
playPauseBtn.addEventListener("click", () => {
  if (video.paused || video.ended) {
    video.play();
    playPauseBtn.textContent = "⏸️";
  } else {
    video.pause();
    playPauseBtn.textContent = "▶️";
  }
});

// كتم/تشغيل الصوت
muteBtn.addEventListener("click", () => {
  video.muted = !video.muted;
  muteBtn.textContent = video.muted ? "🔇" : "🔊";
});

// التحكم في مستوى الصوت
volumeSlider.addEventListener("input", () => {
  video.volume = volumeSlider.value;
});

// ملء الشاشة
fullscreenBtn.addEventListener("click", () => {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }
});
// ===== التأكد من تحميل الصفحة بالكامل =====
document.addEventListener("DOMContentLoaded", () => {
  // عناصر الفيديو
  const video = document.getElementById("myVideo");
  const playPauseBtn = document.getElementById("playPause");
  const muteBtn = document.getElementById("mute");
  const volumeSlider = document.getElementById("volume");
  const fullscreenBtn = document.getElementById("fullscreen");

  // ===== تشغيل/إيقاف الفيديو =====
  if (playPauseBtn) {
    playPauseBtn.addEventListener("click", () => {
      if (video.paused || video.ended) {
        video.play();
        playPauseBtn.textContent = "⏸️";
      } else {
        video.pause();
        playPauseBtn.textContent = "▶️";
      }
    });
  }

  // ===== كتم/تشغيل الصوت =====
  if (muteBtn) {
    muteBtn.addEventListener("click", () => {
      video.muted = !video.muted;
      muteBtn.textContent = video.muted ? "🔇" : "🔊";
    });
  }

  // ===== التحكم في مستوى الصوت =====
  if (volumeSlider) {
    volumeSlider.addEventListener("input", () => {
      video.volume = volumeSlider.value;
    });
  }

  // ===== ملء الشاشة =====
  if (fullscreenBtn) {
    fullscreenBtn.addEventListener("click", () => {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
    });
  }

  // ===== إظهار الأقسام مع السكرول =====
  const sections = document.querySelectorAll(
    ".about-section, .video-section, .portfolio, .contact-section"
  );

  const showOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) {
        section.classList.add("show");
      }
    });
  };

  window.addEventListener("scroll", showOnScroll);
  showOnScroll(); // تشغيله مرة أول ما الصفحة تفتح
});
