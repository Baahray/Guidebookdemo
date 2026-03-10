document.addEventListener("DOMContentLoaded", async () => {

  const response = await fetch("content/sections/arrival.md");
  if (!response.ok) return;

  const text = await response.text();
  const lines = text.split("\n");

  lines.forEach(line => {

    const parts = line.split(":");
    if (parts.length < 2) return;

    const key = parts[0].trim();
    const value = parts.slice(1).join(":").trim();

    const element = document.querySelector(`[data-content="arrival.${key}"]`);

    if (element) {
      element.innerHTML = value;
    }

  });

});