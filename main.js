// RANKING LIST START CODE

// HTML Variables
let outputEl = document.getElementById("output");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu").value;

  // Implement Menu Selection
  if (selection === "add") {
    addItem();
  } else if (selection === "remove-last") {
    removeLast();
  } else if (selection === "insert") {
    insert();
  } else if (selection === "remove-pos") {
    removePos();
  } else if (selection === "move") {
    move();
  } else if (selection === "edit") {
    edit();
  }
}

let items = [];

// Menu Option Functions
function addItem() {
  items.push(prompt("Enter an item to add to the list"));
  console.log("Added Item " + items[items.length - 1]);
}

function removeLast() {
  console.log("Remove Last");
}

function insert() {
  console.log("Insert");
}

function removePos() {
  console.log("Remove at Position");
}

function move() {
  console.log("Move");
}

function edit() {
  console.log("Edit");
}
