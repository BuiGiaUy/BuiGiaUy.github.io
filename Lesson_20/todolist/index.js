const saveData = () => {
  localStorage.setItem("todoList", JSON.stringify(todoList));
};

const getData = () => {
  const value = localStorage.getItem("todoList");
  if (value) {
    return JSON.parse(value);
  }
  return [];
};

let todoList = getData();

const btnAdd = document.getElementById("btn-add");
const inputEl = document.getElementById("input-todo");
const todoListEl = document.getElementById("todolist");

// CV1 : Render mảng todo ra ngoài giao diện
const renderTodoList = () => {
  todoListEl.innerHTML = ""; // Xóa hết nội dung trước khi render

  // TH1 : Không có todo trong danh sách
  if (todoList.length === 0) {
    todoListEl.insertAdjacentHTML(
      "afterbegin",
      "<li>Danh sách công việc trống</li>"
    );
    return;
  }

  // TH2 : Có todo trong danh sách
  let html = "";
  todoList.forEach((t) => {
    html += `
          <li>
              <input type="checkbox" ${
                t.status ? "checked" : ""
              } onclick="toggleStatus(${t.id})">
              <span class="${t.status ? "active" : ""}">${t.title}</span>
              <button onclick="editTodo(${t.id})">Edit</button>
              <button onclick="deleteTodo(${t.id})">Delete</button>
          </li>
      `;
  });
  todoListEl.innerHTML = html;
};

const getId = () => {
  // return Math.floor(Math.random() * (max - min) + 1) + min
  // return todoList.sort((t1, t2) => t2.id - t1.id)[0].id + 1;
  if (todoList.length === 0) return 1;
  return Math.max(...todoList.map((t) => t.id)) + 1;
};

// CV2 : Tạo Todo
const addTodo = () => {
  // B1 : Lấy nd trong input
  const title = inputEl.value;

  // B2 : Kiểm tra nd có trống hay không? Nếu trống -> alert cảnh báo
  if (title.trim().length === 0) {
    alert("Tiêu đề không được để trống");
    return;
  }

  // B3 : Tạo object tương ứng { id : , title : , status : false} (id tự động tăng)
  const newTodo = {
    id: getId(),
    title: title,
    status: false,
  };
  // B4 : Thêm object vào mảng todoList ban đầu và clear dữ liệu trong ô input
  todoList.push(newTodo);
  inputEl.value = "";

  // B5 : Render lại giao diện sau khi thêm
  saveData();
  renderTodoList();
};
btnAdd.addEventListener("click", addTodo);

// CV3 : Xóa Todo
const deleteTodo = (id) => {
  console.log(id);
  const isConfirm = window.confirm("Bạn có muốn xóa không");
  if (!isConfirm) return;
  // B1 : Xóa todo có id tương ứng trong mảng todoList
  // Xóa như thế nào : splice -> for + if || findIndex, filter
  // C1 : findIndex
  // let index = todoList.findIndex(t => t.id === id);
  // todoList.splice(index, 1);

  // C2 : filter
  todoList = todoList.filter((t) => t.id !== id);

  // B2 : Render lại giao diện sau khi xóa
  saveData();
  renderTodoList();
};

// CV4 : Edit Todo
const editTodo = (id) => {
  const todoToUpdate = todoList.find((t) => t.id === id);
  if (!todoToUpdate) {
    console.log("Todo not found");
    return;
  }

  const newTitle = window.prompt("Enter the new title:", todoToUpdate.title);
  if (newTitle === null || newTitle.trim().length === 0) {
    console.log("Invalid title. Edit canceled.");
    return;
  }

  todoToUpdate.title = newTitle.trim();
  saveData();
  renderTodoList();
};

// CV5 : Toggle status
const toggleStatus = (id) => {
  const todoToUpdate = todoList.find((t) => t.id === id);
  if (!todoToUpdate) {
    console.log("Todo not found");
    return;
  }

  todoToUpdate.status = !todoToUpdate.status;
  saveData();
  renderTodoList();
};

renderTodoList();
