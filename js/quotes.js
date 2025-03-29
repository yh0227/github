const quotes =[
    {
        quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author:"Nelson Mandela",
    },
    {
        quote:"In the end, it is not the years in your life that count. It is the life in your years.",
        author:"Abraham Lincoln",
    },
    {
        quote:"Life is either a daring adventure or nothing at all.",
        author:"Helen Keller",
    },
    {
        quote:"Despite the forecast, live like it is spring.",
        author:"Lilly Pulitzer",
    },
    {
        quote:"Success is going from failure to failure without a loss of enthusiasm.",
        author:"Winston Churchill",
    },
    {
        quote:"Always bear in mind that your own resolution to succeed is more important than any other.",
        author:"Abraham Lincoln",
    },
    {
        quote:"Try not to become a man of success but rather try to become a man of value.",
        author:"Albert Einstein",
    },
    {
        quote:"We must believe in luck. For how else can we explain the success of those we do not like?",
        author:"Jean Cocteau",
    },
    {
        quote:"Do not try to be original, just try to be good.",
        author:"Paul Rand",
    },
    {
        quote:"The only thing worse than starting something and failing is not starting something.",
        author:"Seth Godin",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuotes.quote;
author.innerText = todayQuotes.author;


