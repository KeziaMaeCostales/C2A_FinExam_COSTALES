// Node class to store value and next reference
class Node {
    constructor(itemValue) {
        this.value = itemValue; // Set the value
        this.next = null;       // Set next to null
    }
}

// LinkedList class to manage nodes
class LinkedList {
    constructor() {
        this.head = null; // Head of the list starts as null
        this.currentSize = 0; // Size starts at 0
    }

    // Append function to add a new node to the list
    append(newItem) {
        const newNode = new Node(newItem); // Create a new node
        if (this.head === null) {
            this.head = newNode; // If list is empty, set new node as head
        } else {
            let tempNode = this.head; // Start from the head
            while (tempNode.next !== null) { // Traverse to the end
                tempNode = tempNode.next;
            }
            tempNode.next = newNode; // Add the new node at the end
        }
        this.currentSize++; // Increase the size
        this.print(); // Print the list after adding a new node
    }

    // Print function to display the linked list
    print() {
        let tempNode = this.head; // Start at the head
        const result = [];
        while (tempNode !== null) { // Traverse the list
            result.push(tempNode.value); // Add each value to result
            tempNode = tempNode.next; // Move to the next node
        }
        console.log("Current Linked List:", result.join(" -> "));
    }
}

// Create an instance of LinkedList
const linkedList = new LinkedList();

// Append the required items
linkedList.append("Data Structures – Array");
linkedList.append("Variable Type – Integer");
linkedList.append("Sorting Algorithm – Bubble Sort");
