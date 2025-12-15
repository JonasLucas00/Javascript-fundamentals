class TaskList {

    constructor() {
        this.arrayTasks = JSON.parse(localStorage.getItem('task')) || []
    }

    manageTasks() {
        let form = document.querySelector('.task-form');
        let taskList = document.querySelector('.task-list');

        this.indexTask()
        this.deleteIndex()

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let taskInput = document.querySelector('.new-task');

            if (!taskInput.value) {
                return alert('Value is null')
            }

            console.log(taskInput.value)
            this.addTask(taskInput, taskList)
            return taskInput.value = ''
        })

    }

    addTask(taskInput, taskList) {
        let li = document.createElement('li');
        li.classList.add('task-li')
        li.textContent = taskInput.value

        taskList.appendChild(li)
        this.saveOnStorage(li.textContent)
        this.addDeleteBtn(li)
        return
    }

    addDeleteBtn(li) {
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Clear'
        deleteBtn.classList.add('delete')
        li.appendChild(deleteBtn)

        deleteBtn.addEventListener('click', (e) => {
            li.remove()
        })
        return
    }

    saveOnStorage(li) {
        this.arrayTasks.push(li);
        console.log(this.arrayTasks)
        localStorage.setItem('task', JSON.stringify(this.arrayTasks))
    }

    indexTask() {
        let indexBtn = document.querySelector('.index-link')

        indexBtn.addEventListener('click', (e) => {
            e.preventDefault();
            let storageData = JSON.parse(localStorage.getItem('task'))
            console.log(storageData)
            return
        })
    }

    deleteIndex() {
        let deleteAll = document.querySelector('.delete-all');

        deleteAll.addEventListener('click', (e) => {
            e.preventDefault();
            this.arrayTasks = []
            localStorage.clear();
            alert('Task history deleted')
            return;
        })
    }

    showIndex(storageData) {
        let mainContainer = document.querySelector('.main-container');
        let historyDiv = document.createElement('div');
        let historyData = JSON.parse(localStorage.getItem('task'));
        historyDiv.textContent = historyData
        // gis
    }
}
let iniciateApp = new TaskList()
iniciateApp.manageTasks()

