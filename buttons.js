const users = [
    'V.H.Khani',
];
const goals = [
  'Make some ASP.net MVC websites','Add database','Learn python and Django','Add side technologies',
	"professional photoshop", 
	"Learn advanced Japanese","Learn French grammar','Learn German grammar",
	"Draw background art", "Learn to use (wacom))",
  "Learn Modeling"
];
const plans = [
    "Practice C# course, then asp.net", "Connect SQL", " do tutorials on realpython.com", "Learn Json, Ajax and Vue.js",
     "Edit everyday  after lunch for an hour", 
	"Finish intermediate lessons in early morning, Finish JpFromZero5 after podcats at evenings, Study Tobira", "Study french basic grammar in weekends", "listen and read german in weekdays before bed",
	"Draw in the evening for an hour", "Change art into digital using wacom for 40 minutes ", 
  "learn modeling tutrial, then model a new object",
];

let lists = [];
let listsIndex = 0;

const userElement = document.getElementById('username');
const goalElement = document.getElementById('goal');
const planElement = document.getElementById('plan');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');


const userIndex = Math.floor(Math.random() * users.length);
const user = users[userIndex];
const goalIndex = Math.floor(Math.random() * goals.length);
const goal = goals[goalIndex];
const planIndex = Math.floor(Math.random() * plans.length);
const plan = plans[planIndex];



document.getElementById('showLists').addEventListener('click', () => {
	lists = [];
	listsIndex = 0;

	const spanLists =  (goals, plans) => Array.from(Array(Math.max(goals.length, plans.length)), (_, i) => [goals[i], plans[i]]);
  //lists.map(function(list) { return `<span>${list} </span>`});
	// Convert into string and set as innerHTML on quote display
  let o = ((goals,plans) => (goals.map((k, i) => [k, plans[i]])))(goals,plans);

  let t = spanLists(goals,plans);
  text = o.toString();
	messageElement.innerHTML = (text);
	messageElement.childNodes[0].className = 'highlight' ;
	 // Clear any prior messages
	 messageElement.innerText = '';
});


document.getElementById('addGoals').addEventListener('click', () => {
	messageElement.innerText = '';
	// Clear the textbox
    typedValueElement.value = '';
    // set focus
    typedValueElement.focus();
    // set the event handler
	typedValueElement.addEventListener('input', () => {

});

document.getElementById('addPlans').addEventListener('click', () => {
	messageElement.innerText = '';
	// Clear the textbox
    typedValueElement.value = '';
    // set focus
    typedValueElement.focus();
    // set the event handler
  
});


typedValueElement.addEventListener('input', () => {
    // Get the current word
    const currentWord = words[wordIndex];
    // get the current value
    const typedValue = typedValueElement.value;
  
    if (typedValue === currentWord && wordIndex === words.length - 1) {
      // end of sentence
      // Display success
      const elapsedTime = new Date().getTime() - startTime;
      const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
      messageElement.innerText = message;
    } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
      // end of word
      // clear the typedValueElement for the new word
      typedValueElement.value = '';
      // move to the next word
      wordIndex++;
      // reset the class name for all elements in quote
      for (const wordElement of quoteElement.childNodes) {
        wordElement.className = '';
      }
      // highlight the new word
      quoteElement.childNodes[wordIndex].className = 'highlight';
    } else if (currentWord.startsWith(typedValue)) {
      // currently correct
      // highlight the next word
      typedValueElement.className = '';
    } else {
      // error state
      typedValueElement.className = 'error';
    }
  })});