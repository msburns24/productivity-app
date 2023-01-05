function addProject() {
  const prjList = document.querySelector('.projects-list');

  // Create new info
  let newPrjDiv = document.createElement('div');
  newPrjDiv.classList.add('project');
  newPrjDiv.id = 'prj-2';

  let newPrjTitle = document.createElement('div');
  newPrjTitle.classList.add('prj-title');
  newPrjTitle.textContent = "SQL";
  newPrjDiv.appendChild(newPrjTitle);

  let newPrjTaskList = document.createElement('div');
  newPrjTitle.classList.add('prj-tasks');

  let newUL = document.createElement('ul');

  let newLI = document.createElement('li');
  newLI.textContent = "Next lesson";
  newUL.appendChild(newLI);

  newLI = document.createElement('li');
  let newAddButton = document.createElement('input');
  newAddButton.setAttribute('type', 'text');
  newAddButton.setAttribute('placeholder', 'Add a task...');
  newAddButton.classList.add('new-task');
  newLI.appendChild(newAddButton);
  newUL.appendChild(newLI);

  // Bubble up
  newPrjTaskList.appendChild(newUL);
  newPrjDiv.appendChild(newPrjTaskList);
  prjList.appendChild(newPrjDiv);
}

const addButton = document.querySelector('.new-project');
addButton.addEventListener('click', addProject);