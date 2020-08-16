const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

  const TODOS_LS = "toDos";
  
  let toDos = [];

  function deleteToDo(event) {
    // console.dir(event.target); 이 값을 통해 할 수 있는 모든 액션을 찾을 수 있다.
    // console.log(event.target.parentNode); 부모 DOM에 접근하는 법.

    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanTodos = toDos.filter(function(toDo) {
      return toDo.id !== parseInt(li.id);
    });
    console.log(cleanTodos);
    toDos = cleanTodos;
    saveToDos();
  }

  function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
  }

  function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    li.classList.add(SHOWING_CN);
    toDoList.appendChild(li);
    const toDoObj = {
      text,
      id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
  }

  function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = '';
  }

  function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
      const parsedToDos = JSON.parse(loadedToDos);
      parsedToDos.forEach((toDo) => {
        paintToDo(toDo.text);
      });
    }
  }

  function init() {
    loadToDos();
    toDoForm.classList.add(SHOWING_CN);
    toDoForm.addEventListener("submit", handleSubmit);
  }

  init();
