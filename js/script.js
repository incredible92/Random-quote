var quotes = [ {
    quote: 'There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.',
    author: '-MRIncredible',
},

{
    quote: 'I love you the more in that I believe you had liked me for my own sake and for nothing else.',
    author: 'John Keats',
},
  
{
    quote: 'But man is not made for defeat. A man can be destroyed but not defeated.',
    author:  'Ernest Hemingway',
},
  
{
    quote: 'Learning never exhausts the mind.',
    author: 'Leonardo da Vinci',
},
  
{
    quote:  'All that we see or seem is but a dream within a dream.',
    author: 'Edgar Allan Poe',
},
  
{
    quote: 'There is no charm equal to tenderness of heart.',
    author: 'Jane Austen' 
},
  
{
    quote: 'Do not mind anything that anyone tells you about anyone else. Judge everyone and everything for yourself.',
    author: 'Henry James',
},
  
{
    quote: 'You cannot shake hands with a clenched fist.',
    author: 'Indira Gandhi',
},
  
{
    quote: 'There is nothing permanent except change.',
    author: 'Heraclitus',
},
  
{
    quote: 'When you reach the end of your rope, tie a knot in it and hang on.',
    author: 'Franklin D. Roosevelt',
},   
         
  ]
  
  function newQuote() {
    var randomNumber = math.floor(math.random() * (quotes.length));
    document.getElementById('quote').innerHTML = quotes[randomNumber];
  }