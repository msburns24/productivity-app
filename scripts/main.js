let newProjectID = 2;

function newElement(selector) {
  let elClass = "";
  let elID = "";

  if (selector.includes('.')) {
    const classArray = selector.split(".");
    elClass = classArray[1];
    selector = classArray[0];
  } 
  if (selector.includes('#')) {
    const classArray = selector.split("#");
    elID = classArray[1];
    selector = classArray[0];
  }

  const newEl = document.createElement(selector);
  if (elClass) newEl.classList.add(elClass);
  if (elID) newEl.id = elID;
  
  return newEl;
}

function addProject(e) {
  if (!(e.key == "Enter" && e.target.value)) return;

  const prjList = document.querySelector('.projects-list');
  const newProject = createProject(e.target.value);
  prjList.appendChild(newProject);
  e.target.value = "";

  function createProject(title) {
    // Create project div, add class & ID
    const newPrjDiv = newElement('div.project');
    newPrjDiv.id = "prj-" + newProjectID.toString();

    const newPrjTitle = createProjectTitle(title, newProjectID);
    newPrjDiv.appendChild(newPrjTitle);

    // Add blank task list
    const taskList = createTaskList();
    newPrjDiv.appendChild(taskList);

    // Return to main function
    newProjectID++; // Iterate to next ID for next new project
    return newPrjDiv;
  }

  function createProjectTitle(title, prjID) {
    const newPrjTitle = newElement('div.prj-title');

    const deleteBtn = newElement('img.delete-project');
    deleteBtn.setAttribute('src', './img/delete.svg');
    deleteBtn.id = "del-btn-" + prjID.toString();
    deleteBtn.addEventListener('click', deleteProject);
    newPrjTitle.appendChild(deleteBtn);

    newPrjTitleH3 = document.createElement('h3');
    newPrjTitleH3.textContent = title;
    newPrjTitle.appendChild(newPrjTitleH3);

    return newPrjTitle;
  }

  function createTaskList() {
    // Create element, add class
    const newPrjTaskList = newElement('div.prj-tasks');

    const newUL = createProjectUL();
    newPrjTaskList.appendChild(newUL);

    return newPrjTaskList;
  }

  function createProjectUL() {
    const newUL = document.createElement('ul');
    const newLI = document.createElement('li');
    newLI.classList.add('new-task');

    const newInput = document.createElement('input');
    newInput.setAttribute('type', 'text');
    newInput.setAttribute('placeholder', 'Add a task...');
    newInput.addEventListener('keydown', addItem);

    newLI.appendChild(newInput);
    newUL.appendChild(newLI);

    return newUL;
  }
}

function deleteProject(e) {
  const projectDiv = e.target.parentNode.parentNode;
  projectDiv.remove();
}

function addItem(e) {
  if ((e.key == "Enter") && e.target.value) {
    let newLI = document.createElement('li');
    newLI.textContent = e.target.value;
    newLI.addEventListener('click', toggleComplete);
    e.target.parentNode.parentNode.insertBefore(newLI, e.target.parentNode);
    e.target.value = "";
  } 
}

function toggleComplete(e) {
  e.target.classList.toggle("task-complete"); 
}

function clearCompleteTasks(e) {
  let tasksComplete = document.querySelectorAll('.task-complete');
  Array.from(tasksComplete).map(el => el.remove());
  // console.log(tasksComplete);
}

function addFunctions() {
  // Add function to "Add Projects" button
  // const addButton = document.querySelector('.new-project');
  // addButton.addEventListener('click', addProject);
  const addPrjInput = document.querySelector('#new-project');
  addPrjInput.addEventListener('keydown', addProject);

  // Respond to enter/tab on input box
  const myInput = document.querySelector('input');
  myInput.addEventListener('keydown', addItem);

  const liList = document.querySelectorAll('li');

  for (let i=0; i<liList.length; i++) {
    if (liList[i].classList.contains('new-task')) continue;
    liList[i].addEventListener('click', toggleComplete);
  }

  const clearBtn = document.querySelector('#clear-complete');
  clearBtn.addEventListener('click', clearCompleteTasks);

  const delBtn1 = document.querySelector('#del-btn-1')
  delBtn1.addEventListener('click', deleteProject);
}


addFunctions();