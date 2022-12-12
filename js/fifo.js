// FIFO
// enqueue & dequeue
class Queue {
	constructor() {
		this.items = {};
		this.front = 0;
		this.end = 0;
	};

	enqueue(data) {
		// add the element data at the end:
		this.items[this.end] = data;
		this.end++;
	};

	dequeue() {
		// check if the queue is empty
		if (this.front === this.end) {
			return null;
		}

		// delete the first value in the Queue
		const data = this.items[this.front];
		delete this.items[this.front];
		this.front++;
		return data;
	}

	getSize() {
		return this.end - this.front;
	}

	isEmpty() {
		if (this.getSize() === 0) {
			return true;
		} else {
			return false;
		}
	}

	peek() {
		if (this.getSize() === 0) {
			return null;
		} else {
			return this.items[this.front];
		}
	}

	print() {
		if (this.getSize() === 0) {
			return null;
		} else {
			let result = '' 
			for (let index = this.front; index < this.end; index++) {
				result += this.items[index] + ', ';
				
			}
			
			return result;
		}
	}
}


// input
let enqueueData = document.getElementById('enqueueInput');

// outputs
let outputQueue = document.getElementById('outputQueue');
let dequeueOutput = document.getElementById('dequeueOutput');
let queueSize = document.getElementById('queueSize');
let queueEmpty = document.getElementById('queueEmpty');
let queuePeek = document.getElementById('queuePeek');


function btnEnqueueInput() {
	let data = enqueueData.value;

	if (data === '') {
		return;
	}
	queue.enqueue(data);

	enqueueData.value = '';

	let size = queue.getSize();
	queueSize.value = size;

	let isEmpty = queue.isEmpty();
	queueEmpty.value = isEmpty;

	let result = queue.print();
	outputQueue.value = result;
}

function btnDequeueInput() {
	let data = queue.dequeue();
	dequeueOutput.value = data;

	let size = queue.getSize();
	queueSize.value = size;

	let isEmpty = queue.isEmpty();
	queueEmpty.value = isEmpty;

	let result = queue.print();
	outputQueue.value = result;
}

function btnQueuePeek() {
	let data = queue.peek();
	queuePeek.value = data;
}

enqueueData.addEventListener('keydown', ({key}) => {
	if (key === "Enter") {
		btnEnqueueInput();
	}
});

// create a queue object
const queue = new Queue();

