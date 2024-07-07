// get dom elements
const todoForm = document.querySelector<HTMLFormElement>('.todo-form')!;
const todoInput = document.querySelector<HTMLInputElement>('.todo-input');
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

    if (todoInput) {
        console.log(todoInput.value);

        todoInput.value = "";
    }
    alert("Please enter the task");
    return;
}
todoForm.addEventListener('submit', createTask)