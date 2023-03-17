const addBtn = document.querySelectorAll(".add-btn");
const deleteBtn = document.querySelectorAll(".delete");
const editBtn = document.querySelector(".edit");
const taskBox = document.querySelectorAll(".task-box");
const tasks = document.querySelectorAll(".task");


let drag = null;

let newTask = `
<article class="task" draggable="true">
        <div class="text">Task</div>
        <div>
          <ion-icon class="edit" name="create"></ion-icon>
          <ion-icon class="delete" name="trash"></ion-icon>
        </div>
      </article>
`;

// Add new tasks
addBtn.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const btnClass = e.currentTarget.classList;
    if (btnClass.contains("start")) {
      taskBox[0].innerHTML += newTask;
    } else if (btnClass.contains("progress")) {
      taskBox[1].innerHTML += newTask;
    } else {
      taskBox[2].innerHTML += newTask;
    }

  });
});


// Delete task
taskBox.forEach(function (del) {
  del.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete")) {
      e.target.parentElement.parentElement.remove(newTask);
    }
  });
});



// Drag and drop

tasks.forEach((task) => {

  task.addEventListener("dragstart", function () {
    console.log("dragstart");
    drag = task;
    task.style.backgroundColor = "red";
  });

  task.addEventListener('dragend', function () {
    console.log('end');
  })
});
