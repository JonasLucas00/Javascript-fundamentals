class TaskList {

    constructor() {
        this.arrayTasks = JSON.parse(localStorage.getItem('task')) || []
    }

    manageTasks() {
        let form = document.querySelector('.task-form');
        let taskList = document.querySelector('.task-list');
        // let historyDiv = document.querySelector('.history-div');

        // this.changeClass(historyDiv)
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

            if (!storageData) {
                alert('You dont have a task history')
                return
            }
            console.log(storageData)
            this.showIndex(storageData)

            //Changes hitory-div className for CSS
            this.changeClass()
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
        let textBtnDiv = document.querySelector('.text-btn-div');


        // Remove old title if exists
        let oldTitleHistory = document.querySelector('.title-history')
        if (oldTitleHistory) {
            oldTitleHistory.remove()
        }

        //Create new title and add to the mainContainer
        let title = document.createElement('h1')
        title.classList.add('title-history')
        title.textContent = 'Your task history'
        textBtnDiv.appendChild(title)

        //Iniciate the event listener to clear the history and add the clearButton
        let ulDiv = document.querySelector('.history-ul')
        this.clearHistory(textBtnDiv, ulDiv)

        //Remove old task list history if exists
        let oldLiHistory = document.querySelectorAll('.history-li')
        if (oldLiHistory) {
            for (let li of oldLiHistory) {
                li.remove()
            }
        }

        // Iterate over the array 'storageData' and create a 'li' for each element to add to the ulDiv
        for (let data of storageData) {
            let liHistory = document.createElement('li')
            liHistory.textContent += data
            liHistory.classList.add('history-li')
            ulDiv.appendChild(liHistory)
        }
        return
    }

    clearHistory(textBtnDiv, ulDiv) {
        let oldBtn = document.querySelector('.clear-btn');

        if (oldBtn) {
            oldBtn.remove()
        }
        let clearBtn = document.createElement('button');
        clearBtn.textContent = 'Clear history'
        clearBtn.classList.add('clear-btn')
        textBtnDiv.appendChild(clearBtn)
        clearBtn.addEventListener('click', (e) => {
            let historyDiv = document.querySelector('.container-history');
            historyDiv.classList.replace('container-history', 'history-div')
            ulDiv.textContent = ''
            textBtnDiv.textContent = ''
        })
    }

    // Changes hitory-div class name, to container-history
    changeClass() {
        let historyDiv = document.querySelector('.history-div');
        historyDiv.classList.add('container-history')
        return
    }
}
let iniciateApp = new TaskList()
iniciateApp.manageTasks()

