// ------------------ selectors ------------------
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// ------------------ functions ------------------

// add tofo list entry
const addTodo = (e) => {
  // prevent form submitting
  e.preventDefault();

  // todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // create li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  // checkmark button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = "<i class='fas fa-check'></i>";
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  // trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = "<i class='fas fa-trash'></i>";
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  // append to list
  todoList.appendChild(todoDiv);

  // clear input
  todoInput.value = "";
};

// completed and trash marker handler
const deleteTodo = (e) => {
  e.preventDefault();
  // console.log(e.target);
  const item = e.target;

  // delete todo
  if (item.classList.contains("trash-btn")) {
    const todo = item.parentElement;
    // animation
    todo.classList.add("fall");
    // add event listener
    todo.addEventListener("transitionend", () => {
      todo.remove();
    });
  }

  // checkmark
  if (item.classList.contains("complete-btn")) {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
    console.log(todo);
  }
};

// filter
function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
// function filterTodo(e) {
//   const todos = todoList.childNodes;
//   todos.forEach(function (todo) {
//     const mStyle = todo.style;
//     if (mStyle != undefined && mStyle != null) {
//       switch (e.target.value) {
//         case "all":
//           mStyle.display = "flex";
//           break;
//         case "completed":
//           if (todo.classList.contains("completed")) {
//             mStyle.display = "flex";
//           } else {
//             mStyle.display = "none";
//           }
//           break;
//       }
//     }
//   });
// }

// ------------------ event listeners ------------------
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);
filterOption.addEventListener("click", filterTodo);
