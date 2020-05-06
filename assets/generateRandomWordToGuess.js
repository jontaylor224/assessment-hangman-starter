function getRandomNumberUpTo (max) {
  return Math.floor(Math.random() * max)
}

const wordElement = document.querySelector('#word-to-guess')
const words = [
  'bankruptcy',
  'refrigerator',
  'ridge',
  'racecar',
  'pantomime',
  'geodesic',
  'Platonic',
  'operator',
  'variable',
  'assignment',
  'methods',
  'syntax',
  'conditional',
  'Boolean',
]

const randomIndex = getRandomNumberUpTo(words.length)
//wordElement.innerText = words[randomIndex]
let targetWord = words[randomIndex].toUpperCase()