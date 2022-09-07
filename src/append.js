const appendToBody = (element) => {
    const body = document.querySelector('.content');

    body.appendChild(element);
}//calls function to append to div.content



export{
    appendToBody
}