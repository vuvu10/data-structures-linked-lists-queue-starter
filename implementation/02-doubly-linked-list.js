// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
        // Time Complexity: O(1) Constant.

        // Add node of val to head of linked list
        const newNode = new DoublyLinkedNode(val);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        const newNode = new DoublyLinkedNode(val);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;

        // Write your hypothesis on the time complexity of this method here
        // Time Complexity: O(1) Constant
    }

    removeFromHead() {
        // Remove node at head
        if (this.length === 0) {
            return undefined;
        }
        const removeNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.length--;
        return removeNode.value;

        // Write your hypothesis on the time complexity of this method here
        // Time Complexity: O(1) Constant
    }

    removeFromTail() {
        // Remove node at tail
        if (this.length === 0) {
            return undefined;
        }
        const removedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.length--;
        return removedNode.value;

        // Write your hypothesis on the time complexity of this method here
        // Time Complexity: O(1) Constant
    }

    peekAtHead() {
        // Return value of head node
        if (this.length === 0) {
            return undefined;
        }
        return this.head.value;

        // Write your hypothesis on the time complexity of this method here
        // Time Complexity: O(1) Constant
    }

    peekAtTail() {
        // Return value of tail node
        if (this.length === 0) {
            return undefined;
        }
        return this.tail.value;

        // Write your hypothesis on the time complexity of this method here
        // Time Complexity: O(1) Constant
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
