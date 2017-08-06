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
    option2: "The Girl with the Golden Hair",
    option3: "Thank You For the Music",
    option4: "Super Trouper",
    answer: "The Girl with the Golden Hair"
  }
];

let CURRENT_QUESTION = 0;
let CORRECT_ANSWER_COUNT = 0;
let QUESTIONS_ANSWERED = 0;
const TOTAL_QUESTIONS = QUIZ.length;

function renderQuestion() {
  const currentQuestion = QUIZ[CURRENT_QUESTION];
  return `
    <header class="quiz-section__header">
      <h2>
        Question ${CURRENT_QUESTION + 1} / ${TOTAL_QUESTIONS}
      </h2>
      <h2>
        Score ${CORRECT_ANSWER_COUNT} / ${QUESTIONS_ANSWERED}
      </h2>
    </header>
    <form class="quiz-form" id="js-quiz-form">
      <h3 class="quiz-form__question">
        ${currentQuestion.question}
      </h3>
      <input class="quiz-form__input js-quiz-input" type="radio" name="question" id="option-1" value="${currentQuestion.option1}">
      <label class="quiz-form__option js-quiz-option" for="option-1">
        <span class="quiz-form__option-answer">
          ${currentQuestion.option1}
        </span>
      </label>

      <input class="quiz-form__input js-quiz-input" type="radio" name="question" id="option-2" value="${currentQuestion.option2}">
      <label class="quiz-form__option js-quiz-option" for="option-2">
        <span class="quiz-form__option-answer">
          ${currentQuestion.option2}
        </span>
      </label>

      <input class="quiz-form__input js-quiz-input" type="radio" name="question" id="option-3" value="${currentQuestion.option3}">
      <label class="quiz-form__option js-quiz-option" for="option-3">
        <span class="quiz-form__option-answer">
          ${currentQuestion.option3}
        </span>
      </label>

      <input class="quiz-form__input js-quiz-input" type="radio" name="question" id="option-4" value="${currentQuestion.option4}">
      <label class="quiz-form__option js-quiz-option" for="option-4">
        <span class="quiz-form__option-answer">
          ${currentQuestion.option4}
        </span>
      </label>
      <button type="submit" class="hidden"></button>
    </form>
  `;
}

function renderResults() {
  return `
    <h2>Score ${CORRECT_ANSWER_COUNT} / ${QUESTIONS_ANSWERED}</h2>
    <h3 class="non-quiz-section__info">Great job! You truly are a dancing queen!</h3>
    <img src="images/abba-dancing-queen.gif" alt='A silent clip of Frida performing Dancing Queen with subtitles of the lyrics "Dancing Queen feel the beat from the tambourine"' class="non-quiz-section__image">
    <button type="reset" class="js-restart">Try again</button>
  `;
}

function showQuestion() {
  $("#js-quiz-question").empty().prepend(renderQuestion);
  evaluateAnswer();
  submitOnClick();
}

function showResults() {
  $("#js-quiz-section").hide();
  $("#js-quiz-results").show().prepend(renderResults);
  $(restartQuiz);
}

function evaluateAnswer() {
  $("#js-quiz-form").submit(function(event) {
    event.preventDefault();
    const currentQuestion = QUIZ[CURRENT_QUESTION];
    const answer = $(this).find(".js-quiz-input:checked");
    const answerValue = answer.val();

    if (answerValue === currentQuestion.answer) {
      $(answer).addClass("correct-answer");
      $(answer).next(".js-quiz-option").append("<span class='quiz-form__response'>correct!</span>");
      CORRECT_ANSWER_COUNT++;
    }
    else {
      // also display correct answer
      $(answer).addClass("wrong-answer");
      $(answer).next(".js-quiz-option").append("<span class='quiz-form__response'>wrong!</span>");
    }

    QUESTIONS_ANSWERED++;
    nextStep(CURRENT_QUESTION);
    $(this).reset();
  });
}

function nextStep(index) {
  if (QUESTIONS_ANSWERED === TOTAL_QUESTIONS) {
    showResults();
  } 
  else {
    index++;
  }

  CURRENT_QUESTION = index;
  setTimeout(showQuestion, 1500);
}

function submitOnClick() {
  $(".js-quiz-option").on("click", function() {
    $(this).prev(".js-quiz-input").attr("checked", true);
    $("#js-quiz-form").submit();
  });
}

function restartQuiz() {
  $(".js-restart").on("click", function(event){
    event.preventDefault;
    CURRENT_QUESTION = 0;
    CORRECT_ANSWER_COUNT = 0;
    QUESTIONS_ANSWERED = 0;
    $(".js-hide-while-taking-quiz").hide();
    $("#js-quiz-section").show();
    $("#js-quiz-results").empty();
    $(showQuestion);
  });
}

function loadPage() {
  $(".js-quiz-start").on("click", function(event) {
    $(".js-hide-while-taking-quiz").hide();
    $("#js-quiz-section").show();
    $(showQuestion);
  });
}

$(loadPage);