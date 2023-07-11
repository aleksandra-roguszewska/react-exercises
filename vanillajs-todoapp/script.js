const todoTextInput = document.querySelector(".todo-text-input");
const todoEntriesContainer = document.querySelector(".todo-entries-container");
const btnDarkMode = document.getElementById("btn-dark-mode");
const btnPlus = document.querySelector(".btn-plus");
const btnReset = document.querySelector(".btn-reset");

btnDarkMode.innerText = "dark mode";

btnPlus.disabled = true;

// Funkcja włącza i wyłącza darkmode poprzez dodawanie i wyłączanie klasy dark-mode w body oraz zmienia tekst w przycisku z dark mode na light mode i odwrotnie
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  if (btnDarkMode.innerText === "dark mode") {
    btnDarkMode.innerText = "light mode";
  } else {
    btnDarkMode.innerText = "dark mode";
  }
}

//Funkcja blokuje btnPlus, jeśli todoTextInput jest pusty
function disableButton() {
  if (todoTextInput.value === "") {
    btnPlus.disabled = true;
  } else {
    btnPlus.disabled = false;
  }
}

// Funkcja tworzy nowy obiekt newTodo o polach "key" i "value ",
// Dodaje stworzony obiekt do localStore
// Wywołuje funkcję addTodoToList przekazując obiekt newTodo jako argument
// Czyści wartość inputa
// Ustawia btnPlus na disabled
function addTodo() {
  if (!todoTextInput.value) {
    return;
  }
  const newTodo = { key: crypto.randomUUID(), value: todoTextInput.value };
  localStorage.setItem(newTodo.key, newTodo.value);
  addTodoToList(newTodo);
  todoTextInput.value = "";
  btnPlus.disabled = true;
}

// Funkcja tworzy nowy element na liście MY TODOS.
//1. tworzy nowe li, input i button;
//2. dodaje im odpowiednie klasy zgodne z CSS;
//3. dodaje atrybut ID  do utworzonego li (wartość id taka jak key obiektu newTodo);
//4. ustawia value inputa na tekst taki jak pole value obiektu newTodo;
//5. wstawia ikonę do buttona;
//6. dodaje elementy do DOM;
//7. dodaje nasłuchiwanie na kliknięcie do buttona i blur do inputa.

function addTodoToList(newTodo) {
  const newTodoEntry = document.createElement("li");
  const newTodoEntryText = document.createElement("input");
  const newTodoEntryBtn = document.createElement("button");
  newTodoEntry.classList.add("todo-entry");
  newTodoEntryText.classList.add("todo-entry-text-input");
  newTodoEntryBtn.classList.add("btn-minus");
  newTodoEntry.setAttribute("id", newTodo.key);
  newTodoEntryText.value = newTodo.value;
  newTodoEntryBtn.innerHTML = `
        <img class="btn-icon-minus" src="./assets/minus-solid.svg" />
  `;
  todoEntriesContainer.append(newTodoEntry);
  newTodoEntry.append(newTodoEntryText);
  newTodoEntry.append(newTodoEntryBtn);
  newTodoEntryBtn.addEventListener("click", removeTodo);
  newTodoEntryText.addEventListener("blur", modifyTodo);
}

// Funkcja usuwa rodzica currentTargetu wydarzenia oraz usuwa odpowiadający mu wpis w localStorage
function removeTodo(event) {
  event.currentTarget.parentElement.remove();
  localStorage.removeItem(event.currentTarget.parentElement.id);
}

// Funkcja nadpisuje value w localStorage z key takim jak id currentTargetu wydarzenia
function modifyTodo(event) {
  localStorage.setItem(
    event.currentTarget.parentElement.id,
    event.currentTarget.value
  );
}

// Funkcja czyści localStorage i usuwa html z todoEntriesContainer
function resetTodoList() {
  localStorage.clear();
  todoEntriesContainer.innerHTML = "";
}

//Funkcja dodaje zapisane w localStorage todo do listy MYTODOS
function addTodosFromLocalStorage() {
  for (let i = 0; i < localStorage.length; i++) {
    addTodoToList({
      key: localStorage.key(i),
      value: localStorage.getItem(localStorage.key(i)),
    });
  }
}

todoTextInput.addEventListener("input", disableButton);
btnPlus.addEventListener("click", addTodo);
btnReset.addEventListener("click", resetTodoList);
btnDarkMode.addEventListener("click", toggleDarkMode);

addTodosFromLocalStorage();
