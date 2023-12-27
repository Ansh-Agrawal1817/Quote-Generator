// VARIABLES

var btn = document.querySelector('#new-quote') ;
var quo = document.querySelector('.quote');
var person = document.querySelector('.person');



async function showQuote() {
    var quotes = await fetch(`https://dummyjson.com/quotes/random`)
    var content = await quotes.json();
    console.log(content);
    quo.innerText = `${content?.quote}`;
    person.innerText = `${content?.author}`
}

btn.addEventListener('click',() => {
    showQuote();
});