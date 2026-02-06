let count = 3;

/* Countdown */
window.onload = function () {
  let timer = setInterval(() => {
    document.getElementById("countdown").innerText = count;
    count--;

    if (count < 0) {
      clearInterval(timer);
      nextPage(2);
    }
  }, 1000);
};

/* Switch Pages */
function nextPage(num) {
  document.querySelectorAll(".page").forEach((p) => {
    p.classList.remove("active");
  });

  document.getElementById("page" + num).classList.add("active");
}

/* Start Surprise + Music */
function startSurprise() {
  const music = document.getElementById("bgMusic");
  music.volume = 0.7;   // safe volume
  music.play().catch((err) => {
    console.log("Music play blocked:", err);
  });

  nextPage(3);
}

/* Light Candle */
function lightCandle() {
  document.getElementById("flame").style.display = "block";
  document.getElementById("nextCake").style.display = "inline-block";
}

/* Photo Slider */
let photos = ["photo1.jpeg", "photo2.jpeg", "photo3.jpeg"];
let index = 0;

function nextPhoto() {
  index++;
  if (index >= photos.length) index = 0;
  document.getElementById("photo").src = photos[index];
}
