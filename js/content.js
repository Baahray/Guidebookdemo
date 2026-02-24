document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("content/sections/arrival.md");
    if (!response.ok) return;

    const text = await response.text();

    // find: checkin: some text
    const match = text.match(/^checkin:\s*(.+)$/m);
    if (!match) return;

    const value = match[1].trim();

    const target = document.querySelector('[data-content="arrival.checkin"]');
    if (!target) return;

    target.textContent = value;
  } catch (e) {
    // fail silently – site still works
  }
});