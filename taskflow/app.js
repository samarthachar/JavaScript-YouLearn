console.log("TaskFlow loaded!");

const tasks = [
{ id: 1, title: "Install my project folder", done: true },
{ id: 2, title: "Learn JS variables", done: true },
{ id: 3, title: "Build TaskFlow UI", done: false },
{ id: 4, title: "Finish Checkpoint", done: true },

];
console.log(tasks);

function printTasks(taskArray) {
    for (const task of taskArray) {
        if (task.done === true) {
            console.log("[DONE]", task.title);
        } else {
            console.log("[TODO]", task.title);
        }
    }
}
printTasks(tasks);

function addTask(title) {
    const newTask = {
        id: Date.now(),
        title: title,
        done: false
    };
    tasks.push(newTask);
    return newTask;
}


function toggleTaskDone(id) {
    for (const task of tasks) {
        if (task.id === id) {
            task.done = !task.done;
            return task;
        }
    }
    return null;
}

function getDoneTasks() {
    return tasks.filter(t => t.done === true);
}

function findTaskById(id) {
    return tasks.find(t => t.id === id);
}

function getTitles() {
    return tasks.map(t => t.title);
}

console.log(getTitles());
console.log(getDoneTasks());
console.log(findTaskById(1));

const taskListEl = document.querySelector("#taskList");
const taskInputEl = document.querySelector("#taskInput");
const addBtnEl = document.querySelector("#addBtn");

function renderTasks() {
    taskListEl.innerHTML = "";
    for (const task of tasks) {
        const li = document.createElement("li");
            li.textContent = task.done ? `✅ ${task.title}` : `⬜ ${task.title}`;
            taskListEl.appendChild(li);
        }
    }
    
renderTasks();