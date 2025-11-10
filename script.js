function updateclock() {
  // Get the current date and time
  const now = new Date();

  // Extract hours, minutes, and seconds from current time
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Decide whether it's AM or PM
  let ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert 24-hour format to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 should be shown as 12

  // Add leading zeros for single-digit values
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  // Combine everything into a formatted time string
  const timestring = `${hours}:${minutes}:${seconds} <span class="ampm">${ampm}</span>`;

  // Create a nicely formatted date string (e.g., Monday, January 1, 2025)
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const datestring = now.toLocaleDateString('en-US', options);

  // Push updated time and date to the DOM
  document.querySelector('.clock').innerHTML = timestring;
  document.querySelector('.date').textContent = datestring;
}

// Run once immediately
updateclock();

// Update every second
setInterval(updateclock, 1000);
