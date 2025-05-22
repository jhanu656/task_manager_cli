import chalk from 'chalk';
// const chalk = require('chalk');
import inquirer from 'inquirer';

import { addTask, listTasks, deleteTask } from './task_manager.js';

async function main() {
  while (true) {
    const answer = await inquirer.prompt({
      type: 'list',
      name: 'action',
      message: 'Choose an action',
      choices: ['Add Task', 'List Tasks', 'Delete Task', 'Exit']
    });

    if (answer.action === 'Add Task') {
      const { task } = await inquirer.prompt({
        type: 'input',
        name: 'task',
        message: 'Enter task description'
      });
      addTask(task);
      console.log(chalk.green('Task added!'));
    } else if (answer.action === 'List Tasks') {
      const tasks = listTasks();
      console.log(chalk.blue('Your tasks:'));
      tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
      });
    } else if (answer.action === 'Delete Task') {
      const { index } = await inquirer.prompt({
        type: 'input',
        name: 'index',
        message: 'Enter task number to delete'
      });
      const result = deleteTask(Number(index) - 1);
      result ? console.log(chalk.red('Task deleted!')) : console.log(chalk.red('Invalid task number!'));
    } else {
      break;
    }
  }
}

main();
