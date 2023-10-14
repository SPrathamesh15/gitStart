var form = document.getElementById('addForm')
var itemList = document.getElementById('items')

// Form submit event
form.addEventListener('submit', addItem)

// delete event
itemList.addEventListener('click', removeItem);

// Add Item
function addItem(e){
    e.preventDefault();
    // Get Input value
    var newItem = document.getElementById('item').value;
    // create a new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item'
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    // create del button element 
    var deleteBtn = document.createElement('button');
    // Add class to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    // Append btn to li
    li.appendChild(deleteBtn);
    // create edit btn
    var editBtn = document.createElement('button');
    // add class to edit btn
    editBtn.className = 'button'
    // Append text node
    editBtn.appendChild(document.createTextNode('Edit'))
    // append btn to li
    li.appendChild(editBtn)
    // Append li to list
    itemList.appendChild(li);
}

// Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure? You want to delete this item?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
  }