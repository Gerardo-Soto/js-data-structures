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

	insertAt(indexInput, data) {
		const index = parseInt(indexInput);
		//check if index is into the linkedList
		if (index < 0 || index > this.size) {
			return false;
		};

		// if this index is into the linkedList, create the node
		const newNode = new Node(data);
		
		//Data to traverse the list
		let current	= this.head;
		let previous = null;

		if (index == 0) {
			newNode.next = current;
			this.head = newNode;
			console.log('index 0');
		} else {
			for (let i = 0; i < index; i++) {
				previous = current;
				current = current.next;
				console.log('index: ' + i);
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
				console.log('index: ' + 1);
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
		let currentNode = this.head;
		let result = '[';

		while (currentNode) {
			result += currentNode.data + ' -> ';
			currentNode = currentNode.next;
		};

		result += ']';
		return result;
	};
};


let currentLinkedList = document.getElementById('currentLinkedList');
let addLinkedList = document.getElementById('addLinkedList');
let addAtLinkedList = document.getElementById('addAtLinkedList');
let addDataAtLinkedList = document.getElementById('addDataAtLinkedList');
let removeFromLinkedList = document.getElementById('removeFromLinkedList');
let removeDataLinkedList = document.getElementById('removeDataLinkedList');
let outputSizeLinkedList = document.getElementById('outputSizeLinkedList');
let outputEmptyLinkedList = document.getElementById('outputEmptyLinkedList');


function btnAddLinkedList() {
	const data = addLinkedList.value;
	
	if (data === '') {
		return;
	};
	
	linkedList.add(data);

	updateForm();
};

function btnAddAtLinkedList() {
	let index = addAtLinkedList.value;
	index = parseInt(index);

	if (index < 0 || index > linkedList.getSize()) {
		addAtLinkedList.value = '';
		addDataAtLinkedList.value = 'Error: stack overflow.';
		return;
	}

	const data = parseInt(addDataAtLinkedList.value);

	linkedList.insertAt(index, data);

	updateForm();
};

function btnRemoveFromLinkedList() {
	const indexRemove = parseInt(removeFromLinkedList.value);

	const dataRemoved = linkedList.removeData(indexRemove);

	updateForm();
};

function btnRemoveDataLinkedList() {
	const data = removeDataLinkedList.value;

	const dataRemoved = linkedList.removeData(data);

	updateForm();
};

function updateForm() {
	const result = linkedList.print();
	currentLinkedList.value = result;
	addLinkedList.value = '';

	addAtLinkedList = '';

	removeFromLinkedList = '';
	
	removeDataLinkedList = '';

	const size = linkedList.getSize();
	outputSizeLinkedList.value = size;

	const isEmpty = linkedList.isEmpty();
	outputEmptyLinkedList.value = isEmpty;
}

//const add = addLinkedList.addEventListener('keydown', enterAdd);

addLinkedList.addEventListener('keydown', ({key}) => {
	if (key === "Enter") {
		btnAddLinkedList();
	};
});

addAtLinkedList.addEventListener('keydown', ({key}) =>{
	if (key === "Enter") {
		btnAddAtLinkedList();
	};
});

addDataAtLinkedList.addEventListener('keydown', ({key}) => {
	if (key === "Enter") {
		btnAddAtLinkedList();
	};
});

removeFromLinkedList.addEventListener('keydown', ({key}) => {
	if (key === "Enter") {
		btnRemoveFromLinkedList();
	};
})


// Create an Object
const linkedList = new LinkedList();

linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.insertAt(1,'a');


console.log(linkedList.print());