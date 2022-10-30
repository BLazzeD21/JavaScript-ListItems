// document.querySelector("#submit").onclick = function(){
    
//     /*var textInput = document.getElementById('text').value;

//     var node = document.createElement('li');
//     node.appendChild(document.createTextNode(textInput));
//     document.querySelector('ul').appendChild(node); */


//   }

const itemDB = {
    items: [
    ]
};

const itemsLIst =  document.querySelector('.add-list'),
    form = document.querySelector('form.add-item'),
    addInput = form.querySelector('.adding_input');

form.addEventListener('submit', (event) => {
    event.preventDefault(); 
    let newItem = addInput.value;
    itemDB.items.push(newItem);
    createItemList(itemDB.items, itemsLIst);

}) ; 

function createItemList(item, parent) {
    parent.innerHTML = "";

    item.forEach((itm, i) => {
        parent.innerHTML += `
        <li class="add-item">
            <input type="checkbox" name="check" class = "checkBoxEnabled"><span>${i + 1}: ${itm}</span>
            <div class="delete">
                <img src="img/trash.png" alt="trash" class = "trash">
            </div> 
        </li>
        `;

    });

    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            itemDB.items.splice(i, 1);
            createItemList(item, parent)
        });
    });

};

const checkbox = document.getElementById('myCheckbox')

checkbox.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    alert('checked');
  } else {
    alert('not checked');
  }
})


createItemList(itemDB.items, itemsLIst);