document.addEventListener('DOMContentLoaded', (event) => {
    // Display current UTC time
    function updateUTCTime() {
        const now = new Date();
        const utcTime = now.toUTCString();
        document.getElementById('utc-time').textContent = utcTime;
    }
    updateUTCTime();
    setInterval(updateUTCTime, 1000);

    // Display current day of the week
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
    const currentDay = days[now.getUTCDay()];
    document.getElementById('current-day').textContent = currentDay;
});
