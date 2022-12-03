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
		let current	

	};

	removeFrom(head) {};
	
	removeElement(data) {};
	
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
	print() {};
}