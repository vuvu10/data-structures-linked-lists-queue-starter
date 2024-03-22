// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        let length = 0;
        let curr = this.head;
        while (curr) {
            length++;
            curr = curr.next;
        }
        return length;

        // Implement in O(n) and in O(1) time complexity
        // Time complexity: O(n)

    }

    /* constructor(head = null) {
        super();
        this.head = head;
        this.length = 0;
        if (head) {
            while (curr) {
                this.length++;
                curr = curr.next;
            }

        }

    }

    listLength() {
        return this.length;

    } */
    // O(1) With additional space

    sumOfNodes() {
        // Returns the sum of the values of all the nodes
        let sum = 0;
        let curr = this.head;
        while (curr) {
            sum += curr.value;
            curr = curr.next;
        }
        return sum;

        // Write your hypothesis on the time complexity of this method here
        // Time complexity: O(n)
    }

    averageValue() {
        // Returns the average value of all the nodes
        if (this.listLength() === 0) return 0;
        return this.sumOfNodes() / this.listLength();

        // Write your hypothesis on the time complexity of this method here
        // Time complexity: O(n) this is due to sumOfNodes or listLength(O(n))
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head
        if (n < 0 || n >= this.listLength()) return null;
        let curr = this.head;
        for (let i = 0; i < n; i++) {
            curr = curr.next;
        }
        return curr;

        // Write your hypothesis on the time complexity of this method here
        // Time complexity: O(n)
    }

    findMid() {
        // Returns the middle node

        let slow = this.head;
        let fast = this.head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?



        // Write your hypothesis on the time complexity of this method here
        // Time complexity: O(n)
    }



    reverse() {
        // Returns a new reversed version of the linked list
        let reverseList = new SinglyLinkedList();
        let curr = this.head;
        while (curr) {
            reverseList.addToHead(curr.value);
            curr = curr.next;
        }
        return reverseList;

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let prev = null;
        let curr = this.head;
        while (curr) {
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;

        // Write your hypothesis on the time complexity of this method here
    }
}

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
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
        // How do the implementation for singly and doubly vary if at all?
        let slow = this.head;
        let fast = this.head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;

        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list
        let reverseList = new DoublyLinkedList();
        let curr = this.head;
        while (curr) {
            reverseList.addToHead(curr.value);
            curr = curr.next;
        }
        return reverseList;

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let prev = null;
        let curr = this.head;
        while (curr) {
            const next = curr.next;
            curr.next = prev;
            curr.prev = next;
            prev = curr;
            curr = next;
        }
        this.head = prev;

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
