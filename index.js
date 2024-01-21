const inputTodo = document.querySelector('.inputype')
const ButtonTodo = document.querySelector('.btntype')
const mainJobArea = document.querySelector('.maintododiv ')


ButtonTodo.addEventListener('click', createTodoList)

function createTodoList(e) {
    e.preventDefault()
    const TodoDiv = document.createElement('div')
    TodoDiv.classList.add('list-div')

    const jobsArea = document.createElement('li')
    jobsArea.classList.add('todojobs')

    jobsArea.innerText = inputTodo.value
    inputTodo.value = ''

    TodoDiv.appendChild(jobsArea)
    mainJobArea.appendChild(TodoDiv)

    const checkBtn = document.createElement('button')
    checkBtn.classList.add('checkbtn')
    checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    TodoDiv.appendChild(checkBtn)

    const delBtn = document.createElement('button')
    delBtn.classList.add('trashbtn')
    delBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
    TodoDiv.appendChild(delBtn)

}


mainJobArea.addEventListener('click', delOrSelToDojobs)


function delOrSelToDojobs(e) {
    const targetPlace = e.target

    if (targetPlace.classList.contains('checkbtn')) {

        targetPlace.parentElement.classList.toggle('todo-completed')
        console.log(targetPlace)
    }
    if (targetPlace.classList.contains('trashbtn')) {
        targetPlace.parentElement.classList.add('todo-trash')
    }
}