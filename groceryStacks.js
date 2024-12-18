// Empty array to store the stack (max 5 items)
let groceryStack = [];

// Peek function: Check if the stack is empty or return the last item
function peek() {
    if (groceryStack.length === 0) {
        console.log("The stack is empty.");
        return null;
    } else {
        return groceryStack[groceryStack.length - 1];
    }
}

// Push function: Add an item to the stack
function push(item) {
    if (groceryStack.length < 5) {
        groceryStack.push(item);
        console.log("Item added: " + item);
    } else {
        console.log("Stack is full. Cannot add more items.");
    }
    console.log("Current Stack: " + groceryStack.join(", "));
    console.log("Top Item: " + peek());
}

// Pop function: Remove the last item from the stack
function pop() {
    if (groceryStack.length === 0) {
        console.log("The stack is empty. Nothing to remove.");
    } else {
        let removedItem = groceryStack.pop();
        console.log("Item removed: " + removedItem);
    }
    console.log("Current Stack: " + groceryStack.join(", "));
    console.log("Top Item: " + peek());
}

// Input grocery items using prompt()
for (let i = 0; i < 5; i++) {
    let item = prompt("Enter grocery item " + (i + 1) + ":");
    push(item);
}

// Perform a pop operation
console.log("Removing the last item...");
pop();