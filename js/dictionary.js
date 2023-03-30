
class Dictionary{
    constructor() {
        this.items = {
            'javascript': 'JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.',
            'python': 'Python is a programming language that lets you work more quickly and integrate your systems more effectively.',
            'c#': 'c# is a modern, object-based, type-safe programming language.',
        };
        this.size = 3;
    };



    print() {
        let result = '';
        if (this.getSize() === 0) {
            return null;
        } else {
            //console.log(this.items);
            for (const [key, value] of Object.entries(this.items)) {
                //console.log(`${key} : ${value}`);
                result += `${key} : ${value}\n`;
            };
        };

        currentDictionary.value = result;
        outputSizeDictionary.value = this.getSize();
        outputEmptyDictionary.value = this.isEmpty();

    };

    newItem(key, value){
        this.items[key] = value;
        this.size++;
        return;
    };

    updateItem(key, value){
        this.items[key] = value;
        //console.log("updated: " +this.items[key]);
        return;
    }

    deleteItem(key){
        delete this.items[key];
        this.size--;
        return;
    }

    getSize() {
        return this.size;
    };

    isEmpty() {
        return this.size == 0;
    };

};


// inputs
let addKeyToSearch = document.getElementById('addKeyToSearch');
let addKey = document.getElementById('addKey');
let addValue = document.getElementById('addValue');
let updateKey = document.getElementById('updateKey');
let updateValue = document.getElementById('updateValue');
let removeKey = document.getElementById('removeKey');

// outputs
let currentDictionary = document.getElementById('currentDictionary');
let valueSearched = document.getElementById('valueSearched');
let outputSizeDictionary = document.getElementById('outputSizeDictionary');
let outputEmptyDictionary = document.getElementById('outputEmptyDictionary');


function btnSearchObjectInDictionary() {
    let key = addKeyToSearch.value.toLowerCase();

    valueSearched.value = '';

    if (key === '') {
        valueSearched.value = 'Error: Empty key.';
        return;
    };

    if (dictionary.items.hasOwnProperty(key)) {
        //console.log(`to search: ${key}, dictionary: ${dictionary.items[key]}`);
        valueSearched.value = dictionary.items[key];
    } else {
        valueSearched.value = `This key don't exist in the dictionary.`;
    };
    dictionary.print();
};

function btnAddObjectInDictionary() {
    let newKey = addKey.value.toLowerCase();
    let newValue = addValue.value.toLowerCase();


    if (newKey === '') {
        newKey.value = 'Error: empty key.';
        return;
    };
    if (newValue === '') {
        newValue.value = 'Error: empty value.';
        return;
    };

    if (dictionary.items.hasOwnProperty(newKey)) {
        //console.log(`to search: ${key}, dictionary: ${dictionary.items[key]}`);
        addKey.value = 'Error: this key already exist.';
    } else {
        dictionary.newItem(newKey, newValue);
        dictionary.print();
    };

    addKey.value = '';
    addValue.value = '';

    dictionary.print();
    return;
};


function btnUpdateObjectInDictionary() {
    let updateKeyValue = updateKey.value.toLowerCase();
    let updateValueValue = updateValue.value.toLowerCase();


    if (updateKeyValue === '') {
        updateKey.value = 'Error: empty key.';
        return;
    };
    if (updateValueValue === '') {
        updateValue.value = 'Error: empty value.';
        return;
    };

    if (dictionary.items.hasOwnProperty(updateKey)) {
        //console.log(`to search: ${key}, dictionary: ${dictionary.items[key]}`);
        dictionary.size++;
    };
    
    dictionary.updateItem(updateKeyValue, updateValueValue);
    dictionary.print();
    updateKey.value = '';
    updateValue.value = '';
    return;
};

function btnRemoveKey() {
    let key = removeKey.value.toLowerCase();
    if (key === '') {
        return;
    };

    console.log(dictionary.items);
    if (dictionary.items.hasOwnProperty(key)) {
        dictionary.deleteItem(key);
    } else {
        removeKey.value = 'Error: Item not found.'
    }
    dictionary.print();
}




const dictionary = new Dictionary();

dictionary.print();


addKeyToSearch.addEventListener('keydown', ({key}) => {
    if (key === "Enter") {
        btnSearchObjectInDictionary();
    };
});

addKey.addEventListener('keydown', ({key}) => {
    if (key === "Enter") {
        btnAddObjectInDictionary();
    };
});

addValue.addEventListener('keydown', ({key}) => {
    if (key === "Enter") {
        btnAddObjectInDictionary();
    };
});

updateKey.addEventListener('keydown', ({key}) => {
    if (key === "Enter") {
        btnUpdateObjectInDictionary();
    };
});

updateValue.addEventListener('keydown', ({key}) => {
    if (key === "Enter") {
        btnUpdateObjectInDictionary();
    };
});

removeKey.addEventListener('keydown', ({key}) => {
    if (key === "Enter") {
        btnRemoveKey();
    };
});

removeKey.addEventListener('click', ({key}) => {
    removeKey.value = '';
});