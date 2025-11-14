const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add Task
addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    // Toggle complete
    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    // Remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.className = "remove-btn";

    removeBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // prevents toggle when clicking delete
        li.remove();
    });

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    taskInput.value = "";
});
