const addform = document.querySelector('.add');

const list = document.querySelector('.todos');

const searchTodo = document.querySelector('.search');

//Adding todo to list using HTML template
const addtodos = (todo) => {
const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo} </span><span>GHC 3 </span>
    <i class="far fa-trash-alt delete"></i>
</li>`;

list.innerHTML += html;
}

//Search function
const searchFunc = (item)=>{
    Array.from(list.children)
    .filter(todoitem => !todoitem.textContent.includes(item))
    .forEach((todoitem) => todoitem.classList.add('filtered'));

    Array.from(list.children)
    .filter(todoitem => todoitem.textContent.includes(item))
    .forEach((todoitem) => todoitem.classList.remove('filtered'));
};


addform.addEventListener('submit', e => {

    e.preventDefault();
    const todo = addform.add.value.toLowerCase().trim();
    //console.log(todo);
if(todo.length){
    addtodos(todo);
    addform.reset();
}

});

list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

searchTodo.addEventListener('keyup', (e) => {
e.preventDefault();
    const item = searchTodo.search.value.toLowerCase().trim();
   searchFunc(item);
});