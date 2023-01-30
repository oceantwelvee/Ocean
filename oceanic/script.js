const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () => {
  let element = document.body;
  element.classList.toggle("dark-mode");
});

const support = document.querySelector(".support");
const feedback = document.querySelector(".feedback");

support.addEventListener("click", () => {
  if (feedback.style.display === "block") {
    feedback.style.display = "none";
  } else {
    feedback.style.display = "block";
  }
});

const rightClick = document.getElementById("right-click");
const leftClick = document.getElementById("left-click");
const question = document.querySelector(".question");
const answers = document.querySelector(".answer-li");


let questions = [
  {
    ques: "Who will be involved?",
    ans: ["Student?", "Schoolboy?"]
  },
  {
    ques: "What grade is the student in?",
    ans: ["first class", "second class"]
  },
  {
    ques: "What is the student's name?",
    ans: "for example Michael"
  },
];

rightClick.addEventListener("click", (e) => {
  e.preventDefault();

  let random = Math.floor(Math.random() * questions.length);

  question.innerText = questions[random].ques;
  answers.textContent = questions[random].ans;
});

leftClick.addEventListener("click", (e) => {
  e.preventDefault();

  let random = Math.floor(Math.random() * questions.length);

  question.innerText = questions[random].ques;
  answers.textContent = questions[random].ans;
});

