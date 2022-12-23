/** Class Node */
/*class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    };
};*/


class SimplyLinkedCircularList {
    constructor() {
        // head is a Node
        // tail is a Node
        this.head = null;
        this.size = 0;
        this.tail = null;
    };

    add(data) {
		//Create a node with data 
		const newNode = new Node(data, null);

		// if this list is empty
		if (!this.head) {
			// the head will be the newNode
			this.head = newNode;
            
            //tail
            this.tail = newNode;
		} else {
			let current = this.head;// current is a Node
			// traverses the entire list up to the Node.next == null
			while (current.next) {
				current = current.next;
			};
			current.next = newNode;

            //last node - tail
            this.tail = newNode;

		};
		this.size++;

        console.log('head:'+ this.head.data +', tail:'+ this.tail.data);
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

            //last node point to this newNode
            this.tail.next = newNode
            //console.log('index:0  head:'+ this.head.data +', tail:'+ this.tail.data);    
        } else if (index == this.size) {
            this.tail.next = newNode;
            newNode.next = this.head;

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
        //console.log('head:'+ this.head.data +', tail:'+ this.tail.data);
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

            //last node point to this newNode
            for (let i = 0; i < this.size; i++) {
                previous = current;
                current = current.next;
            }
            // current is the last node:
            current.next = this.head;

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
        let i = 0;
		while (i < this.size) {
			// data found it:
			if (currentNode.data == data) {
				// the data is in the head?
				if (previousNode === null) {
					this.head = currentNode.next;

                    // get the last node



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
            i++;
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
        //console.log('printing:');
		let currentNode = this.head;
		let result = '[ START -> ';
        let i = 0;
		while (i < this.size) {
			result += currentNode.data + ' -> ';
			currentNode = currentNode.next;
            i++;
		};

		result += ' START ]';
		return result;
	};
};

console.log('SLCL Start');

const simplyLinkedCircularList = new SimplyLinkedCircularList();

simplyLinkedCircularList.add(1);
simplyLinkedCircularList.add(2);
simplyLinkedCircularList.add(3);


simplyLinkedCircularList.insertAt(0,'a');
console.log(simplyLinkedCircularList.print());
simplyLinkedCircularList.insertAt(1,'b');
console.log(simplyLinkedCircularList.print());
simplyLinkedCircularList.insertAt(2,'c');
console.log(simplyLinkedCircularList.print());
simplyLinkedCircularList.insertAt(6,'X');
console.log(simplyLinkedCircularList.print());


console.log('SLCL Finished');