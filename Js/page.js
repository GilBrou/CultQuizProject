/////On page load/////
const page = async () =>{
  
  /////Dom Elements
  const main = document.getElementById('main-section');  

  /////Variables
  let selectedQuiz;

  /////get targeted quiz in previous click (from index.html)
  let myUrl = window.location.href;
  let url_string = (window.location.href);
  let url = new URL(url_string);
  let targetId = url.searchParams.get("id");
  

  /////Get Json Data
  let quizDataBase = await myFetch();  
  let quizData = quizDataBase.Quiz
  //for (let i in quizData){quizArray.push(quizData[i])};  

  //Instanciate quizCard Class
  for (let i in quizData){
    if(quizData[i].name == targetId){
      let newQuizCard = new quizCard(
        quizData[i].name,
        quizData[i].id,
        quizData[i].tags,
        quizData[i].punchLine,
        quizData[i].taunt,
        quizData[i].scoreReact,
        quizData[i].questions
      );
      selectedQuiz = newQuizCard;
      newQuizCard.DisplayQuizInfos(page);
    };    
  };

  /////Display Questions/////
  let questions = [];
  let selectedQuestions = selectedQuiz.questions;

  for (let i in selectedQuestions){    
      let newQuestion = new Question(
        selectedQuestions[i].text,
        selectedQuestions[i].choices,
        selectedQuestions[i].answer
      );
      questions.push(newQuestion);
    };

  /////All functions/////
  const display = {
    elementShown: function(id, text) {
      let element = document.getElementById(id);
      element.innerHTML = text;
    },
    endQuiz: function() {
      function getResults(){
        let allQuestions = [];
        let allAnswers = [];
        let allResults = [];
        for (let i in questions){
          Q = questions[i].text;
          allQuestions.push(Q);
          A = questions[i].answer;
          allAnswers.push(A);
        }
        for (let i in allQuestions){
          let thatQAndA ='<div class="all-in-one">' + '<p class="h2-quiz">' + allQuestions[i]
          + '</p>' + '<p class="h3-quiz">' +  allAnswers[i] + '</p>' + '</div>';
          allResults.push(thatQAndA);
        }
        for (let i in allResults){return allResults;}
      }
      endQuizHTML = `<h1>Quiz terminé !<br>Votre score est de : ${quiz.score} / ${quiz.questions.length} </h1>`;
      this.elementShown("quiz", endQuizHTML + getResults()/* + endQuizHTML3*/);

      /*var elements = document.getElementById("quiz");
      console.log(elements);
      elements.innerHTML = elements.innerHTML.replace(/,/g,'');*/

      const modalbg = document.querySelector(".bground2"); 
      const scoreReact = document.querySelector(".reaction");
      reaction = `<h1>Score de : ${quiz.score} / ${quiz.questions.length}</h1> + '<br>' + 'coucou coucou coucou coucou coucou coucou coucou'`;
      scoreReact.innerHTML = reaction;
      modalbg2.style.display = "block";
      //close second modal
      function closeModal() {modalbg.style.display = "none";}

      //Automatically close modal
      //setTimeout(closeModal, 3500);
    }


    },
    question: function(){this.elementShown("question", quiz.getCurrentQuestion().text);},
    choices: function(){
      let choices = quiz.getCurrentQuestion().choices;
      guessHandler = (id, guess) => {
        document.getElementById(id).onclick = function() {
          quiz.guess(guess);
          quizApp();
        }
      }
      //display choices and handle guess
      for(let i = 0; i < choices.length; i++) {
        this.elementShown("choice" + i, choices[i]);
        guessHandler("guess" + i, choices[i]);
      }
    },
    progress: function() {
      let currentQuestionNumber = quiz.currentQuestionIndex + 1;
      this.elementShown("progress", currentQuestionNumber + " sur " + quiz.questions.length);
    },
  };


  /////Quiz App/////
  quizApp = () => {
    if (quiz.hasEnded()) {
      display.endQuiz();
    } else {
      display.question();
      display.choices();
      display.progress();
    } 
  }
  /////Create Quiz
  let quiz = new Quiz(questions);
  quizApp();
};

/////Initiate Main Function On Page Load
window.onload = page;
