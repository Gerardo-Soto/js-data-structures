
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
		console.log(this.top);
		if (this.top > 0) {
			console.log('>false');
			return false;
		} else {
			console.log('>true');
			return true;
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

		let elementOutput = document.getElementById('outputStack');
		elementOutput.value = result;
		return result;
	}
}

let data = document.getElementById('pushStack');
let size = document.getElementById('outputSize');
let isEmpty = document.getElementById('outputEmpty');
let peek = document.getElementById('outputPeek');
let pop = document.getElementById('outputPop');

function push() {
	// body...
	if (data.value == ''){
		return;
	}
	stack.push(data.value);
	//console.log(stack);
	let result = stack.print();
	size.value = stack.getSize();
	isEmpty.value = stack.isEmpty();

	//console.log(result);
	data.value = '';
	peek.value = '';
	pop.value = '';
}

function btnPop() {
	let popValue = stack.pop();
	let result = stack.print();
	if (popValue == undefined) {
		pop.value = 'Stack empty.';
		return;
	}
	pop.value = popValue;

	// update data:
	size.value = stack.getSize();
	isEmpty.value = stack.isEmpty();

	// clean inputs:
	peek.value = '';
	isEmpty.value += '';// + stack.top;
}

function btnPeek() {
	let peekValue = stack.peek();

	size.value = stack.getSize();
	//isEmpty = stack.isEmpty();
	peek.value = peekValue;
}

// create an object
const stack = new Stack();

//console.log(stack.getSize())

//console.log(stack);
