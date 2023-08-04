// 1)

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(data) {
        let newNode = new Node(data, this.head);
        this.head = newNode;
        return this.head;
    }
};

let SLL1 = new SLL();
console.log(SLL1.addFront(18)); // Outputs: Node { data: 18, next: null }
console.log(SLL1.addFront(5));  // Outputs: Node { data: 5, next: Node { data: 18, next: null } }
console.log(SLL1.addFront(73)); // Outputs: Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null } } }

// 2) 

class SLL {
    removeFront() {
        if (this.head === null) {
            return null;
        } else {
            this.head = this.head.next;
            return this.head;
        }
    }
};

let SLL1 = new SLL();
SLL1.addFront(18);
SLL1.addFront(5);
SLL1.addFront(73);

console.log(SLL1.removeFront()); // Outputs: Node { data: 5, next: Node { data: 18, next: null } }
console.log(SLL1.removeFront()); // Outputs: Node { data: 18, next: null }
console.log(SLL1.removeFront()); // Outputs: null, list is now empty

// 3) 

class SLL {

    front() {
        if (this.head === null) {
            return null;
        } else {
            return this.head.data;
        }
    }
};

let SLL1 = new SLL();
SLL1.addFront(18);
console.log(SLL1.front()); // Outputs: 18

SLL1.removeFront();
console.log(SLL1.front()); // Outputs: null
