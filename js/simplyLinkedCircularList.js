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
		const newNode = new Node(data, this.head);
        
        this.tail = newNode;


		// if this list is empty
		if (!this.head) {
			// the head will be the newNode
			this.head = newNode;
            
            //tail
            this.tail = newNode;
		} else {
			let current = this.head;// current is a Node
			
            // traverses the entire list up to the list
            let i = 0
			while (i <= this.size) {
				current = current.next;
                i++;
			};
			current.next = newNode;

            
		};
		this.size++;

        console.log('head:'+ this.head.data +', tail:'+ this.tail.data, this.tail.next);
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
        } else {
			for (let i = 1; i < index; i++) {
				previous = current;
				current = current.next;
				//console.log('index: ' + i);
			};

            if (index == this.size) {
                // if the index is the last, this node points to head, and the tail points to this new node
                newNode.next = this.head;
                previous.next = newNode;

                this.tail = newNode;
                //console.log('new tail.');
                
            } else {
                //console.log('end insertAt.');
                newNode.next = current;
                previous.next = newNode;
            }
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
            // the node head now is the 2nd node
			this.head = currentNode.next;
            
            //last node point to 2nd Node
            this.tail.next = this.head;
            //console.log('head removed. tail{data: '+this.tail.data+', next:'+this.tail.next.data+'}');
            
        } else {
            let i = 0;
			for ( i = 0; i < index; i++) {
				previousNode = currentNode;
				currentNode = currentNode.next;
				//console.log('index: ' + i);
			};
            if (i == this.size) {
                // if index is the last, previous node is point to head
                previousNode.next = this.head;
            } else {
                previousNode.next = currentNode.next;
            }
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
                    // get the last node and points to the 2nd node
                    this.tail.next = this.head.next
                    // the head is the 2nd node
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

    getNextNode(nodeData) {
        
        let nodeFound = null;
        let currentNode = this.head;
        
        let i = 0;
        while (i < this.size) {
            // data found it:
            if (currentNode.data == nodeData) {
                nodeFound = currentNode;
            } else {
                currentNode = currentNode.next;
            };
            i++;
        };
            
        
        if (nodeFound != null) {
            const nextNode = nodeFound.next;
            //console.log('node '+ nodeData +' next found it: '+ nextNode.data);
            return nextNode.data;
        } else {
            //console.log('node '+ nodeData +' NOT found it.');
            return 'Node NOT found it.';
        };
    };
      

	print() {
        //console.log('printing:');
		let currentNode = this.head;
		let result = '[ * -> ';
        let i = 0;
		while (i < this.size) {
			result += currentNode.data + ' -> ';
			currentNode = currentNode.next;
            i++;
		};

		result += ' * ]';
		return result;
	};
};


// Control DOM

let currentSimplyLinkedCircularList = document.getElementById('currentSimplyLinkedCircularList');
let currentSimplyLinkedCircularListData = document.getElementById('currentSimplyLinkedCircularListData');
let addSimplyLinkedCircularList = document.getElementById('addSimplyLinkedCircularList');
let addAtSimplyLinkedCircularList = document.getElementById('addAtSimplyLinkedCircularList');
let addDataAtSimplyLinkedCircularList = document.getElementById('addDataAtSimplyLinkedCircularList');
let removeFromSimplyLinkedCircularList = document.getElementById('removeFromSimplyLinkedCircularList');
let removeDataSimplyLinkedCircularList = document.getElementById('removeDataSimplyLinkedCircularList');
let outputSizeSimplyLinkedCircularList = document.getElementById('outputSizeSimplyLinkedCircularList');
let outputEmptySimplyLinkedCircularList = document.getElementById('outputEmptySimplyLinkedCircularList');


function btnSimplyLinkedCircularListNext() {
    const nextNode = currentSimplyLinkedCircularListData.value;
    if (nextNode == '') {
        currentSimplyLinkedCircularListData.value = simplyLinkedCircularList.head.data;
    } else {
        currentSimplyLinkedCircularListData.value = simplyLinkedCircularList.getNextNode(nextNode);
    };
};

function btnAddSimplyLinkedCircularList() {
    simplyLinkedCircularList.add(addSimplyLinkedCircularList.value);

    // update form
    currentSimplyLinkedCircularList.value = simplyLinkedCircularList.print();
    outputSizeSimplyLinkedCircularList.value = simplyLinkedCircularList.getSize();
    outputEmptySimplyLinkedCircularList.value = simplyLinkedCircularList.isEmpty();
};

function btnAddAtSimplyLinkedCircularList() {
    
};

function btnRemoveFromSimplyLinkedCircularList() {
    
};

function btnRemoveDataSimplyLinkedCircularList() {
    
};


const simplyLinkedCircularList = new SimplyLinkedCircularList();

/*
console.log('SLCL Start');

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

simplyLinkedCircularList.removeFrom(0);
console.log(simplyLinkedCircularList.print());
simplyLinkedCircularList.getNextNode('X');
simplyLinkedCircularList.removeFrom(0);
console.log(simplyLinkedCircularList.print());
simplyLinkedCircularList.getNextNode('X');
simplyLinkedCircularList.removeFrom(0);
console.log(simplyLinkedCircularList.print());
simplyLinkedCircularList.getNextNode('X');


simplyLinkedCircularList.getNextNode(1);
simplyLinkedCircularList.getNextNode(2);
simplyLinkedCircularList.getNextNode(3);
simplyLinkedCircularList.getNextNode('X');
simplyLinkedCircularList.getNextNode(1);
simplyLinkedCircularList.getNextNode('2');

simplyLinkedCircularList.removeData('X');
simplyLinkedCircularList.getNextNode(3);
console.log(simplyLinkedCircularList.print());

console.log('SLCL Finished');
*/