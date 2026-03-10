document.addEventListener("DOMContentLoaded", async () => {

  const response = await fetch("content/sections/arrival.md");
  if (!response.ok) return;

  const text = await response.text();
  const lines = text.split("\n");

  const data = {};

  lines.forEach(line => {
    const match = line.match(/^([^:]+):\s*(.+)$/);
    if (!match) return;

    const key = match[1].trim();
    const value = match[2].trim();

    data[key] = value;
  });

  Object.keys(data).forEach(key => {
    const element = document.querySelector(`[data-content="arrival.${key}"]`);
    if (element) element.innerHTML = data[key];
  });

});