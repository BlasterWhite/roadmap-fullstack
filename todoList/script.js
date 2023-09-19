const taskList = document.getElementById('taskList');
const addTaskButton = document.getElementById('addTask');

addTaskButton.addEventListener('click', function (event) {
    addNewTask();
});

let tasks = localStorage.getItem('tasks');

if (tasks) {
    tasks = JSON.parse(tasks);
    tasks.forEach(function (task) {
        addTask(task);
    });
}

function addTask(task) {
    let taskRow = document.createElement('tr');
    taskRow.id = `taskRow-${task.id}`;

    let taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.checked = task.completed;
    taskCheckbox.id = `taskCheckbox-${task.id}`;
    taskCheckbox.addEventListener('change', function (event) {
        updateTask(task.id, {
            id: task.id,
            completed: event.target.checked,
            title: task.title,
        });
    });

    let taskTitle = document.createElement('input');
    taskTitle.type = 'text';
    taskTitle.value = task.title;
    taskTitle.id = `taskTitle-${task.id}`;
    taskTitle.addEventListener('keydown', function (event) {
        console.log(event.key);
        updateTask(task.id, {
            id: task.id,
            completed: task.completed,
            title: event.target.value,
        });
    });

    let taskDelete = document.createElement('button');
    taskDelete.type = 'button';
    taskDelete.innerText = 'Delete';
    taskDelete.id = `taskDelete-${task.id}`;
    taskDelete.addEventListener('click', function (event) {
        deleteTask(task.id);
    });

    let tdCheckbox = document.createElement('td');
    tdCheckbox.appendChild(taskCheckbox);

    let tdTitle = document.createElement('td');
    tdTitle.appendChild(taskTitle);

    let tdDelete = document.createElement('td');
    tdDelete.appendChild(taskDelete);

    taskRow.appendChild(tdCheckbox);
    taskRow.appendChild(tdTitle);
    taskRow.appendChild(tdDelete);

    taskList.appendChild(taskRow);
}

function updateTask(taskId, task) {
    let taskRow = document.getElementById(`taskRow-${taskId}`);
    let taskCheckbox = document.getElementById(`taskCheckbox-${taskId}`);
    let taskTitle = document.getElementById(`taskTitle-${taskId}`);

    taskCheckbox.checked = task.completed;
    taskTitle.value = task.title;

    let taskIndex = tasks.findIndex(function (task) {
        return task.id === taskId;
    });

    tasks[taskIndex] = task;

    saveTasks();
}

function addNewTask() {
    let task = {
        id: tasks[tasks.length - 1] ? tasks[tasks.length - 1].id + 1 : 1,
        completed: false,
        title: '',
    };
    tasks.push(task);
    addTask(task);
}

function deleteTask(taskId) {
    let taskRow = document.getElementById(`taskRow-${taskId}`);
    taskList.removeChild(taskRow);
}

function onTaskChange(taskId, task) {
    updateTask(taskId, task);
}

function saveTasks() {
    console.log(JSON.stringify(tasks));
    localStorage.setItem('tasks', JSON.stringify(tasks));
}