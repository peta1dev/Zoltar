// Set up 3 arrays of 10 messages in correct formats
// Create a function to randomly select a message from an array
// Create a function to construct the 3-part message

// An array of message strings that make sense after the phrase "I see..."
const iSee = [
    "a menacing figure approaching... they want something...",
    "a woman wearing black, stylish, and silent...",
    "a letter bearing good news, but it comes with conditions...",
    "a celebration... and a couple... they're dancing...",
    "a suitcase... an airport... some type of journey...",
    "a group of people dressed in suits... and documents...",
    "a great battle, led by an uncertain general...",
    "a man... he has a look of disapproval...",
    "a woman with a pointed nose, she's whispering into someone's ear..."
   ];
 
   // An array of message strings that make sense after the phrase "I am receiving..."
   const iReceive = [
    "a portent of DOOM!!",
    "vibrations that feel... what is this feeling? Is it... love?",
    "voices from the other side...",
    "a sense of family drawing close...",
    "a sound... three loud bangs!",
    "guidance from the spirit...",
    "psychic static.. there is a spirit blocking the message...",
    "a spirit's touch... a hand on my right shoulder... the spirit is guiding me..."
   ];

   // An array of message strings that make sense after the phrase "You must..."
   const youMust = [
    "change your priorities to ensure your future. You must give your all.",
    "stop playing it safe before it is too late.",
    "do that thing you have been trying not to do.",
    "let go of the goal you had, and turn to a new future.",
    "buy BitCoin and Apple stocks. Quickly.",
    "place something red in the west quadrant of your house, ad leave it there for a week.",
    "leave an offering on the windowsill during the next full moon to ward off bad spirits.",
    "hold your tongue from now on in matters regarding other people's relationships.",
    "ask Zoltar again to tell your fortune. At this time it is unclear."
   ];

// A function to return a random string from a passed array of strings
const randFortune = (arrayOfFortunes) => {
  const numOfChoices = arrayOfFortunes.length;
  const fortuneIndex = (Math.floor(Math.random() * numOfChoices));
  return (arrayOfFortunes[fortuneIndex]);
};

// A function to log a fortune to console   
const zoltarSpeaks = () => {   
console.clear();
console.log('I am The Great Zoltar! Prepare for your fortune!');
console.log(' ');
console.log('I see ' + randFortune(iSee));
console.log(' ');
console.log('I am receiving ' + randFortune(iReceive));
console.log(' ');
console.log('You must ' + randFortune(youMust));
console.log(' ');
console.log('Zoltar has spoken!');
};

zoltarSpeaks();
