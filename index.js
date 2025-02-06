/**
 * Saves the page into local storage
 */
var savePage = () => {
    // localStorage.setItem('todo-list-page', document.body.innerHTML);
}

/**
 * Loads the page from local storage
 */
var loadPage = () => {
    if (localStorage.getItem('todo-list-page') != undefined) {
        // document.body.innerHTML = localStorage.getItem('todo-list-page');
    }
}

loadPage();

var toDoList = document.getElementById('to-do-list');
var newItemInput = document.getElementById('new-item-input');
var addItemButton = document.getElementById('add-item-button');

/**
 * Adds an item to the todo list.
 * @param {*} item
 */
var addItem = (item) => {
    // create the list item element
    let id = crypto.randomUUID();

    let newItem = document.createElement('li');
    newItem.id = `item ${id}`;

    // add a checkbox to the item
    let newItemCheckbox = document.createElement('input');
    newItemCheckbox.type = 'checkbox';
    newItemCheckbox.id = `checkbox ${id}`;

    // add a label to the item
    let newItemLabel = document.createElement('label');
    newItemLabel.htmlFor = `checkbox ${id}`;
    newItemLabel.innerHTML = item;

    // add a remove button to the item
    let removeButton = document.createElement('button');
    removeButton.id = 'remove-button';
    removeButton.innerHTML = 'X';

    // When a remove button is clicked, the list item is removed
    removeButton.addEventListener('click', function () {
        document.getElementById(this.parentElement.id).remove();

        // save the to-do list in local storage
        savePage();
    });

    newItem.appendChild(newItemCheckbox);
    newItem.appendChild(newItemLabel);
    newItem.appendChild(removeButton);

    // add the li element to the list ul element
    toDoList.appendChild(newItem);
}

// When the add item button is clicked, the item in the new item input is added to the to-do list.
addItemButton.addEventListener('click', function () {
    // add the item
    addItem(newItemInput.value);

    // clear the input
    newItemInput.value = '';

    // save the to-do list in local storage
    savePage();
});