
// Stack in JS
class Stack {
	constructor() {
		this.top = 0;
		this.items = {};
	};

	push(data) {
		this.top++;
		this.items[this.top] = data;
	};

	pop() {
		if (this.top) {
			let deletedData = this.items[this.top];
			delete this.items[this.top];
			this.top--;
			return deletedData;
		}
	}

	getSize() {
		return this.top;
	}

	isEmpty() {
		if (this.top) {
			return true;
		} else {
			return false;
		}
	}	

	peek() {
		// is empty?
		if (this.isEmpty()) {
			return null
		}
		return this.items[this.top];
	}

	print() {
		let result = '';

		for (let i = 1; i <= this.top; i++) {
			result += this.items[i] + '  ';
		}
		return result;
	}
}

function push() {
	// body...
	let data = document.getElementById('push');
	stack.push(data.value);
	//console.log(stack);
	let result = stack.print();
	console.log(result);
}

function pop() {
	stack.pop();
	let result = stack.print();
	console.log(result);
}

// create an object
const stack = new Stack();
stack.push('first');
stack.push('second');
stack.push('third');

console.log(stack.getSize())

console.log(stack);
