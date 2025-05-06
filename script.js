function firstWord(s) {
  // your code here
	// Trim leading spaces
  s = s.trimStart();

  // Find the index of the first space
  const spaceIndex = s.indexOf(' ');

  // If no space found, return the entire string
  if (spaceIndex === -1) {
    return s;
  }

  // Return the substring up to the first space
  return s.substring(0, spaceIndex);
}

// Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));
