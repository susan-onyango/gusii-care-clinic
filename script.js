// Prevent selecting past dates in the date picker
const dateInput = document.getElementById("visitDate");
const today = new Date().toISOString().split("T")[0];
dateInput.setAttribute("min", today);

// Handle form submission
const form = document.getElementById("appointmentForm");
const confirmationBox = document.getElementById("confirmationBox");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("fullName").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const department = document.getElementById("department").value;
  const date = document.getElementById("visitDate").value;

  // Generate a random reference number
  const refNumber = "GCC-" + Math.floor(1000 + Math.random() * 9000);

  confirmationBox.innerHTML = `
    <strong>Appointment Confirmed! (Ref: ${refNumber})</strong><br>
    Thank you, <strong>${name}</strong>. Your visit to <strong>${department}</strong> 
    is scheduled for <strong>${date}</strong>. An SMS reminder will be sent to <strong>${phone}</strong>.
  `;

  confirmationBox.classList.remove("hidden");
  form.reset();
});