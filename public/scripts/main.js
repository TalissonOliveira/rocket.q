import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

/* Quando clicar em marcar como lido */
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(checkButton => {
    checkButton.addEventListener('click', handleClick)
})

/* Quando clicar em excluir */
const deleteButtons = document.querySelectorAll('.actions a.delete')

deleteButtons.forEach(deleteButton => {
    deleteButton.addEventListener('click', event => handleClick(event, false))
})

function handleClick(event, check = true) {
    event.preventDefault()
    
    const slug = check ? 'check' : 'delete'
    const roomId = document.querySelector('#room-id').dataset.id
    const form = document.querySelector('.modal form')
    const questionId = event.target.dataset.id

    form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML = check ? 'Marcar como lida' : 'Excluir pergunta'
    modalDescription.innerHTML = check ? 'Tem certeza que você deseja marcar como lida esta pergunta?': 'Tem certeza que você deseja excluir esta pergunta?'
    modalButton.innerHTML = check ? 'Sim, marcar como lida' : 'Sim, excluir'

    check ? modalButton.classList.remove('red') : modalButton.classList.add('red')

    modal.open()
}