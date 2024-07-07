// get dom elements
const todoForm = document.querySelector<HTMLFormElement>('.todo-form');
const todoInput = document.querySelector<HTMLInputElement>('.todo-input')!;
const todoSubmit = document.querySelector<HTMLButtonElement>('.todo-submit');
const todoList = document.querySelector<HTMLUListElement>('.list');

// create a type for our tasks
type Task = {
    description: string;
    isComplete: boolean;
}

// create an array of tasks
const tasks:Task[] = loadTodo();

tasks.forEach(renderTodo)

function loadTodo():Task[] {
    const storedTodo = localStorage.getItem('tasks');
    return storedTodo ? JSON.parse(storedTodo) : [];
}

function createTodo(e:SubmitEvent){
    e.preventDefault();
    const todoValue = todoInput.value;
    if (todoValue) {
        const task:Task = {
            description: todoInput.value,
            isComplete: false
        }
        // add task
        addTodo(task)
        // render task
        renderTodo(task);
        // update task
        updateLocalStorage()
        todoInput.value = "";
        return;
    }
    alert("Please enter the task");
}

todoForm?.addEventListener('submit', createTodo)

function addTodo(task: Task): void{
    tasks.push(task);
    console.log(tasks);
}

function renderTodo(task: Task): void{
    const todoItem = document.createElement('li');
    todoItem.textContent = task.description;

    const todoStatus = document.createElement('input');
    todoStatus.type = "checkbox";
    todoStatus.name = "checked";

    todoItem.appendChild(todoStatus);
    todoList?.appendChild(todoItem);
}

function updateLocalStorage():void{
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

