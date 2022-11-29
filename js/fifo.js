// enqueue & dequeuee
class Fifo {
	constructor() {
		this.start = 0;
		this.top = 0;
		this.items = {};
	};

	enqueue(data) {
		this.top++;
		this.items[this.top] = data;
	};

	dequeue() {
		delete this.items[0];
		this.top--;
	}

	getSize() {}

	isEmpty() {}

	peek() {}

	print() {}
}
