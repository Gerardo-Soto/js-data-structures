/* Linked List

 Una lista enlazada es una coleccion **lineal** constutituida por una secuencia de *nodos* en donde se guardan campos de datos arbitrarios y una referencia al siguiente nodo.

Operations:
	-Node constructor
	-LinkedList constructor
	-add
	-insertAt
	-removeFrom
	-removeElement
	-isEmpty
	-getSize
	-print
*/
class Node {
	constructor(data, next) {
		this.data = data;
		this.next = next;
	};
};

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}
	add(data) {
		//Create a node with data 
		const newNode = new Node(data, null);

		// if this list is empty
		if (!this.head) {
			// the head will be the newNode
			this.head = newNode;
		} else {
			let current = this.head;// current is a Node
			// traverses the entire list up to the Node.next == null
			while (current.next) {
				current = current.next;
			};
			current.next = newNode;
		};
		this.size++;
	};

	insertAt(data, index) {
		//check if index is into the linkedList
		if (index < 0 || index > this.size) {
			return false;
		};

		// if this index is into the linkedList, create the node
		const newNode = new Node(data);
		
		//Data to traverse the list
		let current	= this.head;
		let previous;

		if (index === 0) {
			newNode.next = current;
			this.head = newNode;
		} else {
			for (let i = 0; i < index; i++) {
				previous = current;
				current = current.next;
			};

			newNode.next = current;
			previous.next = newNode;
		};
		this.size++;
	};

	removeFrom(index) {

		if (index < 0 || index > this.size) {
			return null;	
		};

		let currentNode = this.head;
		let previousNode = null;

		if (index === 0) {
			this.head = currentNode.next;
		} else {
			for (let i = 0; i < index; i++) {
				previousNode = currentNode;
				currentNode = currentNode.next;
			};
			previousNode.next = currentNode.next;
		};

		this.size--;
		return currentNode.data;
	};
	
	removeData(data) {
		let currentNode = this.head;
		let previousNode = null;

		while (currentNode != null) {
			// data found it:
			if (currentNode === data) {
				// the data is in the head?
				if (!previousNode) {
					this.head = currentNode.next;
				} else {
					// pass the node current
					previousNode.next = currentNode.next;
				}

				this.size--;
				return currentNode.data;
			}

			// Data not found, next node
			previousNode = currentNode;
			currentNode.next;
		}
		return null;
	};
	
	isEmpty() {
		if(this.size === 0){
			return true;
		} else {
			return false;
		}
	};

	getSize() {
		return this.size;
	};

	print() {
		let current = this.head;
		let result = '[';

		while (current) {
			result += current.data += ' -> ';
			current.next;
		};

		result += ']';
		return result;
	};
};
