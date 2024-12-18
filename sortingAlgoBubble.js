// Empty array to store numbers
let numbers = [];

// Use prompt to add numbers to the array
for (let i = 0; i < 10; i++) {
    let userInput = parseInt(prompt("Enter a number:"));
    numbers.push(userInput);
}

// Function to implement Bubble Sort
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {          // Outer loop for passes
        for (let j = 0; j < n - i - 1; j++) {  // Inner loop for comparisons
            console.log("Comparing " + arr[j] + " and " + arr[j + 1]);
            if (arr[j] > arr[j + 1]) {         // Swap if needed
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                console.log("Swapped " + arr[j] + " and " + arr[j + 1]);
            }
        }
        console.log("Array after pass " + (i + 1) + ": " + arr.join(", "));
    }
    return arr;
}

// Call the bubbleSort function
console.log("Original Array: " + numbers.join(", "));
let sortedArray = bubbleSort(numbers);
console.log("Sorted Array: " + sortedArray.join(", "));