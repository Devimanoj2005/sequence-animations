const box = document.getElementById("box");

/* Function to add animation with delay */
function addAnimation(className, duration) {
  return new Promise(resolve => {
    box.classList.add(className);
    setTimeout(resolve, duration);
  });
}

/* Sequence controller */
async function startAnimation() {
  // Reset box
  box.className = "box";

  // Play animations one after another
  await addAnimation("move", 1000);
  await addAnimation("rotate", 1000);
  await addAnimation("scale", 1000);
}
