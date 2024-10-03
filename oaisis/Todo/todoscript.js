let taskId = 0;

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        return;
    }

    const taskList = document.getElementById('pendingList');
    const listItem = createTaskElement(taskText, false);
    taskList.appendChild(listItem);

    taskInput.value = ''; 
}

function createTaskElement(taskText, isCompleted) {
    const listItem = document.createElement('li');
    listItem.id = `task-${taskId++}`;
    
    const taskInfo = document.createElement('span');
    taskInfo.textContent = taskText;
    listItem.appendChild(taskInfo);

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.className = 'complete-btn';
    completeBtn.onclick = () => completeTask(listItem);
    listItem.appendChild(completeBtn);

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'edit-btn';
    editBtn.onclick = () => editTask(listItem);
    listItem.appendChild(editBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = () => deleteTask(listItem);
    listItem.appendChild(deleteBtn);

    return listItem;
}

function completeTask(listItem) {
    const completedList = document.getElementById('completedList');
    completedList.appendChild(listItem);
    listItem.querySelector('.complete-btn').remove(); 
}

function editTask(listItem) {
    const taskInfo = listItem.querySelector('span').textContent;
    const newTaskText = prompt("Edit your task:", taskInfo);
    if (newTaskText !== null) {
        listItem.querySelector('span').textContent = newTaskText;
    }
}

function deleteTask(listItem) {
    listItem.parentNode.removeChild(listItem);
}
