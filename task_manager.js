let tasks = [];

function addTask(task) {
  tasks.push(task);
  return tasks;
}

function listTasks() {
  return tasks;
}

function deleteTask(index) {
  if (index < 0 || index >= tasks.length) {
    return false;
  }
  tasks.splice(index, 1);
  return true;
}

export { addTask, listTasks, deleteTask };
