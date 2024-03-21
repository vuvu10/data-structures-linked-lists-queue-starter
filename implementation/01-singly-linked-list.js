// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list
        const newNode = new SinglyLinkedNode(val);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;

        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to tail of linked list
        const newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            //return head;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;
        return this;
    }

    removeFromHead() {
        // Remove node at head
        if (!this.head) return undefined;
        const removeHead = this.head;
        this.head = this.head.next;
        this.length--;
        return removeHead;

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail
        if (!this.head) return undefined;

        if (this.length === 1) {
            this.head = null;
            this.length--;
            return undefined;
        }
        let current = this.head;
        let previous = null;
        while (current.next) {
            previous = current;
            current = current.next;
        }
        previous.next = null;
        this.length--;
        return current;

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node
        return this.head ? this.head.value : undefined;

        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
