let taskInput = document.querySelectorAll('#taskInput');
let addTaskBtn = document.getElementById('addTaskBtn');
let allTasks = document.getElementById('allTasks');
let noTask = document.getElementById('noTask');
let validationMessage = document.getElementById('validationMessage');
let closeValidationMessageBtn = document.getElementById('closeValidationMessageBtn');


// child de 3a4an lama yakon mafi4 tasks yar3li el kan mawgod zai ma howa
let noTasksShow = () => {
    if (allTasks.childElementCount == 0) {
        noTask.classList.remove('none');
        // vlasslist = read-only
    }
}

// b3rf el variables ely 3ndi 
let addTask = (name, image, date) => {

    if (name.trim() == "" || image.trim() == "" || date.trim() == "") {
        validationMessage.classList.remove('none');
        if (name.trim() == "") {
            validationMessage.innerHTML = "You must enter Name ";
        } else if (image.trim() == "") {
            validationMessage.innerHTML = "You must enter Image";
        } else if (date.trim() == "") {
            validationMessage.innerHTML = "You must enter Date";
        }
    } else {
        noTask.classList.add('none');
        validationMessage.classList.add('none');
        allTasks.innerHTML += `
        <div class='alert alert-info'> ${name}
        <img width='30' src='${image}'>
        <button class="delete text-danger float-right fa-solid fa-rectangle-xmark"></button>

        <p class='float-right'>  ${date} </p>
        </div>
        `;
        showModelFunction();

    }
    taskInput.value = "";
}

// zai function a3rf feha kol 7aga 
// render = showing the outout on the browser
let renderTask = () => {
    let allTask = {
        taskName: taskInput[0].value,
        image: taskInput[1].value,
        date: taskInput[2].value
    }
    addTask(allTask.taskName, allTask.image, allTask.date);
}

addTaskBtn.addEventListener('click', renderTask);

closeValidationMessageBtn.addEventListener('click', function () {
    validationMessage.classList.add('none');
})



document.addEventListener('click', function (t) {
    if (t.target.classList.contains('delete')) {
        t.target.parentElement.remove();
        noTasksShow();
    }
})