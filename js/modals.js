const openModalQueue = document.getElementById("informationQueue");
const modalQueue = document.getElementById("modalQueue");
const closeButton = document.querySelector(".close");

openModalQueue.addEventListener("click", function() {
  modalQueue.style.display = "block";
});

closeButton.addEventListener("click", function() {
  modalQueue.style.display = "none";
});




const openModalStack = document.getElementById("informationStack");
const modalStack = document.getElementById("modalStack");
const closeStack = document.getElementById("closeStack");

openModalStack.addEventListener("click", function() {
  modalStack.style.display = "block";
});

closeStack.addEventListener("click", function() {
  modalStack.style.display = "none";
});


// LinkedList

const openModalLinkedList = document.getElementById("informationLinkedList");
const modalLinkedList = document.getElementById("modalLinkedList");
const closeLinkedList = document.getElementById("closeLinkedList");

openModalLinkedList.addEventListener("click", function() {
  modalLinkedList.style.display = "block";
});

closeLinkedList.addEventListener("click", function() {
  modalLinkedList.style.display = "none";
});


// simplyLinkedCircularList

const openModalSimplyLinkedCircularList = document.getElementById("informationSimplyLinkedCircularList");
const modalSimplyLinkedCircularList = document.getElementById("modalSimplyLinkedCircularList");
const closeSimplyLinkedCircularList = document.getElementById("closeSimplyLinkedCircularList");

openModalSimplyLinkedCircularList.addEventListener("click", function() {
  modalSimplyLinkedCircularList.style.display = "block";
});

closeSimplyLinkedCircularList.addEventListener("click", function() {
  modalSimplyLinkedCircularList.style.display = "none";
});


// Dictionary

const openModalDictionary = document.getElementById("informationDictionary");
const modalDictionary = document.getElementById("modalDictionary");
const closeDictionary = document.getElementById("closeDictionary");

openModalDictionary.addEventListener("click", function() {
  modalDictionary.style.display = "block";
});

closeDictionary.addEventListener("click", function() {
  modalDictionary.style.display = "none";
});