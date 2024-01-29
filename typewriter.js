document.addEventListener("DOMContentLoaded", async function () {
  var preBlocks = document.querySelectorAll(".terminal-text");

  async function typeText(preBlock, originalText, speed) {
    var chunkSize = originalText.length > 50 ? 10 : 1;

    for (var index = 0; index < originalText.length; index += chunkSize) {
      var chunk = originalText.substring(index, index + chunkSize);
      preBlock.textContent += chunk;
      preBlock.style.visibility = "visible";
      await new Promise((resolve) => setTimeout(resolve, speed)); // Delay for the typing effect
    }
  }

  for (const preBlock of preBlocks) {
    var originalText = preBlock.textContent;
    preBlock.textContent = ""; // Clear the original text

    var speed = 10; // Adjust the speed value to make it faster

    if (preBlock.tagName !== "PRE" && preBlock.classList.contains("fastType")) {
      speed = 5; // Adjust the speed value for specific conditions
    }

    await typeText(preBlock, originalText, speed);
  }
});
