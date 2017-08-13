const QUIZ = [
  {
    question: "What year did ABBA win the Eurovision Song Contest that launched them into stardom?",
    option1: "1976",
    option2: "1981",
    option3: "1974",
    option4: "1971",
    answer: "1974"
  },
  {
    question: "ABBA is the best selling band of all time from outside of the English speaking world. What country do they hail from?",
    option1: "Norway",
    option2: "Denmark",
    option3: "Germany",
    option4: "Sweden",
    answer: "Sweden"
  },
  {
    question: "Which of the following songs is <em>not</em> the name of an ABBA song?",
    option1: "Ring Ring",
    option2: "Honey Honey",
    option3: "Sugar Sugar",
    option4: "I Do, I Do, I Do, I Do, I Do",
    answer: "Sugar Sugar"
  },
  {
    question: "What was their only single to hit #1 on the U.S. Billboard charts?",
    option1: "Dancing Queen",
    option2: "Take A Chance On Me",
    option3: "The Winner Takes It All",
    option4: "Voulez-Vous",
    answer: "Dancing Queen"
  },
  {
    question: "What is the name of the Broadway musical that Benny & Björn co-wrote with Tim Rice?",
    option1: "Cats",
    option2: "Mamma Mia",
    option3: "Nine",
    option4: "Chess",
    answer: "Chess"
  },
  {
    question: "Which of the following names is <em>not</em> the name of an ABBA tribute band?",
    option1: "Abbaesque",
    option2: "A*Teens",
    option3: "Abba Dabba Doo Wop",
    option4: "Björn Again",
    answer: "Abba Dabba Doo Wop"
  },
  {
    question: "What was the title of Frida’s only solo hit?",
    option1: "I Know There's Something Going On",
    option2: "Tell Me It's Over",
    option3: "You Know What I Mean",
    option4: "Strangers",
    answer: "I Know There's Something Going On"
  },
  {
    question: "Which synth pop group is credited with reviving interest in ABBA after they released an LP of ABBA cover songs in the early 90s?",
    option1: "Pet Shop Boys",
    option2: "Erasure",
    option3: "Alphaville",
    option4: "Tears for Fears",
    answer: "Erasure"
  },
  {
    question: "Let's try this one more time. Which of the following songs is <em>not</em> the name of an ABBA song?",
    option1: "Gimme Gimme Gimme",
    option2: "Baby Baby Baby",
    option3: "Money Money Money",
    option4: "On and On and On",
    answer: "Baby Baby Baby"
  },
  {
    question: "What is the name of ABBA’s self written mini operetta?",
    option1: "Voulez-Vous",
    option2: "Super Trouper",
    option3: "Thank You For the Music",
    option4: "The Girl with the Golden Hair",
    answer: "The Girl with the Golden Hair"
  }
];

let CURRENT_QUESTION_INDEX = 0;
let CORRECT_ANSWER_COUNT = 0;
let QUESTIONS_ANSWERED = 0;
const TOTAL_QUESTIONS = QUIZ.length;
const QUIZ_SECTION = "#js-quiz-section";
const QUIZ_RESULTS = "#js-quiz-results";
const QUIZ_QUESTION = "#js-quiz-question";
const QUIZ_FORM_ID = "js-quiz-form";
const HIDDEN_ELEMENTS = ".js-hide-while-taking-quiz";
const QUIZ_INPUT_CLASS = "js-quiz-input";
const QUIZ_OPTION_CLASS = "js-quiz-option";
const QUIZ_QUESTION_COUNTER = ".js-question-count";
const QUIZ_SCORE = ".js-score";
const QUIZ_LOAD_ACTION = ".js-quiz-start";
const QUIZ_NEXT_ACTION = ".js-next-question";

function renderQuestionCount() {
  const currentQuestionCount = CURRENT_QUESTION_INDEX + 1;

  return `
    Question ${currentQuestionCount} / ${TOTAL_QUESTIONS}
  `
}

function renderScore() {
  return `
    Score ${CORRECT_ANSWER_COUNT} / ${QUESTIONS_ANSWERED}
  `
}

function renderQuestion() {
  const currentQuestion = QUIZ[CURRENT_QUESTION_INDEX];

  return `
    <h3 class="quiz-form__question">
      ${currentQuestion.question}
    </h3>
    <input class="quiz-form__input ${QUIZ_INPUT_CLASS}" type="radio" name="question" id="option-1" value="${currentQuestion.option1}">
    <label class="quiz-form__option ${QUIZ_OPTION_CLASS}" for="option-1">
      <span class="quiz-form__option-answer">
        ${currentQuestion.option1}
      </span>
    </label>

    <input class="quiz-form__input ${QUIZ_INPUT_CLASS}" type="radio" name="question" id="option-2" value="${currentQuestion.option2}">
    <label class="quiz-form__option ${QUIZ_OPTION_CLASS}" for="option-2">
      <span class="quiz-form__option-answer">
        ${currentQuestion.option2}
      </span>
    </label>

    <input class="quiz-form__input ${QUIZ_INPUT_CLASS}" type="radio" name="question" id="option-3" value="${currentQuestion.option3}">
    <label class="quiz-form__option ${QUIZ_OPTION_CLASS}" for="option-3">
      <span class="quiz-form__option-answer">
        ${currentQuestion.option3}
      </span>
    </label>

    <input class="quiz-form__input ${QUIZ_INPUT_CLASS}" type="radio" name="question" id="option-4" value="${currentQuestion.option4}">
    <label class="quiz-form__option ${QUIZ_OPTION_CLASS}" for="option-4">
      <span class="quiz-form__option-answer">
        ${currentQuestion.option4}
      </span>
    </label>
    <button type="submit" class="quiz-form__button">Submit</button>
  `;
}

