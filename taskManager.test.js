import { addTask, listTasks, deleteTask } from './taskManager.js';

test('adds task', () => {
  addTask('Learn Docker');
  expect(listTasks()).toContain('Learn Docker');
});

test('deletes task', () => {
  addTask('Temp Task');
  const result = deleteTask(0);
  expect(result).toBe(true);
});
