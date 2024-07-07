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
    if (todoInput) {
        console.log(todoInput.value);
        todoInput.value = "";
    }
    alert("Please enter the task");
    return;
}
todoForm.addEventListener('submit', createTask);
