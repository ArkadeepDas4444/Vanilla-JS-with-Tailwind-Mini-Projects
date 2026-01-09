const audio = document.getElementById("tick-audio");
const toggleBtn = document.getElementById("toggle-sound");
let soundEnabled = false;

toggleBtn.addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    toggleBtn.textContent = soundEnabled ? "🔊 Sound On" : "🔇 Sound Off";
    if (soundEnabled)
        audio.play().catch((e) => console.log("Audio not allowed yet:", e));
});

setInterval(() => {
    const d = new Date();
    const hr = d.getHours();
    const min = d.getMinutes();
    const sec = d.getSeconds();
    const srot = 6*sec;
    const mrot = 6*min + srot/60;
    const hrot = 30*hr + mrot/12;
    hour.style.transform = `rotate(${hrot}deg)`;
    minute.style.transform = `rotate(${mrot}deg)`;
    second.style.transform = `rotate(${srot}deg)`;
}, 1000);

setInterval(() => {
    if (soundEnabled) {
        audio.currentTime = 0;
        audio.play().catch((e) => {});
    }
}, 8000);