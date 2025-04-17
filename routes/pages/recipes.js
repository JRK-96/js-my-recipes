
const router = require('express').Router()
const path = require('path')
const { title } = require('process')
const root = path.join(__dirname, '..', '..', 'public')

router.get('/', (_, response) => response.sendFile('index.htm', { root }))

module.exports = router

(async () => {

const recipeModal = document.querySelector('#recipeModal')
const modalImage = document.querySelector('#modalImage')
const modalTitle = document.querySelector('#modalTitle')
const modalPrepTime = document.querySelector('#modalPrepTime')
const modalDifficulty = document.querySelector('#modalDifficulty')


const recipes = require('js-my-recipes/data/recipes.json')




recipes.map(getRecipes);

json = function getRecipes(recipes) {
    return [recipes.id, recipes.title, recipes.image, recipes.prepTime, recipes.difficulty]
}

const response = await fetch(`/api/v1`)
const json = await response.json()

recipeModal.textContent = id
modalImage.image = image
modalTitle.textContent = title
modalPrepTime.textContent = prepTime
modalDifficulty.textContent = difficulty



})()
