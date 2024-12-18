// Create two arrays using prompt for input
let subArray1 = prompt("Enter names separated by commas (e.g., Genevieve, Juan, Luna):");
let subArray2 = prompt("Enter ages separated by commas (e.g., 24, 65, 21, 5, 9):");

// Convert input strings to arrays
let namesArray = subArray1.split(",").map(name => name.trim()); // Trim spaces
let agesArray = subArray2.split(",").map(Number); // Convert to numbers

// Create a multi-dimensional array [name, age]
let combinedArray = [];
for (let i = 0; i < namesArray.length; i++) {
  combinedArray.push([namesArray[i], agesArray[i]]);
}

// Log each sub-array [name, age] per line
console.log("Restructured Multi-Dimensional Array:");
for (let i = 0; i < combinedArray.length; i++) {
  console.log(combinedArray[i]);
}
