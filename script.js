// ✅ Function to generate a random HEX color
function randomColor() {
  // 16777215 is the decimal for FFFFFF (white), so we pick a random number up to that and convert it to hex
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

// ✅ Function to generate the color palette
function generatePalette() {
  const palette = document.getElementById("palette"); // Get the palette container
  palette.innerHTML = ""; // Clear any existing colors

  // Generate 5 random colors
  for (let i = 0; i < 5; i++) {
    const color = randomColor(); // Create a random color
    const div = document.createElement("div"); // Create a new div for each color
    div.className = "color-box"; // Add CSS class for styling
    div.style.background = color; // Set background to the generated color
    div.innerText = color; // Show the hex code as text
    div.title = "Click to Copy"; // Tooltip for better UX

    // 📋 Copy color to clipboard when user clicks on the box
    div.onclick = () => {
      navigator.clipboard.writeText(color); // Copy color code
      div.innerText = "Copied!"; // Show confirmation
      // Revert text back to original hex code after 1 second
      setTimeout(() => (div.innerText = color), 1000);
    };

    // Add the new color box to the palette container
    palette.appendChild(div);
  }
}

// ✅ Generate a palette when the page first loads
generatePalette();
