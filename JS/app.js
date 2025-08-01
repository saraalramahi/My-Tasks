
document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.querySelector("button");
  const taskInput = document.getElementById("taskName");
  const taskList = document.querySelector("table");

  
  addButton.addEventListener("click", () => {
    const taskName = taskInput.value.trim();
    if (taskName === "") {
      alert("Write A Task");
      return;
    }

    
    const newRow = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = taskName;

    const statusCell = document.createElement("td");
    statusCell.textContent = "Pending";

    newRow.appendChild(nameCell);
    newRow.appendChild(statusCell);

    taskList.appendChild(newRow);

 
    taskInput.value = "";
  });
});