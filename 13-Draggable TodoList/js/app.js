let $ = document;

let addbtnElem = $.getElementById("add_btn");
let modalAdd = $.getElementById("todo_form");
let bacmodalShow = $.getElementById("overlay");

let closeModalAdd = $.querySelector(".close-modal");
let addTodoBtn = $.getElementById("todo_submit");
let todoInput = $.getElementById("todo_input");

let addTodotoDiv = $.getElementById("no_status");
let status = $.querySelectorAll(".status");

let divTodo;

//hidden and show modal
function showModal() {
  modalAdd.style.top = "50%";
  bacmodalShow.style.display = "block";
}
function closeModal() {
  modalAdd.style.top = "-50%";
  bacmodalShow.style.display = "none";
}

//create modal
function addTodoHandler() {
  let valTodoInp = todoInput.value;
  if (valTodoInp == "") {
    window.alert("not value");
  } else {
    //create div
    divTodo = $.createElement("div");
    divTodo.setAttribute("class", "todo");
    divTodo.setAttribute("id", valTodoInp);
    divTodo.setAttribute("draggable", "true");

    divTodo.innerHTML = valTodoInp;

    //create span
    let spanTodo = $.createElement("span");
    spanTodo.setAttribute("class", "close");
    spanTodo.innerHTML = "×";

    //delete todo
    function delItem(e) {
      var parent = this.parentNode;
      parent.remove();
    }
    
    //draged
    function dragHandel(event) {
      event.dataTransfer.setData("elemid", event.target.id);
    }

    //appends
    divTodo.append(spanTodo);
    addTodotoDiv.append(divTodo);

    //hidden next click BTN
    modalAdd.style.top = "-50%";
    bacmodalShow.style.display = "none";

    spanTodo.addEventListener("click", delItem);
    divTodo.addEventListener("dragstart", dragHandel);
  }

  todoInput.value = "";
}
//drop
status.forEach(function (todo) {
  
    todo.addEventListener("drop", function (event) {
    let targetId = event.dataTransfer.getData("elemid");
    let targetElem = document.getElementById(targetId);

    event.target.append(targetElem);
  });

  todo.addEventListener("dragover", function (event) {
    event.preventDefault();
  });
});


addbtnElem.addEventListener("click", showModal);

closeModalAdd.addEventListener("click", closeModal);

addTodoBtn.addEventListener("click", addTodoHandler);
