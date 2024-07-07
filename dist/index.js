"use strict";
// get dom elements
const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('.todo-input');
const todoSubmit = document.querySelector('.todo-submit');
const todoList = document.querySelector('.list');
// create an array of tasks
let tasks = loadTodo();
tasks.forEach(renderTodo);
function loadTodo() {
    const storedTodo = localStorage.getItem('tasks');
    return storedTodo ? JSON.parse(storedTodo) : [];
}
function createTodo(e) {
    e.preventDefault();
    const todoValue = todoInput.value;
    if (todoValue) {
        const task = {
            description: todoInput.value,
            isComplete: false
        };
        // add task
        addTodo(task);
        // render task
        renderTodo(task);
        // update task
        updateLocalStorage();
        todoInput.value = "";
        return;
    }
    alert("Please enter the task");
}
todoForm === null || todoForm === void 0 ? void 0 : todoForm.addEventListener('submit', createTodo);
function addTodo(task) {
    tasks.push(task);
    console.log(tasks);
}
function renderTodo(task) {
    const todoItem = document.createElement('li');
    todoItem.textContent = task.description;
    const todoStatus = document.createElement('input');
    todoStatus.type = "checkbox";
    todoStatus.checked = task.isComplete;
    todoStatus.addEventListener('change', () => {
        task.isComplete = !task.isComplete;
        updateLocalStorage();
    });
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.addEventListener('click', () => removeTodo(task, todoItem));
    todoItem.appendChild(todoStatus);
    todoItem.appendChild(removeButton);
    todoList === null || todoList === void 0 ? void 0 : todoList.appendChild(todoItem);
}
function updateLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function removeTodo(task, todoItem) {
    tasks = tasks.filter(t => t !== task);
    todoItem.remove();
    updateLocalStorage();
}
