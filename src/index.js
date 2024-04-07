document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    toDoInput(e.target.newTaskDescription.value)




  })


});



function toDoInput(job) {
  let li = document.createElement('li')
  let del = document.createElement('button')
  del.textContent = 'done'
  del.setAttribute('class', 'delete')
  del.classList.add('delete')
  li.textContent = `${job}`
  console.log(li)
  document.querySelector('#tasks').appendChild(li)
  li.appendChild(del)
  del.addEventListener('click', () => del.parentNode.remove())



}

