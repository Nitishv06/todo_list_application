const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', addTask);
taskList.addEventListener('click', toggleOrDeleteTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span>${taskText}</span>
        <button>Delete</button>
    `;

    taskList.appendChild(listItem);
    taskInput.value = '';
}

function toggleOrDeleteTask(event) {
    const target = event.target;
    if (target.tagName === 'SPAN') {
        target.parentNode.classList.toggle('completed');
    } else if (target.tagName === 'BUTTON') {
        target.parentNode.remove();
    }
}
