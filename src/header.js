import {appendToBody } from './append.js';

const headerTitle  = () =>{
    const title = document.createElement('h1');
    title.classList.add('headerTitle');
    title.textContent = 'To-Do';

    return title;
}//creates a header title

const header = () => {
    const title = headerTitle();

    const headerContainer = document.createElement('header');
    headerContainer.classList.add('header');

    headerAppend(headerContainer, title);//appends elements to the header

    return headerContainer;
}//creates a container header that holds title 

const headerAppend = (head, element) => {
    head.appendChild(element);
}///appends elements to the header


appendToBody(header());