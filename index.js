function updateClock() {
    const now = new Date();

    // Get time components
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Get date components
    const year = now.getFullYear();
    const month = now.getMonth(); // 0-indexed (0 for January)
    const day = now.getDate();

    // Format time with leading zeros
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Convert month number to name (optional, but enhances readability)
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
    const currentMonthName = monthNames[month];

    // Construct the display string
    const clockDisplay = `${currentMonthName} ${day}, ${year} - ${hours}:${minutes}:${seconds}`;

    // Update the HTML element
    document.getElementById('clock1').textContent = clockDisplay;
}

// Call the function once immediately to display the clock on page load
updateClock();

// Set an interval to update the clock every second (1000 milliseconds)
setInterval(updateClock, 1000);