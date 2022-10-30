const form = document.querySelector('#addForm');
const item = document.querySelector('#items');
const filter = document.querySelector('#filter');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    var newItem = document.getElementById('item').value;
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));

    var xbtn = document.createElement('button');
    xbtn.className = "btn btn-danger btn-sm float-right delete";
    xbtn.appendChild(document.createTextNode('X'));
    li.appendChild(xbtn);
    item.appendChild(li);
    newItem.value = '';
});


//var xbtn = document.querySelectorAll('delete');
item.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete'))
    {
        var li = e.target.parentElement;
        item.removeChild(li);
    }

});


















