document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("task-form");
    const taskList = document.getElementById("task-list");
  
    form.addEventListener("submit", function(e) {
      e.preventDefault(); 
  
      const taskDescription = document.getElementById("task-input").value.trim();
      const dueDate = document.getElementById("date-input").value;
  
      if (taskDescription && dueDate) {
        const taskElement = document.createElement("div");
        taskElement.classList.add("task-item");
        taskElement.textContent = `${taskDescription} - Due: ${dueDate}`;

        taskList.appendChild(taskElement);

        form.reset();
      }
    });
  });
  