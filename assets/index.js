// Display current time in milliseconds
const timeDisplay = document.querySelector('[data-testid="test-user-time"]');

function updateTime() {
  timeDisplay.textContent = Date.now();
}

// Update time once at load and every second (to show dynamism)
updateTime();
setInterval(updateTime, 1000);
