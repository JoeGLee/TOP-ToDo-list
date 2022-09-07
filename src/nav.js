import {appendToBody } from './append.js';
import { createNewProjectTodoList, searchTodoList } from './todo.js';

const whoIsClicked = (project) => {
    const id = project.getAttribute('id');
    
    project.addEventListener('click', ()=>{   
        project.classList.add('clicked');
        searchTodoList(id);
        const others = document.querySelectorAll('.clicked');
        others.forEach(other => {
            if(other.textContent !== project.textContent)
            {
                other.classList.remove('clicked');
            }
        });
    })
    
}//checks for class of clicked to see who is being clicked and where the clicked element needs to move to

const nav = () =>{
    const navigation = document.createElement('nav');
    navigation.classList.add('nav');   

    return navigation;
}//creates a navigation container

const appendToNavBar = (element) => {
    const navBar = nav();

    navBar.appendChild(element)
    return navBar;
}//appends to navbar 

//------------Main Navigation (home/today/all)--------------
const navButtonsContainer = () => {
    const btnContainer = document.createElement('ul');
    btnContainer.classList.add('btnContainer');

    return btnContainer;
}//creates a ul to hold buttons

const buttons = (btnText) => {
    const homeBtnContainer = document.createElement('li');
    homeBtnContainer.classList.add('btns')
    const homeBtn = document.createElement('button')
    homeBtn.classList.add('navBtns')
    homeBtn.classList.add('todoNav')
    homeBtn.setAttribute('id',btnText);
    homeBtn.textContent = btnText;
    homeBtnContainer.appendChild(homeBtn);
    whoIsClicked(homeBtn);

    return homeBtnContainer;
}//creates a buttons and li to hold buttons

const appendBtns = () => {
    const container = navButtonsContainer();
    const homeBtn = buttons('Home');




    container.appendChild(homeBtn);


    return container;
}//appends li buttons to ul and ul to nav element



const Nav = appendBtns();
const navBar = appendToNavBar(Nav);
appendToBody(navBar);//appends navbar container to the body


//---------Projects--------

//container
const projectContainer = () => {
    const container = document.createElement('div');
    container.classList.add('projectContainer');

    return container;
}//creates a container for projects

const appendProjectContainer = (element) =>{
    const navbar = document.querySelector('.nav');

    navbar.appendChild(element);
};


const appendToProjectContainer = (element) => {
    const container = document.querySelector('.projectContainer');

    container.appendChild(element);
}


//title
const projectTitle = () =>{
    const title = document.createElement('h2');
    title.classList.add('projectTitle');
    title.textContent = 'Projects';
    return title;

}//creates title for project



const addProjectBtn = () => {
    const btn = document.createElement('button');
    btn.classList.add('addProjectBtn');
    btn.textContent = '+ Add New Projects';
    
    return btn;
}// creates a button to add projects


const projectFactory = (name,priority) => {
    return {name,priority};
}//factory function for project object

const projectTextInputs = () => {
  const getProjectName = document.createElement('input');
    getProjectName.setAttribute('type', 'text');
    getProjectName.setAttribute('id', 'name');
    getProjectName.setAttribute('placeholder', 'Project Name');

    return getProjectName;
}//input for name of project

const projectPriorityInputs = () =>{
    const getProjectPriority = document.createElement('select');
    getProjectPriority.setAttribute('id', 'priority');
    getProjectPriority.setAttribute('name', 'priority');


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

    return getProjectPriority;
}// gets the priority of the projects by color

const createForm = () => {
    const form = document.createElement('div');
    form.classList.add('projectInput');

    const submit = document.createElement('button');
    submit.classList.add('submitProject');
    submit.textContent = 'Add';

    const reset = document.createElement('button');
    reset.classList.add('resetProject');
    reset.textContent = 'cancel';
    
    form.appendChild(projectPriorityInputs());
    form.appendChild(projectTextInputs());
    form.appendChild(submit);
    form.appendChild(reset);
    return form;
}//creates a form for user input


const addProject = () => {
    const form = document.querySelector('.projectInput');
    form.classList.add('active');
}//adds class active to form

const projects = [];
const projectList = (project) =>{
    projects.push(project);
}


const createNewProject = () =>{
    const name = document.querySelector('#name').value;
    const priority = document.querySelector('#priority').value;

    const project = projectFactory(name, priority);
    projectList(project);

   const projectDom = createProjectDom(project.name, project.priority);

   const container = document.querySelector('.projectContainer')
   const btn = document.querySelector('.addProjectBtn');
   container.insertBefore(projectDom, btn) 

   return name;
}//creates an object of project with name and priority creates dom element



const createProjectDom = (name, priority) =>{
    const newProject = document.createElement('div');
    newProject.classList.add('project');


    const newProjectName = document.createElement('h3');
    newProjectName.classList.add('projectName');
    newProjectName.setAttribute('id', name);
    newProjectName.textContent = name;
    whoIsClicked(newProjectName);

    const deleteProjectButton = document.createElement('button');
    deleteProjectButton.classList.add('deleteProject');
    deleteProjectButton.textContent = '\u2715';
    deleteProjectButton.addEventListener('click',() => {
        const container = document.querySelector('.projectContainer');
        container.removeChild(newProject);

        const body = document.querySelector('.content');
        body.removeChild(body.lastChild);
        const home = document.querySelector('#Home');
        home.classList.add('clicked');
        searchTodoList('Home');
        
    })

    const newProjectPriority = document.createElement('h3');
    newProjectPriority.classList.add('projectPriority');
    if(priority === 'red'){
        newProjectPriority.classList.add('red');

    }
    else if(priority === 'orange'){
        newProjectPriority.classList.add('orange');

    }
    else{
        newProjectPriority.classList.add('green');
    }

    newProject.appendChild(newProjectPriority);
    newProject.appendChild(newProjectName);
    newProject.appendChild(deleteProjectButton);

    return newProject;
}//inserts dom elements of project on to container of project


const projectBar = () => {

    const title = projectTitle();
    appendProjectContainer(projectContainer());
    appendToProjectContainer(title);//appends title to project container

    appendToProjectContainer(addProjectBtn());
    appendToProjectContainer(createForm());


}

const closeAddProject = (form) => {
    const input = document.querySelector('#name');
    input.value = '';
    form.classList.remove('active');
}



const projectBtnEvents =() =>{

    const projectBtn = document.querySelector('.addProjectBtn');
    projectBtn.addEventListener('click', addProject);//event listener to add project

    const addBtn = document.querySelector('.submitProject');
    addBtn.addEventListener('click', () =>{

        const form = document.querySelector('.projectInput');
        const id = createNewProject();
        
        createNewProjectTodoList(id);
        closeAddProject(form);

    })

 

}


export{
    projectFactory,
    projectBtnEvents,
    projectBar
}