document.addEventListener("DOMContentLoaded", () => {
  const img = document.getElementById("dynamic-image");
  let isDragging = false;
  let offsetX, offsetY;

  img.addEventListener("mousedown", (event) => {
    if (!isDragging) {
      offsetX = event.clientX - img.getBoundingClientRect().left;
      offsetY = event.clientY - img.getBoundingClientRect().top;
      img.style.cursor = "move"; // Change cursor to indicate dragging
    }
    isDragging = !isDragging;
  });

  document.addEventListener("mousemove", (event) => {
    if (isDragging) {
      const x = event.clientX - offsetX;
      const y = event.clientY - offsetY;
      img.style.left = `${x}px`;
      img.style.top = `${y}px`;
    }
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    img.style.cursor = "pointer"; // Reset cursor to pointer after dragging
  });

  img.onerror = () => {
    alert("Failed to load image");
  };
});
