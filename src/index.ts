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
const tasks:Task[] = [];

function createTask(e:SubmitEvent){
    e.preventDefault();
    const todoValue = todoInput.value;
    if (todoValue) {
        const task:Task = {
            description: todoInput.value,
            isComplete: false
        }
        // add task
        addTask(task)
        // render task
        renderTask(task);
        // update task
        updateLocalStorage()
        todoInput.value = "";
        return;
    }
    alert("Please enter the task");
}

todoForm?.addEventListener('submit', createTask)

function addTask(task: Task): void{
    tasks.push(task);
    console.log(tasks);
}

function renderTask(task: Task): void{
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