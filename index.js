import { createCard } from "./asset/crearcarta.js"
import { createButton } from "./asset/crearboton.js"
import { buttonDisabled } from "./asset/desabilitar.js"

const minCards = 1

const state = {

    quantity: minCards,

}

createButton("Add Card", "addCard")

createButton("Remove Card", "removeCard")




addCard.addEventListener('click', () => {

    createCard()

    state.quantity++

        buttonDisabled(state.quantity)

})

const removeCard = document.querySelector("#removeCard")

removeCard.addEventListener('click', () => {

    const parent = document.querySelector('#app')

    parent.removeChild(parent.lastElementChild)
    parent.removeChild(parent.lastElementChild)
    parent.removeChild(parent.lastElementChild)

    state.quantity--

        buttonDisabled(state.quantity)

})