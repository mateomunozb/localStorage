const list = document.querySelector('.list')
const tweet = document.querySelector('.tweetContent')
const form = document.getElementById('formulario')

const addTweet = (e) => {
  e.preventDefault()
  const newTweet = document.createElement('div')
  const tweetIcon = document.createElement('i')
  const deleteTweet = document.createElement('i')
  const text = document.createElement('p')
  text.textContent = tweet.value
  tweetIcon.classList.add('fab', 'fa-twitter')
  deleteTweet.classList.add('fas', 'fa-trash-alt')
  newTweet.classList.add('prueba')
  newTweet.appendChild(tweetIcon)
  newTweet.appendChild(text)
  newTweet.appendChild(deleteTweet)
  list.appendChild(newTweet)
  saveTweetLocalStorage(tweet.value)
}

const deleteTweet = (e) => {
  const element = e.target

  if (element.classList.contains('fa-trash-alt')) {
    element.parentElement.remove()
    deleteTweetLocalStorage(element.parentElement.textContent)
  }
}

const saveTweetLocalStorage = (tweet) => {
  // localStorage.setItem('tweets', tweet)
  let tweets = getTweetsLocalStorage()

  tweets.push(tweet)

  localStorage.setItem('tweets', JSON.stringify(tweets))
}

const getTweetsLocalStorage = () => {
  let tweets

  if (localStorage.getItem('tweets') === null) {
    tweets = []
  } else {
    tweets = JSON.parse(localStorage.getItem('tweets'))
  }
  return tweets
}

const localStorageReady = () => {
  let tweets = getTweetsLocalStorage()

  tweets.forEach((tweet) => {
    const newTweet = document.createElement('div')
    const tweetIcon = document.createElement('i')
    const deleteTweet = document.createElement('i')
    const text = document.createElement('p')
    text.textContent = tweet
    tweetIcon.classList.add('fab', 'fa-twitter')
    deleteTweet.classList.add('fas', 'fa-trash-alt')
    newTweet.classList.add('prueba')
    newTweet.appendChild(tweetIcon)
    newTweet.appendChild(text)
    newTweet.appendChild(deleteTweet)
    list.appendChild(newTweet)
  })
}

const deleteTweetLocalStorage = (tweet) => {
  let tweets = getTweetsLocalStorage()

  const index = tweets.indexOf(tweet)

  tweets.splice(index, 1)

  localStorage.setItem('tweets', JSON.stringify(tweets))
}

form.addEventListener('submit', addTweet)

list.addEventListener('click', deleteTweet)

document.addEventListener('DOMContentLoaded', localStorageReady)
