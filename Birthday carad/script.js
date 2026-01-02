const CORRECT_PIN = "123456";
let currentPin = "";

/* Add number */
function addPin(num) {
  if (currentPin.length < 6) {
    currentPin += num;
    document.getElementById("pinInput").value = "•".repeat(currentPin.length);
  }
}

/* Delete */
function clearPin() {
  currentPin = currentPin.slice(0, -1);
  document.getElementById("pinInput").value = "•".repeat(currentPin.length);
}

/* Check PIN */
function checkPin() {
  if (currentPin === CORRECT_PIN) {
    document.getElementById("pinScreen").style.display = "none";
    document.querySelector(".card").style.display = "block";
     // 🎵 start bg music after unlock
    const bgMusic = document.getElementById("bg-music");
    if (bgMusic) {
      bgMusic.muted = false;
      bgMusic.play().catch(() => {});
    }
  } else {
    alert("Wrong PIN ❤️");
    currentPin = "";
    document.getElementById("pinInput").value = "";
  }
}

/* Section navigation */
function showSection(id) {
  document.querySelectorAll('.content').forEach(c => {
    c.style.display = 'none';
  });
  document.getElementById(id).style.display = 'block';
}

/* Envelope placeholder */
function openEnvelope() {
const win = window.open('', '', 'width=360,height=520');
  win.document.write(`
    <div style="padding:10px;font-family:sans-serif;background:#f7dfe7;">
      <h3>Memories </h3>

      <video controls style="width:100%;border-radius:12px;margin-top:8px">
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
      </video>

        <video controls style="width:100%;border-radius:12px;margin-top:8px">
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
      </video>

      <video controls style="width:100%;border-radius:12px;margin-top:8px">
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
      </video>

        <video controls style="width:100%;border-radius:12px;margin-top:8px">
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
      </video>
    </div>
  `);
}

/* Gallery popup */
function openGallery() {
  const win = window.open('', '', 'width=360,height=520');
  win.document.write(`
    <div style="padding:10px;font-family:sans-serif;background:#f7dfe7;">
      <h3>Memories 💕</h3>

      <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91"
           style="width:100%;border-radius:12px;margin-bottom:8px" />

      <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
           style="width:100%;border-radius:12px;margin-bottom:8px" />

      <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
           style="width:100%;border-radius:12px;margin-bottom:8px" />

      <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
           style="width:100%;border-radius:12px;margin-bottom:8px" />

      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
           style="width:100%;border-radius:12px;margin-bottom:8px" />

           <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
           style="width:100%;border-radius:12px;margin-bottom:8px" />

    </div>
  `);
}

/* 🎵 Background music + video interaction */

const bgMusic = document.getElementById("bg-music");

// Unmute music after first user interaction (PIN unlock / click)
document.addEventListener("click", () => {
  if (bgMusic) {
    bgMusic.muted = false;
    bgMusic.play().catch(() => {});
  }
}, { once: true });

// Mute music when any video plays
document.querySelectorAll("video").forEach(video => {

  video.addEventListener("play", () => {
    if (bgMusic) bgMusic.muted = true;
  });

  video.addEventListener("pause", () => {
    if (bgMusic) bgMusic.muted = false;
  });

  video.addEventListener("ended", () => {
    if (bgMusic) bgMusic.muted = false;
  });

});
