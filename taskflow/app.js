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

function deleteTask(id) {
    const index = tasks.findIndex(t => t.id === id);
    if (index !== -1) tasks.splice(index, 1);
}

function renderTasks() {
    taskListEl.innerHTML = "";

    for (const task of tasks) {
        const li = document.createElement("li");

        const titleSpan = document.createElement("span");
        titleSpan.textContent = task.done
            ? `✅ ${task.title}`
            : `⬜ ${task.title}`;

        const toggleBtn = document.createElement("button");
        toggleBtn.textContent = "Toggle";
        toggleBtn.addEventListener("click", () => {
            toggleTaskDone(task.id);
            renderTasks();
        });

        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.addEventListener("click", () => {
            deleteTask(task.id);
            renderTasks();
        });

        li.appendChild(titleSpan);
        li.appendChild(toggleBtn);
        li.appendChild(delBtn);

        taskListEl.appendChild(li);
    }
}

renderTasks()