var grilledCheeseIngredients = [
  'bread',
  'mild cheese',
  'sharp cheese',
  'butter',
  'tomato',
  'garlic'
]

var tomatoSauceIngredients = [
  'tomato',
  'garlic',
  'olive oil',
  'basil',
  'oregano'
]
var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(array[],element) {

  array1 = [element, ...array]
  return array1

}

function destructivelyAddElementToBeginningOfArray(array[],element) {
  array.unshift(element)
  return array
}


function addElementToEndOfArray(array[],element) {
  var array1 = [...array,element]
  return array1
}

function destructivelyAddElementToEndOfArray(array[],element) {
  array.push(element)
  return array
}

function accessElementInArray(array[],index) {
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array[]) {
  return array.shift()
}

function removeElementFromBeginningOfArray(array[]) {

  var array1 = array.slice(1)
  return array1
}

function destructivelyRemoveElementFromEndOfArray(array[]) {
  array.pop()
}


function removeElementFromEndOfArray() {

}
