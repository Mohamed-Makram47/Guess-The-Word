let notrials = 6;
let noletters = 5;
let currenttrial = 1;
// Generate a random word
words = [
    "About", "Alert", "Argue", "Beach",
    "Above", "Alike", "Arise", "Began",
    "Abuse", "Alive", "Array", "Begin",
    "Actor", "Allow", "Aside", "Begun",
    "Acute", "Alone", "Asset", "Being",
    "Admit", "Along", "Audio", "Below",
    "Adopt", "Alter", "Audit", "Bench",
    "Adult", "Among", "Avoid", "Billy",
    "After", "Anger", "Award", "Birth",
    "Again", "Angle", "Aware", "Black",
    "Agent", "Angry", "Badly", "Blame",
    "Agree", "Apart", "Baker", "Blind",
    "Ahead", "Apple", "Bases", "Block",
    "Alarm", "Apply", "Basic", "Blood",
    "Album", "Arena", "Basis", "Board",
    "Boost", "Buyer", "China", "Cover",
    "Booth", "Cable", "Chose", "Craft",
    "Bound", "Calif", "Civil", "Crash",
    "Brain", "Carry", "Claim", "Cream",
    "Brand", "Catch", "Class", "Crime",
    "Bread", "Cause", "Clean", "Cross",
    "Break", "Chain", "Clear", "Crowd",
    "Breed", "Chair", "Click", "Crown",
    "Brief", "Chart", "Clock", "Curve",
    "Bring", "Chase", "Close", "Cycle",
    "Broad", "Cheap", "Coach", "Daily",
    "Broke", "Check", "Coast", "Dance",
    "Brown", "Chest", "Could", "Dated",
    "Build", "Chief", "Count", "Dealt",
    "Built", "Child", "Court", "Death",
    "Debut", "Entry", "Forth", "Group",
    "Delay", "Equal", "Forty", "Grown",
    "Depth", "Error", "Forum", "Guard",
    "Doing", "Event", "Found", "Guess",
    "Doubt", "Every", "Frame", "Guest",
    "Dozen", "Exact", "Frank", "Guide",
    "Draft", "Exist", "Fraud", "Happy",
    "Drama", "Extra", "Fresh", "Harry",
    "Drawn", "Faith", "Front", "Heart",
    "Dream", "False", "Fruit", "Heavy",
    "Dress", "Fault", "Fully", "Hence",
    "Drill", "Fibre", "Funny", "Night",
    "Drink", "Field", "Giant", "Horse",
    "Drive", "Fifth", "Given", "Hotel",
    "Drove", "Fifty", "Glass", "House",
    "Dying", "Fight", "Globe", "Human",
    "Eager", "Final", "Going", "Ideal",
    "Early", "First", "Grace", "Image",
    "Earth", "Fixed", "Grade", "Index",
    "Eight", "Flash", "Grand", "Inner",
    "Elite", "Fleet", "Grant", "Input",
    "Empty", "Floor", "Grass", "Issue",
    "Enemy", "Fluid", "Great", "Irony",
    "Enjoy", "Focus", "Green", "Juice",
    "Enter", "Force", "Gross", "Joint",
    "Judge", "Metal", "Media", "Newly",
    "Known", "Local", "Might", "Noise",
    "Label", "Logic", "Minor", "North",
    "Large", "Loose", "Minus", "Noted",
    "Laser", "Lower", "Mixed", "Novel",
    "Later", "Lucky", "Model", "Nurse",
    "Laugh", "Lunch", "Money", "Occur",
    "Layer", "Lying", "Month", "Ocean",
    "Learn", "Magic", "Moral", "Offer",
    "Lease", "Major", "Motor", "Often",
    "Least", "Maker", "Mount", "Order",
    "Leave", "March", "Mouse", "Other",
    "Legal", "Music", "Mouth", "Ought",
    "Level", "Match", "Movie", "Paint",
    "Light", "Mayor", "Needs", "Paper",
    "Limit", "Meant", "Never", "Party",
    "Peace", "Power", "Radio", "Round",
    "Panel", "Press", "Raise", "Route",
    "Phase", "Price", "Range", "Royal",
    "Phone", "Pride", "Rapid", "Rural",
    "Photo", "Prime", "Ratio", "Scale",
    "Piece", "Print", "Reach", "Scene",
    "Pilot", "Prior", "Ready", "Scope",
    "Pitch", "Prize", "Refer", "Score",
    "Place", "Proof", "Right", "Sense",
    "Plain", "Proud", "Rival", "Serve",
    "Plane", "Prove", "River", "Seven",
    "Plant", "Queen", "Quick", "Shall",
    "Plate", "Sixth", "Stand", "Shape",
    "Point", "Quiet", "Roman", "Share",
    "Pound", "Quite", "Rough", "Sharp",
    "Sheet", "Spare", "Style", "Times",
    "Shelf", "Speak", "Sugar", "Tired",
    "Shell", "Speed", "Suite", "Title",
    "Shift", "Spend", "Super", "Today",
    "Shirt", "Spent", "Sweet", "Topic",
    "Shock", "Split", "Table", "Total",
    "Shoot", "Spoke", "Taken", "Touch",
    "Short", "Sport", "Taste", "Tough",
    "Shown", "Staff", "Taxes", "Tower",
    "Sight", "Stage", "Teach", "Track",
    "Since", "Stake", "Teeth", "Trade",
    "Sixty", "Start", "Texas", "Treat",
    "Sized", "State", "Thank", "Trend",
    "Skill", "Steam", "Theft", "Trial",
    "Sleep", "Steel", "Their", "Tried",
    "Slide", "Stick", "Theme", "Tries",
    "Small", "Still", "There", "Truck",
    "Smart", "Stock", "These", "Truly",
    "Smile", "Stone", "Thick", "Trust",
    "Smith", "Stood", "Thing", "Truth",
    "Smoke", "Store", "Think", "Twice",
    "Solid", "Storm", "Third", "Under",
    "Solve", "Story", "Those", "Undue",
    "Sorry", "Strip", "Three", "Union",
    "Sound", "Stuck", "Threw", "Unity",
    "South", "Study", "Throw", "Until",
    "Space", "Stuff", "Tight", "Upper",
    "Upset", "Whole", "Waste", "Wound",
    "Urban", "Whose", "Watch", "Write",
    "Usage", "Woman", "Water", "Wrong",
    "Usual", "Train", "Wheel", "Wrote",
    "Valid", "World", "Where", "Yield",
    "Value", "Worry", "Which", "Young",
    "Video", "Worse", "While", "Youth",
    "Virus", "Worst", "White", "Worth",
    "Visit", "Would", "Vital", "Voice",
    "Zebra","Queue","Adore", "Agent", "Alert", "Ample", "Angle", "Arbor", "Arena", "Aside", 
    "Badge", "Basin", "Bliss", "Bonus", "Bound", "Brain", "Brave", "Breed", 
    "Broke", "Climb", "Crane", "Creek", "Dance", "Draft", "Drive", "Dwell", 
    "Eager", "Earth", "Elite", "Fancy", "Flame", "Frost", "Glare", "Grind", 
    "Guide", "Habit", "Hinge", "Honor", "Ideal", "Index", "Jolly", "Keen", 
    "Laser", "Ledge", "Lemon", "Liver", "Lower", "March", "Mount", "Nerve", 
    "Noble", "Nurse", "Orbit", "Patch", "Piano", "Pitch", "Proud", "Quest", 
    "Quirk", "Raise", "Reign", "River", "Rough", "Scare", "Shady", "Slice", 
    "Solid", "Spice", "Stare", "Stern", "Tango", "Thick", "Trick", "Twist", 
    "Unity", "Vivid", "Wager", "Weary", "Whale", "Whisk", "Witty", "Yield",
    "Xenon", "Extra", "Exact", "Exams", "oxides"
]
let randomWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
// CREATION OF GAME AREA
function generategame() {
    let rows = document.querySelector('.rows');
    for (let i = 1; i <= notrials; i++) {
        let row = document.createElement('div');
        row.classList.add(`row${i}`);
        for (let j = 1; j <= noletters; j++) {
            let box = document.createElement('input');
            box.type = "text";
            box.id = `row${i}-box${j}`;
            box.setAttribute("maxlength", "1");
            row.appendChild(box);
        }
        rows.appendChild(row);
    }
    Disableall();
    enableCurrentTrial();
    const boxes = document.querySelectorAll('input');
    // Capitalize input and handle backspace
    boxes.forEach((box, index) => {
        box.addEventListener('input', () => {
            box.value = box.value.toUpperCase();
            let nextbox = boxes[index + 1];
            if (nextbox) nextbox.focus();
        });
        box.addEventListener('keydown', (event) => {
            if (event.key === 'Backspace') {
                if (box.value === '') {
                    let prevBox = boxes[index - 1];
                    if (prevBox) {
                        prevBox.focus();
                        event.preventDefault();
                    }
                } else {
                    box.value = '';
                }
            }
        });
    });
}

