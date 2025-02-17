
var getQuote = [
    {
        quote: `“Be yourself; everyone else is already taken.”`,
        writer: `― Oscar Wilde`
    },
    {
        quote: `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
        writer: `― Marilyn Monroe`
    },
    {
        quote: `“So many books, so little time.”`,
        writer: `― Frank Zappa`
    },
    {
        quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
        writer: `― Albert Einstein`
    },
    {
        quote: `“A room without books is like a body without a soul.”`,
        writer: `― Marcus Tullius Cicero`
    },
    {
        quote: `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
        writer: `― Bernard M. Baruch`
    },
    {
        quote: `“You've gotta dance like there's nobody watching,
                  Love like you'll never be hurt,
                   Sing like there's nobody listening,
                    And live like it's heaven on earth.”`,
        writer: `― William W. Purkey`
    },
    {
        quote: `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
        writer: `― Dr. Seuss`
    },
    {
        quote: `“You only live once, but if you do it right, once is enough.”`,
        writer: `― Mae West`
    },
    {
        quote: `“Be the change that you wish to see in the world.”`,
        writer: `― Mahatma Gandhi`
    },
    {
        quote: `“In three words I can sum up everything I've learned about life: it goes on.”`,
        writer: `― Robert Frost`
    },
    {
        quote: `“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”`,
        writer: `― J.K. Rowling`
    },
    {
        quote: `“Don’t walk in front of me… I may not follow
                  Don’t walk behind me… I may not lead
                   Walk beside me… just be my friend”`,
        writer: `― Albert Camus`
    },
    {
        quote: `“If you tell the truth, you don't have to remember anything.”`,
        writer: `― Mark Twain`
    },
    {
        quote: `“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”`,
        writer: `― Maya Angelou`
    },
    {
        quote: `“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”`,
        writer: `― C.S. Lewis, The Four Loves`
    },
    {
        quote: `“A friend is someone who knows all about you and still loves you.”`,
        writer: `― Elbert Hubbard`
    },
    {
        quote: `“To live is the rarest thing in the world. Most people exist, that is all.”`,
        writer: `― Oscar Wilde`
    },
    {
        quote: `“Always forgive your enemies; nothing annoys them so much.”`,
        writer: `― Oscar Wilde`
    },
    {
        quote: `“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”`,
        writer: `― Martin Luther King `
    },
    {
        quote: `“Live as if you were to die tomorrow. Learn as if you were to live forever.”`,
        writer: `― Mahatma Gandhi`
    },
    {
        quote: `“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”`,
        writer: ` ― Ralph Waldo Emerson`
    }
];


var oldQuoteNum = -1;
function checkDuplicate() {
    var randomQuoteNum;
    do {
        randomQuoteNum = Number.parseInt(Math.random() * getQuote.length);
    } while (oldQuoteNum == randomQuoteNum);
    oldQuoteNum = randomQuoteNum;
    return randomQuoteNum;
}

function quote() {
    var randomIndex = checkDuplicate();
    var randomQuote = getQuote[randomIndex];
   document.getElementById("nweQuote").innerHTML = randomQuote.quote ;
   document.getElementById("writer").innerHTML = randomQuote.writer ;
   console.log(randomIndex);
}

// function quote() {
//     var randomIndex = Math.floor(Math.random()*getQuote.length);
//     var randomQuote = getQuote[randomIndex];
//    document.getElementById("nweQuote").innerHTML = randomQuote.quote ;
//    document.getElementById("writer").innerHTML = randomQuote.writer ;
//    console.log(randomIndex);
// }