function renderResults() {
  if (CORRECT_ANSWER_COUNT > (TOTAL_QUESTIONS / 2)) {
    return `
      <h2 class="non-quiz-section__title">Score ${CORRECT_ANSWER_COUNT} / ${QUESTIONS_ANSWERED}</h2>
      <h3 class="non-quiz-section__info">Great job! You truly are a dancing queen!</h3>
      <img src="images/abba-dancing-queen.gif" alt='A silent clip of Frida performing Dancing Queen with subtitles of the lyrics "Dancing Queen feel the beat from the tambourine"' class="non-quiz-section__image">
    `;
  }
  else {
    return `
      <h2 class="non-quiz-section__title">Score ${CORRECT_ANSWER_COUNT} / ${QUESTIONS_ANSWERED}</h2>
      <h3 class="non-quiz-section__info">Sorry. You are the loser in this melody. Better luck next time.</h3>
      <img src="images/abba-loser-fall.gif" alt='A silent clip of Agnethe singing The Winner Takes It All with subtitles of the lyrics "The winner takes it all, the loser has to fall."' class="non-quiz-section__image">
    `;
  }
}

function showQuestionCount() {
  $(QUIZ_QUESTION_COUNTER).empty().prepend(renderQuestionCount);
}

function showScore() {
  $(QUIZ_SCORE).empty().prepend(renderScore);
}

function showQuestion() {
  $(`#${QUIZ_FORM_ID}`).empty().prepend(renderQuestion);
}

function showResults() {
  $(QUIZ_SECTION).hide();
  $(QUIZ_RESULTS).empty().prepend(renderResults);
  $(".js-quiz-results-container").show();
}

function increaseQuestionCount(index) {
  event.preventDefault();

  if (QUESTIONS_ANSWERED === TOTAL_QUESTIONS) {
    showResults();
  } 
  else {
    index++;
  }

  CURRENT_QUESTION_INDEX = index;
}

function findCorrectAnswer() {
  const currentQuestion = QUIZ[CURRENT_QUESTION_INDEX];
  const possibleAnswers = Object.values(currentQuestion).slice(1, 5);
  let correctAnswerIndex = "";

  for (let i = 0; i < possibleAnswers.length; ++i) {
    if (possibleAnswers[i] === currentQuestion.answer) {
      correctAnswerIndex = i;
    }
  }
  return correctAnswerIndex;
}

function showAnswer(rightWrong) {
  const answer = $(`.${QUIZ_INPUT_CLASS}:checked`);
  const evaluation = evaluateAnswer(rightWrong);
  const correctAnswerIndex = findCorrectAnswer() + 1;
  const correctAnswer = $(`.${QUIZ_INPUT_CLASS}:nth-of-type(${correctAnswerIndex})`);
  const correctInsert = "<span class='quiz-form__response'>correct!</span>";

  if (evaluation == "empty") {
    alert("You must choose an answer!");
  }
  else if (evaluation == "correct") {
    CORRECT_ANSWER_COUNT++;
    $(QUIZ_NEXT_ACTION).show();
    $(`#${QUIZ_FORM_ID}`).find(':input[type=submit]').prop('disabled', true);
    $(correctAnswer).addClass("correct-answer").next(`.${QUIZ_OPTION_CLASS}`).append(correctInsert);
  }
  else if (evaluation == "wrong") {
    $(QUIZ_NEXT_ACTION).show();
    $(`#${QUIZ_FORM_ID}`).find(':input[type=submit]').prop('disabled', true);
    $(answer).addClass("wrong-answer");
    $(answer).next(`.${QUIZ_OPTION_CLASS}`).append("<span class='quiz-form__response'>wrong!</span>");
    $(correctAnswer).addClass("correct-answer").next(`.${QUIZ_OPTION_CLASS}`).append(correctInsert);
  }
}

function evaluateAnswer() {
  const currentQuestion = QUIZ[CURRENT_QUESTION_INDEX];
  const answer = $(`.${QUIZ_INPUT_CLASS}:checked`);
  const answerValue = answer.val();
  let evaluation = "";

  if (answerValue == undefined) {
    evaluation = "empty";
  }
  else if (answerValue === currentQuestion.answer) {
    evaluation = "correct";
    QUESTIONS_ANSWERED++;
  }
  else {
    evaluation = "wrong";
    QUESTIONS_ANSWERED++;
  }
  return evaluation;
}

function clearForm() {
  const form = document.getElementById(QUIZ_FORM_ID);
  form.reset();
}

function submitAnswer() {
  $(`#${QUIZ_FORM_ID}`).submit(function(event) {
    event.preventDefault();

    showAnswer();
  });
}

function loadQuestion() {
  $(QUIZ_NEXT_ACTION).on("click", function(event){
    event.preventDefault();
    
    $(QUIZ_NEXT_ACTION).hide();
    clearForm();
    increaseQuestionCount(CURRENT_QUESTION_INDEX);
    showQuestionCount();
    showScore();
    showQuestion();
    findCorrectAnswer();
  });
}

function startQuiz() {
  $(QUIZ_LOAD_ACTION).on("click", function(event){
    event.preventDefault();

    CURRENT_QUESTION_INDEX = 0;
    CORRECT_ANSWER_COUNT = 0;
    QUESTIONS_ANSWERED = 0;

    $(HIDDEN_ELEMENTS).hide();
    $(QUIZ_SECTION).show();
    showQuestionCount();
    showScore();
    showQuestion();
  });
}

function theQuiz() {
  startQuiz();
  loadQuestion();
  submitAnswer();
}

$(theQuiz);