// Disable all inputs
function Disableall() {
    let allInputs = document.querySelectorAll('.rows input');
    allInputs.forEach(box => {
        box.disabled = true;
    });
}

// Enable the inputs for the current trial
function enableCurrentTrial() {
    let currentRow = document.querySelector(`.row${currenttrial}`);
    let boxes = currentRow.querySelectorAll('input');
    boxes.forEach(box => {
        box.disabled = false;
    });
    currentRow.children[0].focus();
}
// Check if all boxes in the current row are filled
function isRowFilled() {
    let currentRow = document.querySelector(`.row${currenttrial}`);
    let boxes = currentRow.querySelectorAll('input');
    for (let box of boxes) {
        if (box.value === '') return false;
    }
    return true;
}
function checkrow() {
    let message = document.querySelector('.message');
    let currentRow = document.querySelector(`.row${currenttrial}`);
    let boxes = currentRow.querySelectorAll('input');
    let userGuess = "";

    boxes.forEach((box) => {
        userGuess += box.value;
    });

    if (userGuess === randomWord.toUpperCase()) {
        message.innerHTML = `Congratulations!! The word is ${userGuess}`; 
        Disableall();
        for (let i = 0; i < noletters; i++) {
            let box = document.querySelector(`#row${currenttrial}-box${i + 1}`);
            box.style.backgroundColor = 'green'; 
            box.style.color = 'black'; 
            }
        }

    else {
        Disableall()
        for (let i = 0; i < noletters; i++) {
            let box = document.querySelector(`#row${currenttrial}-box${i + 1}`);
            let guessedLetter = userGuess[i];
            if (randomWord[i] === guessedLetter) {
                box.style.backgroundColor = 'green';
                box.style.color = 'black';  
            } else if (randomWord.includes(guessedLetter)) {
                box.style.backgroundColor = 'orange';
                box.style.color = 'black';  
            } else {
                box.style.backgroundColor = 'grey';
                box.style.color = 'black';  
            }
        }
    }
}

