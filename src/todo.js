import {appendToBody } from './append.js';
import {projectFactory} from './nav.js';
import { add, compareAsc, format } from 'date-fns';

const todoFactory = (name,description, dueDate, priority) =>{


    return{name, description,dueDate, priority};
}// todo factory that inherits from project 


const createTodoContainer = (name) => {
    const container = document.createElement('div');
    container.classList.add('todoContainer');
    container.setAttribute('id',name);   
    addTodoList(container);
    return container;
}//creates a container for todo elements


const addTaskObjectBtn = () => {
    const addTask = document.createElement('button');
    addTask.classList.add('addTask');
    addTask.textContent = '\u002B';
    addTask.addEventListener('click', addActive);
    return addTask;
   
}
const todos = [];

const addTodoList = (container) => {
    todos.push(container)
}

const searchTodoList = (id) => {
    todos.forEach(todo => {
      
        if(todo.getAttribute('id') === id)
        { 
             console.log(todo.getAttribute('id'))
             const body = document.querySelector('.content');
            
             body.removeChild(body.lastChild);
            appendToBody(todo);
        }
    })
}

const appendtoToDoContainer = (container,element) => {

    container.appendChild(element);

}




const todoForm = () =>{
    const form = document.createElement('div');
    form.classList.add('todoForm');
    
    const taskInput = document.createElement('input');
    taskInput.setAttribute('type', 'text');
    taskInput.setAttribute('placeholder', 'Task Name');
    taskInput.classList.add('taskInput');
    form.appendChild(taskInput);

    const description = document.createElement('input');
    description.setAttribute('type', 'text');
    description.classList.add('taskDescriptionInput');
    description.setAttribute('placeholder', 'Description');
    form.appendChild(description);

    const taskDueDate = document.createElement('input');
    taskDueDate.setAttribute('type', 'date');
    taskDueDate.classList.add('taskDueDateInput');
    form.appendChild(taskDueDate);

    const getProjectPriority = document.createElement('select');
    getProjectPriority.setAttribute('id', 'taskPriority');
    getProjectPriority.setAttribute('name', 'taskPriority');
    form.appendChild(getProjectPriority);

    const selectRed = document.createElement('option');
    selectRed.setAttribute('value', 'red');
    selectRed.classList.add('red');
    selectRed.textContent = 'Red'
    getProjectPriority.appendChild(selectRed);

    const selectOrange = document.createElement('option');
    selectOrange.setAttribute('value', 'orange');
    selectOrange.setAttribute('class', 'orange');
    selectOrange.textContent = 'Orange'
    getProjectPriority.appendChild(selectOrange);

    const selectGreen = document.createElement('option');
    selectGreen.setAttribute('value', 'green');
    selectGreen.setAttribute('class', 'green');
    selectGreen.textContent = 'Green'
    getProjectPriority.appendChild(selectGreen);

    const addTaskBtnContainer = document.createElement('div');
    addTaskBtnContainer.classList.add('addTaskBtnContainer');
    form.appendChild(addTaskBtnContainer);

    const addBtn = document.createElement('button');
    addBtn.classList.add('addTaskBtn');
    addBtn.textContent = 'Add'
    addTaskBtnContainer.appendChild(addBtn);
    addBtn.addEventListener('click',() => {
        createTaskDom();
        removeActive();
    })

    const cancelTaskAddBtn = document.createElement('button');
    cancelTaskAddBtn.classList.add('cancelTaskAddBtn');
    cancelTaskAddBtn.textContent = 'Cancel'
    addTaskBtnContainer.appendChild(cancelTaskAddBtn);
    cancelTaskAddBtn.addEventListener('click', removeActive)

    return form;

}

export{
    createTodoContainer
}

const addActive = () => {
    const form = document.querySelector('.todoForm');
    form.classList.add('active');
}



const removeActive = () => {
    const form = document.querySelector('.todoForm');
    document.querySelector('.taskInput').value = '';
    document.querySelector('.taskDescriptionInput').value = '';
    document.querySelector('.taskDueDateInput').value = '';
    form.classList.remove('active');
}



const createTaskOject = () => {
    const taskName = document.querySelector('.taskInput').value;
    const taskDescription = document.querySelector('.taskDescriptionInput').value;
    const taskDueDate = document.querySelector('.taskDueDateInput').value;
    const taskPriority = document.querySelector('#taskPriority').value;

    const task = todoFactory(taskName,taskDescription,taskDueDate,taskPriority);

    return task;
}

const createTaskDom = () => {
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('taskContainer');

    const task = createTaskOject();

    const taskName = document.createElement('p');
    taskName.classList.add('taskName');
    taskName.textContent = task.name;
    taskContainer.appendChild(taskName);

    const taskDescription = document.createElement('p');
    taskDescription.classList.add('taskDescription');
    taskDescription.textContent = task.description;
    taskContainer.appendChild(taskDescription);

    const taskDueDate = document.createElement('p');
    taskDueDate.classList.add('taskDueDate');
    taskDueDate.textContent = task.dueDate;
    taskContainer.appendChild(taskDueDate);

    const taskPriority = document.createElement('p');
    taskPriority.classList.add('TaskPriority');
    if(task.priority === 'red'){
        taskPriority.classList.add('red');

    }
    else if(task.priority === 'orange'){
        taskPriority.classList.add('orange');

    }
    else{
        taskPriority.classList.add('green');
    }
    taskContainer.appendChild(taskPriority);

    const deleteTaskBtn = document.createElement('button');
    deleteTaskBtn.classList.add('deleteTask');
    deleteTaskBtn.textContent = 'X';
    deleteTaskBtn.addEventListener('click', deleteTask)
    taskContainer.appendChild(deleteTaskBtn);

    const todoContainer = document.querySelector('.todoContainer')
    const form = document.querySelector('.todoForm')

    todoContainer.insertBefore(taskContainer, form);

}


const deleteTask = () => {
    const taskContainer = document.querySelector('.taskContainer')
    const todoContainer = document.querySelector('.todoContainer')

    todoContainer.removeChild(taskContainer);
}


const appendToDoHome = () => {
    const home = createTodoContainer('Home')
    appendToBody(home);
    appendtoToDoContainer(home,todoForm());
    appendtoToDoContainer(home,addTaskObjectBtn());

}

const appendCreatedTodo = (id) => {
     const container = createTodoContainer(id);
    appendtoToDoContainer(container,todoForm());
    appendtoToDoContainer(container,addTaskObjectBtn());

}


const createNewProjectTodoList = (id) => {
    const todoLast = document.querySelector('.todoContainer')
   

    if(id !== todoLast.getAttribute('id')){
        appendCreatedTodo(id);
    }

}


export{
    appendToDoHome,
    createNewProjectTodoList,
    searchTodoList

}