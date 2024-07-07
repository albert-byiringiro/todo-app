"use strict";
// get dom elements
const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('.todo-input');
const todoSubmit = document.querySelector('.todo-submit');
const todoList = document.querySelector('.list');
// create an array of tasks
const tasks = [];
function createTask(e) {
    e.preventDefault();
    const todoValue = todoInput.value;
    if (todoValue) {
        const task = {
            description: todoInput.value,
            isComplete: false
        };
        // add task
        addTask(task);
        // render task
        renderTask(task);
        // update task
        todoInput.value = "";
        return;
    }
    alert("Please enter the task");
}
todoForm === null || todoForm === void 0 ? void 0 : todoForm.addEventListener('submit', createTask);
function addTask(task) {
    tasks.push(task);
    console.log(tasks);
}
function renderTask(task) {
    const todoItem = document.createElement('li');
    todoItem.textContent = task.description;
    const todoStatus = document.createElement('input');
    todoStatus.type = "checkbox";
    todoStatus.name = "checked";
    todoItem.appendChild(todoStatus);
    todoList === null || todoList === void 0 ? void 0 : todoList.appendChild(todoItem);
}
