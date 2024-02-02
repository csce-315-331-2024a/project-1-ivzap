document.addEventListener("DOMContentLoaded", async function () {
  var preBlocks = document.querySelectorAll(".terminal-text");
  async function typeText(preBlock, originalText, speed) {
    var chunkSize = originalText.length > 50 ? 10 : 1; // make faster depending on character count

    for (var index = 0; index < originalText.length; index += chunkSize) {
      var chunk = originalText.substring(index, index + chunkSize);
      preBlock.textContent += chunk;
      preBlock.style.visibility = "visible"; // let user be able to see the typing
      await new Promise((resolve) => setTimeout(resolve, speed)); // delay for the typing effect
    }
  }

  // for each element, start typing it out, writing to screen.
  for (const preBlock of preBlocks) {
    // if stylesheet is style2 we dont want typing effect
    curStyleSheet = localStorage.getItem("savedStyleName");
    if (curStyleSheet == "style2.css") {
      break;
    }
    if (preBlock.id == "portfolioBoxGithub") {
      preBlock.style.visibility = "visible";
      continue;
    }
    var originalText = preBlock.textContent;
    preBlock.textContent = ""; // clear the original text

    var speed = 10; // adjust the speed value to make it faster

    if (preBlock.tagName !== "PRE" && preBlock.classList.contains("fastType")) {
      speed = 5; // adjust the speed value for specific conditions
    }
    // perform typing effect
    await typeText(preBlock, originalText, speed);
  }
});