//CLICKING Submit
document.querySelector('.submit').addEventListener('click', () => {
    let aler = document.querySelector('.message');
    
    if (isRowFilled()) {
        if (currenttrial < notrials) {
            checkrow();
            let message = document.querySelector('.message').innerHTML;
            if (!message.includes('Congratulations')) {
                currenttrial++;
                enableCurrentTrial();
            }
        } else if (currenttrial === notrials) {
            checkrow();
            let message = document.querySelector('.message').innerHTML;
            if (!message.includes('Congratulations')) {
                aler.innerHTML = `Hard Luck! The word was ${randomWord}`;
            }
        }
    }
});


document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        let aler = document.querySelector('.message');
        if (isRowFilled()) {
            if (currenttrial < notrials) {
                checkrow();
                let message = document.querySelector('.message').innerHTML;
                if (!message.includes('Congratulations')) {
                    currenttrial++;
                    enableCurrentTrial();
                }
            } else if (currenttrial === notrials) {
                checkrow();
                let message = document.querySelector('.message').innerHTML;
                if (!message.includes('Congratulations')) {
                    aler.innerHTML = `Hard Luck! The word was ${randomWord}`;
                }
            }
        }
    }
});



//CLICKING newgame
document.querySelector('.newgame').addEventListener('click', () => {
    location.reload()
});



// OPENING
window.onload = () => {
    generategame();
};

