document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
const inputField = document.getElementById("new-task-description"); //creates the element to enter the task
const formElement = document.querySelector("form");//creates the form input
formElement.addEventListener('submit', (e) => {
let newtask = inputField.value
  
//if statement makes sure the input space is not left void
  e.preventDefault();
  if(newtask.length===0){
  alert('Task cannot be empty')
  }else{
    handleToDo(newtask)
  }
  formElement.reset()
});
  
});
  
  
function css(element, style) {
for (const property in style) 
    element.style[property] = style[property];
}

function handleToDo (newTask){
let listItem = document.createElement("li")
let btn = document.createElement('button')
  
css(btn, {
  'background-color': 'yellow',
  'color': 'red',
  'background': 'red',
'color': '#ffffff',
'padding': '6px',
'margin':'4px',
'font-size': '12px' 
});
  
btn.addEventListener('click', handleDelete)
btn.textContent = 'X Remove'
listItem.innerText = `${newTask}`;
listItem.appendChild(btn)
document.querySelector("#tasks").appendChild(listItem);
}
  
function handleDelete(e){
e.target.parentNode.remove()
}
  

