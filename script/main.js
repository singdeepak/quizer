const questions = [{
    ques: "Who invented C programming language..?",
    a: "Deepak",
    b: "Dennish",
    c: "Sohan",
    d: "Prakash",
    ans: "b"
},

{
    ques: "What is Banekh..?",
    a: "Village",
    b: "City",
    c: "Palace",
    d: "Heritage",
    ans: "a"
},

{
    ques: "what is mango..?",
    a: "Goods",
    b: "Cheese",
    c: "Fruit",
    d: "Veg",
    ans: "c"
}];



let index = 0;
let total = questions.length;
let correct = 0;
let right = 0;
let wrong = 0;
const quesBox = document.querySelector('.question');
const optionInput = document.querySelectorAll('.options');
const loadQuestion = () => {
    if (index === total) {
        return endQuiz();
    }
    else {
        reset();
    }
    const data = questions[index];
    quesBox.innerText = `${index + 1}) ${data.ques}`;
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
    const userAns = getAnswer();
    if (userAns == data.ans) {
        right++;
    }
    else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let result;
    optionInput.forEach(
        (input) => {
            if (input.checked) {
                result = input.value;
            }
        }
    )
    return result;
}


const reset = () => {
    optionInput.forEach(
        (input) => {
            input.checked = false;
        }
    )
}


const endQuiz = () => {
    document.querySelector('.box').innerHTML = `
    <div style="text-align: center;">
    <h3>Thanku for playing the Quiz.</h3><br>
    <h2>Your Total Result</h2><br>
    <h1>Out of ${total}, Right ${right}, Wrong ${wrong}</h1>
    </div>
    `;
}

document.querySelector('.btn').addEventListener('click', submitQuiz);
loadQuestion();