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
	};
	
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

	insertAt(index, data) {
		//console.log('my index:::'+index);
		//check if index is into the linkedList
		if (index < 0 || index > this.size) {
			return false;
		};

		// if this index is into the linkedList, create the node
		const newNode = new Node(data);
		
		//Data to traverse the list
		let current	= this.head.next;
		let previous = this.head;

		if (index == 0) {
			newNode.next = this.head;
			this.head = newNode;
		} else {
			for (let i = 1; i < index; i++) {
				previous = current;
				current = current.next;
				//console.log('index: ' + i);
			};

			//console.log('end insertAt.');
			newNode.next = current;
			previous.next = newNode;

		};
		this.size++;
	};

	removeFrom(index) {

		if (index < 0 || index >= this.size) {
			return null;
		};

		let currentNode = this.head;
		let previousNode = null;
		//console.log(typeof(index), index);
		if (index == 0) {
			this.head = currentNode.next;
		} else {
			for (let i = 0; i < index; i++) {
				previousNode = currentNode;
				currentNode = currentNode.next;
				//console.log('index: ' + i);
			};
			previousNode.next = currentNode.next;
		};

		this.size--;
		return currentNode.data;
	};
	
	removeData(data) {
		let currentNode = this.head;
		let previousNode = null;
		
		//console.log('data: '+ data +'  head: '+currentNode.data);

		while (currentNode != null) {
			// data found it:
			if (currentNode.data == data) {
				// the data is in the head?
				if (previousNode === null) {
					this.head = currentNode.next;
					this.size--;
					//console.log('Data found it::: Node.value: '+currentNode.data+', data: '+ data);
					return currentNode.data;
				} else {
					// pass the node current
					previousNode.next = currentNode.next;
					this.size--;
					//console.log('Data found it::: Node.value: '+currentNode.data+', data: '+ data);
					return currentNode.data;
				};

			};

			// Data not found, next node
			previousNode = currentNode;
			currentNode = currentNode.next;
		};
		//console.log('Data not found.');
		return null;
	};
	
	isEmpty() {
		if(this.size === 0){
			return true;
		} else {
			return false;
		};
	};

	getSize() {
		return this.size;
	};

	print() {
		let currentNode = this.head;
		let result = '[';

		while (currentNode) {
			result += currentNode.data;
			if (currentNode.next != null) {
				result += ' -> ';
			}
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
let removeFromLinkedList = document.getElementById('aaa');
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
	const data = addDataAtLinkedList.value;
	
	index = parseInt(index);
	//console.log('index value:::' + index);
	
	if (index < 0 || index > linkedList.getSize()) {
		addAtLinkedList.value = '';
		addDataAtLinkedList.value = 'Error: stack overflow.';
		return;
	};
	
	
	//console.log('index: '+ index +', data: '+ data);
	linkedList.insertAt(index, data);
	
	updateForm();
};

function btnRemoveFromLinkedList() {
	const indexRemove = removeFromLinkedList.value;
	//console.log('-> btnRemoveFromLinkedList(), indexRemove.value: '+ indexRemove);
	const dataRemoved = linkedList.removeFrom(indexRemove);
	
	updateForm();
};

function btnRemoveDataLinkedList() {
	const data = removeDataLinkedList;
	
	if (data.value == '') {
		return;
	} else {
		//console.log('data value:::'+ data.value);
		const dataRemoved = linkedList.removeData(data.value);
		updateForm();
	};
};

function updateForm() {
	const result = linkedList.print();
	currentLinkedList.value = result;
	addLinkedList.value = '';
	
	addAtLinkedList.value = '';

	addDataAtLinkedList.value = '';
	
	removeFromLinkedList.value = '';
	
	removeDataLinkedList.value = '';
	
	const size = linkedList.getSize();
	outputSizeLinkedList.value = size;
	
	const isEmpty = linkedList.isEmpty();
	outputEmptyLinkedList.value = isEmpty;
};

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
});

removeDataLinkedList.addEventListener('keydown', ({key}) => {
	if (key === "Enter") {
		btnRemoveDataLinkedList();
	};
});



// Create an Object
const linkedList = new LinkedList();

/*
console.log('Process LinkedList Starting.');

linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
console.log(linkedList.print());
console.log('Inserting:');
linkedList.insertAt(0,'O');
linkedList.insertAt(1,'a');
linkedList.insertAt(3,'b')
linkedList.insertAt(5,'c');
linkedList.insertAt(7,'c');
console.log(linkedList.print());

console.log('Remove from: index 0');
linkedList.removeFrom(0);
//console.log('index 2');
linkedList.removeFrom(1);
//console.log('last index');
linkedList.removeFrom(0);
console.log(linkedList.print());

console.log('Removing data: (b, 3, c, x)');
linkedList.removeData('3');
linkedList.removeData('b');
linkedList.removeData('c');
linkedList.removeData('x');
console.log(linkedList.print());

console.log('Process LinkedList Finished.');
*/