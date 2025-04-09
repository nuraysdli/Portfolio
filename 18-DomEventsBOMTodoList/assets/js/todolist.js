document.addEventListener("DOMContentLoaded", function () {
    const todoList = document.querySelector(".list-group");
    const addButton = document.createElement("button");
    const clearAllButton = document.createElement("button");
    
    addButton.textContent = "Add Todo";
    addButton.classList.add("btn", "btn-primary", "m-2");
    document.body.insertBefore(addButton, todoList);
    
    clearAllButton.textContent = "Clear All";
    clearAllButton.classList.add("btn", "btn-danger", "m-2");
    document.body.insertBefore(clearAllButton, todoList.nextSibling);

    function updateTodoNumbers() {
        const todos = document.querySelectorAll(".list-group-item");
        todos.forEach((todo, index) => {
            todo.querySelector(".todo-number").textContent = `${index + 1}.`;
        });
    }

    function createTodo(text = "New Todo", checked = false) {
        const li = document.createElement("li");
        li.classList.add("list-group-item", "d-flex", "align-items-center");
        
        const span = document.createElement("span");
        span.classList.add("todo-number", "me-2");
        
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("form-check-input", "me-2");
        checkbox.checked = checked;
        
        const label = document.createElement("span");
        label.textContent = text;
        label.classList.add("flex-grow-1");
        
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("btn", "btn-warning", "btn-sm", "ms-2");

        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                label.style.textDecoration = "line-through";
                li.style.backgroundColor = "#d4edda";
            } else {
                label.style.textDecoration = "none";
                li.style.backgroundColor = "#f8d7da";
            }
        });

        editButton.addEventListener("click", function () {
            const newText = prompt("Edit your todo:", label.textContent);
            if (newText) label.textContent = newText;
        });

        li.appendChild(span);
        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(editButton);
        todoList.appendChild(li);
        
        checkbox.dispatchEvent(new Event("change"));
        updateTodoNumbers();
    }
    
    addButton.addEventListener("click", function () {
        createTodo();
    });
    
    clearAllButton.addEventListener("click", function () {
        todoList.innerHTML = "";
    });
    
    updateTodoNumbers();
});
