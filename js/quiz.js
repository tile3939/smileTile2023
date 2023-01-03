console.log("明けましておめでとうございます！");

const quiz = [
  {
    question: "この画像の張り方の名称は？",
    question_image: "image/yougo/yougo_umameji.jpeg",
    answers: ["イモ目地", "うま目地", "四半張り"],
    corect: "うま目地",
  },
  {
    question: "吸水率3.0%以下の磁器質タイルの分類はどれ？",
    question_image: "image/yougo/yougo_jikisitu.jpg",
    answers: ["Ⅰ類", "Ⅱ類", "Ⅲ類"],
    corect: "Ⅰ類",
  },
  {
    question:
      "画像のような排水トラップへの絞り込み勾配の床面に適したタイルの大きさは？",
    question_image: "image/yougo/yoougo_koubai.jpg",
    answers: ["600角", "300角", "50角"],
    corect: "50角",
  },
];

const quizLength = quiz.length;
let quizCount = 0;
const mondaiArea = document.querySelector(".syutudai_container");
console.log(mondaiArea);
const startButton = document.querySelector(".startButton");
const answerButton = document.querySelectorAll(".answerButton");
const judge_area = document.querySelector(".judge_area");
const nextButton = document.querySelector(".nextButton");
const button_filter = document.querySelector(".button_filter");
console.log(startButton, answerButton, nextButton);
const nextbuttoninit = () => nextButton.classList.add("none");
nextbuttoninit();
const filterinit = () => button_filter.classList.add("none");
filterinit();

const init = () => {
  filterinit();

  judge_area.firstChild.textContent = "";
  mondaiArea.innerHTML = "";
  mondaiArea.insertAdjacentText("beforeend", `第${quizCount + 1}問`);
  mondaiArea.insertAdjacentHTML("beforeend", "<br/>");
  mondaiArea.insertAdjacentText("beforeend", `${quiz[quizCount].question}`);
  console.log(`<img src=${quiz[quizCount].question_image} alt="" />`);
  mondaiArea.insertAdjacentHTML(
    "beforeend",
    `<img src=${quiz[quizCount].question_image} alt="" />`
  );
  startButton.style.display = "none";
  answerButton.forEach((button, index) => {
    button.innerText = quiz[quizCount].answers[index];
  });
};

startButton.addEventListener("click", init);
nextButton.addEventListener("click", init);

const clickHandler = (e) => {
  if (quiz[quizCount].corect === e.target.textContent) {
    judge_area.firstChild.textContent = "正解！！";
  } else {
    judge_area.firstChild.textContent = `不正解！　正解は ${quiz[quizCount].corect} でした。`;
  }
  quizCount++;
  nextButton.classList.remove("none");
  nextButton.classList.add("block");
  button_filter.classList.remove("none");
  button_filter.classList.add("block");
};

// ボタンをクリックしたら正誤判定
let handleIndex = 0;
const buttonLength = answerButton.length;
while (handleIndex < buttonLength) {
  answerButton[handleIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handleIndex++;
}
