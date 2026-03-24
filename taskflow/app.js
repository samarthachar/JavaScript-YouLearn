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