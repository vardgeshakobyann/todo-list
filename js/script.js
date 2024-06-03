const tasks = [];

const form = document.querySelector('form');
const tasksParent = document.querySelector('.tasksParent');
const [input] = form;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (input.value.trim() !== '') {
        const newTask = {
            id: new Date().getTime(),
            tasks: input.value
        };
    
        tasks.push(newTask);
    }

    input.value = '';
    printTasks();
})

function printTasks () {
    tasksParent.innerHTML = '';
    tasks.forEach((elem, index) => {
        tasksParent.innerHTML += `
            <div class="item">
                <p>${elem.tasks}</p>
                <i class="fa-solid fa-trash" onclick="deleteItem(${index})"></i>
            </div>
        `
    })
}

function deleteItem (index) {
    tasks.splice(index, 1);
    printTasks();
}